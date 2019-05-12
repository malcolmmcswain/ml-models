import React from 'react'

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      size: 1,
      activation: 'none',
      bias: false,
      layers: [],
    };

    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleActivationChange = this.handleActivationChange.bind(this);
    this.handleBiasChange = this.handleBiasChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.run = this.run.bind(this);
  }

  async getData() {
    const carsDataReq = await fetch('https://storage.googleapis.com/tfjs-tutorials/carsData.json');
    const carsData = await carsDataReq.json();
    const cleaned = carsData.map(car => ({
      mpg: car.Miles_per_Gallon,
      horsepower: car.Horsepower,
    })).filter(car => (car.mpg != null && car.horsepower != null));

    return cleaned;
  }

  bindLayers(layers) {
    let chain = [], i = 1;
    layers.forEach((layer) => {
      if (i == 1) {
        chain.push(tf.layers.dense({
          inputShape: [1],
          units: parseInt(layer.size),
          activation: layer.activation,
          useBias: JSON.parse(layer.bias)
        }));
      } else {
        chain.push(tf.layers.dense({
          units: parseInt(layer.size),
          activation: layer.activation,
          useBias: JSON.parse(layer.bias)
        }));
      }
      i++;
    });
    chain.push(tf.layers.dense({units: 1, useBias: true}));
    return chain;
  }

  createModel(chainedLayers) {
    const model = tf.sequential({
      layers: chainedLayers
    });

    return model;
  }

  convertToTensor(data) {
    return tf.tidy(() => {
      tf.util.shuffle(data);

      const inputs = data.map(d => d.horsepower);
      const labels = data.map(d => d.mpg);

      const inputTensor = tf.tensor2d(inputs, [inputs.length, 1]);
      const labelTensor = tf.tensor2d(labels, [labels.length, 1]);

      const inputMax = inputTensor.max();
      const inputMin = inputTensor.min();
      const labelMax = labelTensor.max();
      const labelMin = labelTensor.min();

      const normalizedInputs = inputTensor.sub(inputMin).div(inputMax.sub(inputMin));
      const normalizedLabels = labelTensor.sub(labelMin).div(labelMax.sub(labelMin));

      return {
        inputs: normalizedInputs,
        labels: normalizedLabels,
        inputMax,
        inputMin,
        labelMax,
        labelMin,
      }
    })
  }

  async trainModel(model, inputs, labels) {
    model.compile({
      optimizer: tf.train.adam(),
      loss: tf.losses.meanSquaredError,
      metrics: ['mse'],
    });

    const batchSize = 28;
    const epochs = 100;

    return await model.fit(inputs, labels, {
      batchSize,
      epochs,
      shuffle: true,
      callbacks: tfvis.show.fitCallbacks(
        { name: 'Training Performance' },
        ['loss', 'mse'],
        {
          height: 200,
          callbacks: ['onEpochEnd']
        }
      )
    });
  }

  testModel(model, inputData, normalizationData) {
    const {inputMax, inputMin, labelMin, labelMax} = normalizationData;

    const [xs, preds] = tf.tidy(() => {
      const xs = tf.linspace(0, 1, 100);
      const preds = model.predict(xs.reshape([100, 1]));

      const unNormXs = xs.mul(inputMax.sub(inputMin)).add(inputMin);
      const unNormPreds = preds.mul(labelMax.sub(labelMin)).add(labelMin);

      return [unNormXs.dataSync(), unNormPreds.dataSync()];
    });

    const predictedPoints = Array.from(xs).map((val, i) => {
      return {x: val, y: preds[i]}
    });

    const originalPoints = inputData.map(d => ({
      x: d.horsepower,
      y: d.mpg,
    }));

    tfvis.render.scatterplot(
      {name: 'Model Predictions vs Original Data'},
      {values: [originalPoints, predictedPoints], series: ['original', 'predicted']},
      {
        xLabel: 'Horsepower',
        yLabel: 'MPG',
        height: 300
      }
    );
  }

  async run() {

    const data = await this.getData();
    const values = data.map(d => ({
      x: d.horsepower,
      y: d.mpg,
    }));

    const layers = this.bindLayers(this.state.layers);
    const model = this.createModel(layers);
    const surface = { name: 'Model Summary', tab: 'Model Inspection' };
    tfvis.show.modelSummary(surface, model);

    tfvis.render.scatterplot(
      { name: 'Horsepower v MPG', tab: 'Data' },
      {values},
      {
        xLabel: 'Horsepower',
        yLabel: 'MPG',
        height: 300
      }
    );

    const tensorData = this.convertToTensor(data);
    const {inputs, labels} = tensorData;

    await this.trainModel(model, inputs, labels);
    console.log('Done Training');

    this.testModel(model, data, tensorData);
  }

  /*componentDidMount() {
    this.run();
  }*/

  handleSizeChange(event) {
    this.setState({size: event.target.value});
  }

  handleActivationChange(event) {
    this.setState({activation: event.target.value});
  }

  handleBiasChange(event) {
    this.setState({bias: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state.activation);
    this.setState(prevState => ({
      layers: [...this.state.layers, {
        size: this.state.size,
        activation: this.state.activation,
        bias: this.state.bias
      }]
    }));
    event.preventDefault();
  }

  /*renderPreview() {
    return(
      this.state
    )
  }*/

  render() {
    return (
      <div>

        <h1 style={{fontFamily: 'Helvetica'}}>MATH 270 Honors Project Demo</h1>
        <h2>Design a neural network</h2>

        <form onSubmit={this.handleSubmit}>
          <h3>Dense Layer Generator</h3>
          <label>
            <span style={{fontWeight: 'bold'}}>Size:{' '}</span>
            <input
              type="number"
              name="units"
              value={this.state.size}
              onChange={this.handleSizeChange}
              min="1"
              max="100"
            />
          </label>
          <label style={{marginLeft: 20}}>
            <span style={{fontWeight: 'bold'}}>Activation:{' '}</span>
            <select
              name="activation"
              value={this.state.activation}
              onChange={this.handleActivationChange}
            >
              <option value="none">None</option>
              <option value="sigmoid">Sigmoid</option>
              <option value="relu">ReLu</option>
            </select>
          </label>
          <label style={{marginLeft: 20}}>
            <span style={{fontWeight: 'bold'}}>Bias:{' '}</span>
            <input
              type="radio"
              value="true"
              checked={this.state.bias === 'true'}
              onChange={this.handleBiasChange}
            />True
            <input
              type="radio"
              value="false"
              checked={this.state.bias === 'false'}
              onChange={this.handleBiasChange}
            />False
          </label>
          <input style={{marginLeft: 20}} type="submit" value="Add Layer" />
        </form>

        <h3>Preview:</h3>

        {/*<div style={{width: '500px', display: 'flex', flexDirection: 'row', padding: '25px'}}>
          <div style={{flex: 1, textAlign: 'center', fontWeight: 'bold'}}>Size</div>
          <div style={{flex: 1, textAlign: 'center', fontWeight: 'bold'}}>Activation</div>
          <div style={{flex: 1, textAlign: 'center', fontWeight: 'bold'}}>Bias</div>
        </div>*/}

        <div style={{width: '750px', display: 'flex', flexDirection: 'row'}}>
          <div style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
            <div style={{flex: 0.7, textAlign: 'center', backgroundColor: '#ffcccc', borderRadius: '15px', padding: '100px 0'}}>
              input<br />
              1<br />
              none<br />
              false<br />
            </div>
            <div style={{flex: 0.3, textAlign: 'center', marginTop: '125px'}}>→</div>
          </div>
          {this.state.layers.map((layer) => (
              <div style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
                <div style={{flex: 0.7, textAlign: 'center', backgroundColor: '#ffffcc', borderRadius: '15px', padding: '100px 0'}}>
                  layer<br />
                  {layer.size}<br />
                  {layer.activation}<br />
                  {layer.bias}<br />
                </div>
                <div style={{flex: 0.3, textAlign: 'center', marginTop: '125px'}}>→</div>
              </div>
          ))}
          <div style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
            <div style={{flex: 0.7, textAlign: 'center', backgroundColor: '#ccffcc', borderRadius: '15px', padding: '100px 0'}}>
              output<br />
              1<br />
              none<br />
              true<br />
            </div>
            <div style={{flex: 0.3, textAlign: 'center'}}/>
          </div>
        </div>

        <button style={{marginTop: '25px'}} onClick={this.run}>
          Compile, train, and test model
        </button>

        <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>
        <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-vis"></script>
      </div>
    )
  }
}

export default Home
