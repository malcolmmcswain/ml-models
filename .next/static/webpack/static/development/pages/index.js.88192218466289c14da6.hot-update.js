webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);











var _jsxFileName = "/Users/malcolmmcswain/Desktop/honors/ml-models/pages/index.js";


var Home =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["default"])(Home, _React$Component);

  function Home(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Home);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Home).call(this, props));
    _this.state = {
      size: 1,
      activation: 'none',
      bias: false,
      layers: []
    };
    _this.handleSizeChange = _this.handleSizeChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this));
    _this.handleActivationChange = _this.handleActivationChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this));
    _this.handleBiasChange = _this.handleBiasChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(Home, [{
    key: "getData",
    value: function () {
      var _getData = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
        var carsDataReq, carsData, cleaned;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch('https://storage.googleapis.com/tfjs-tutorials/carsData.json');

              case 2:
                carsDataReq = _context.sent;
                _context.next = 5;
                return carsDataReq.json();

              case 5:
                carsData = _context.sent;
                cleaned = carsData.map(function (car) {
                  return {
                    mpg: car.Miles_per_Gallon,
                    horsepower: car.Horsepower
                  };
                }).filter(function (car) {
                  return car.mpg != null && car.horsepower != null;
                });
                return _context.abrupt("return", cleaned);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getData() {
        return _getData.apply(this, arguments);
      }

      return getData;
    }()
  }, {
    key: "createModel",
    value: function createModel() {
      var model = tf.sequential({
        layers: [tf.layers.dense({
          inputShape: [1],
          units: 16,
          useBias: true
        }), tf.layers.dense({
          units: 50,
          activation: 'relu'
        }), tf.layers.dense({
          units: 50,
          activation: 'sigmoid'
        }), tf.layers.dense({
          units: 1,
          useBias: true
        })]
      });
      return model;
    }
  }, {
    key: "convertToTensor",
    value: function convertToTensor(data) {
      return tf.tidy(function () {
        tf.util.shuffle(data);
        var inputs = data.map(function (d) {
          return d.horsepower;
        });
        var labels = data.map(function (d) {
          return d.mpg;
        });
        var inputTensor = tf.tensor2d(inputs, [inputs.length, 1]);
        var labelTensor = tf.tensor2d(labels, [labels.length, 1]);
        var inputMax = inputTensor.max();
        var inputMin = inputTensor.min();
        var labelMax = labelTensor.max();
        var labelMin = labelTensor.min();
        var normalizedInputs = inputTensor.sub(inputMin).div(inputMax.sub(inputMin));
        var normalizedLabels = labelTensor.sub(labelMin).div(labelMax.sub(labelMin));
        return {
          inputs: normalizedInputs,
          labels: normalizedLabels,
          inputMax: inputMax,
          inputMin: inputMin,
          labelMax: labelMax,
          labelMin: labelMin
        };
      });
    }
  }, {
    key: "trainModel",
    value: function () {
      var _trainModel = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2(model, inputs, labels) {
        var batchSize, epochs;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                model.compile({
                  optimizer: tf.train.adam(),
                  loss: tf.losses.meanSquaredError,
                  metrics: ['mse']
                });
                batchSize = 28;
                epochs = 100;
                _context2.next = 5;
                return model.fit(inputs, labels, {
                  batchSize: batchSize,
                  epochs: epochs,
                  shuffle: true,
                  callbacks: tfvis.show.fitCallbacks({
                    name: 'Training Performance'
                  }, ['loss', 'mse'], {
                    height: 200,
                    callbacks: ['onEpochEnd']
                  })
                });

              case 5:
                return _context2.abrupt("return", _context2.sent);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function trainModel(_x, _x2, _x3) {
        return _trainModel.apply(this, arguments);
      }

      return trainModel;
    }()
  }, {
    key: "testModel",
    value: function testModel(model, inputData, normalizationData) {
      var inputMax = normalizationData.inputMax,
          inputMin = normalizationData.inputMin,
          labelMin = normalizationData.labelMin,
          labelMax = normalizationData.labelMax;

      var _tf$tidy = tf.tidy(function () {
        var xs = tf.linspace(0, 1, 100);
        var preds = model.predict(xs.reshape([100, 1]));
        var unNormXs = xs.mul(inputMax.sub(inputMin)).add(inputMin);
        var unNormPreds = preds.mul(labelMax.sub(labelMin)).add(labelMin);
        return [unNormXs.dataSync(), unNormPreds.dataSync()];
      }),
          _tf$tidy2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_tf$tidy, 2),
          xs = _tf$tidy2[0],
          preds = _tf$tidy2[1];

      var predictedPoints = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default()(xs).map(function (val, i) {
        return {
          x: val,
          y: preds[i]
        };
      });

      var originalPoints = inputData.map(function (d) {
        return {
          x: d.horsepower,
          y: d.mpg
        };
      });
      tfvis.render.scatterplot({
        name: 'Model Predictions vs Original Data'
      }, {
        values: [originalPoints, predictedPoints],
        series: ['original', 'predicted']
      }, {
        xLabel: 'Horsepower',
        yLabel: 'MPG',
        height: 300
      });
    }
  }, {
    key: "run",
    value: function () {
      var _run = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee3() {
        var data, values, model, surface, tensorData, inputs, labels;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.getData();

              case 2:
                data = _context3.sent;
                values = data.map(function (d) {
                  return {
                    x: d.horsepower,
                    y: d.mpg
                  };
                });
                model = this.createModel();
                surface = {
                  name: 'Model Summary',
                  tab: 'Model Inspection'
                };
                tfvis.show.modelSummary(surface, model);
                tfvis.render.scatterplot({
                  name: 'Horsepower v MPG',
                  tab: 'Data'
                }, {
                  values: values
                }, {
                  xLabel: 'Horsepower',
                  yLabel: 'MPG',
                  height: 300
                });
                tensorData = this.convertToTensor(data);
                inputs = tensorData.inputs, labels = tensorData.labels;
                _context3.next = 12;
                return this.trainModel(model, inputs, labels);

              case 12:
                console.log('Done Training');
                this.testModel(model, data, tensorData);

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function run() {
        return _run.apply(this, arguments);
      }

      return run;
    }()
    /*componentDidMount() {
      this.run();
    }*/

  }, {
    key: "handleSizeChange",
    value: function handleSizeChange(event) {
      this.setState({
        size: event.target.value
      });
    }
  }, {
    key: "handleActivationChange",
    value: function handleActivationChange(event) {
      this.setState({
        activation: event.target.value
      });
    }
  }, {
    key: "handleBiasChange",
    value: function handleBiasChange(event) {
      this.setState({
        bias: event.target.value
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      var _this2 = this;

      console.log(this.state.activation);
      this.setState(function (prevState) {
        return {
          layers: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this2.state.layers), [{
            size: _this2.state.size,
            activation: _this2.state.activation,
            bias: _this2.state.bias
          }])
        };
      });
      event.preventDefault();
    }
    /*renderPreview() {
      return(
        this.state
      )
    }*/

  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h1", {
        style: {
          fontFamily: 'Helvetica'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, "MATH 270 Honors Project Demo"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, "Design a neural network"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, "Dense Layer Generator"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        style: {
          fontWeight: 'bold'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, "Size:", ' '), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
        type: "number",
        name: "units",
        value: this.state.size,
        onChange: this.handleSizeChange,
        min: "1",
        max: "100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("label", {
        style: {
          marginLeft: 20
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        style: {
          fontWeight: 'bold'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, "Activation:", ' '), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("select", {
        name: "activation",
        value: this.state.activation,
        onChange: this.handleActivationChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("option", {
        value: "none",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, "None"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("option", {
        value: "sigmoid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, "Sigmoid"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("option", {
        value: "relu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, "ReLu"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("label", {
        style: {
          marginLeft: 20
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        style: {
          fontWeight: 'bold'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, "Bias:", ' '), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
        type: "radio",
        value: "true",
        checked: this.state.bias === 'true',
        onChange: this.handleBiasChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }), "True", react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
        type: "radio",
        value: "false",
        checked: this.state.bias === 'false',
        onChange: this.handleBiasChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }), "False"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
        style: {
          marginLeft: 20
        },
        type: "submit",
        value: "Add Layer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, "Preview:"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          width: '500px',
          display: 'flex',
          flexDirection: 'row'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, this.state.layers.map(function (layer) {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
          style: {
            flex: 1,
            textAlign: 'center',
            color: 'white',
            backgroundColor: 'gray',
            borderRadius: '15px',
            padding: '25px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 255
          },
          __self: this
        }, layer.size);
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }, "Compile, train, and test model"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("script", {
        src: "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("script", {
        src: "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-vis",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.88192218466289c14da6.hot-update.js.map