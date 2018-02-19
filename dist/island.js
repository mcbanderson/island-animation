(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _scalable = require('./scalable.js');

var _scalable2 = _interopRequireDefault(_scalable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Animatable = function (_Scalable) {
    _inherits(Animatable, _Scalable);

    function Animatable() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Animatable);

        /**
         * Current animation frame
         * @type {integer}
         */
        var _this = _possibleConstructorReturn(this, (Animatable.__proto__ || Object.getPrototypeOf(Animatable)).call(this, options));

        _this.currentFrame = options.currentFrame !== undefined ? options.currentFrame : 0;

        /**
         * Animation speed (number of cycles before changing frames)
         * @type {integer}
         */
        _this.frameDelay = options.frameDelay !== undefined ? options.frameDelay : 20;

        /**
         * Animation speed (number of cycles before changing frames)
         * @type {integer}
         */
        _this.delayCount = options.delayCount !== undefined ? options.delayCount : 0;

        /**
         * Number of animation frames
         * @type {Number}
         */
        _this.numberOfFrames = options.numberOfFrames !== undefined ? options.numberOfFrames : 1;
        return _this;
    }

    /**
     * Update the items current frame
     * @return {Item}
     */


    _createClass(Animatable, [{
        key: 'updateFrame',
        value: function updateFrame() {
            this.delayCount++;
            if (this.delayCount > this.frameDelay) {
                this.delayCount = this.delayCount % this.frameDelay;
                if (this.currentFrame < this.numberOfFrames - 1) {
                    this.currentFrame++;
                } else {
                    this.currentFrame = 0;
                }
            }
            return this;
        }

        /**
         * Draw the user
         * @return this
         */

    }, {
        key: 'draw',
        value: function draw(context) {
            this.calculateOpacity();
            context.globalAlpha = this.opacity;

            context.drawImage(this.image, this.currentFrame * this.width, 0, this.width, this.height, this.xPosition, this.yPosition, this.getWidth(), this.getHeight());

            context.globalAlpha = 1;

            return this;
        }
    }]);

    return Animatable;
}(_scalable2.default);

exports.default = Animatable;

},{"./scalable.js":6}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Drawable = function () {
  function Drawable() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Drawable);

    /**
     * xPosition of the item
     *
     * @type {float}
     */
    this.xPosition = options.xPosition !== undefined ? options.xPosition : 0;

    /**
     * xPosition of the item
     *
     * @type {float}
     */
    this.yPosition = options.yPosition !== undefined ? options.yPosition : 0;

    /**
     * Object width
     * @type {Number}
     */
    this.width = options.width !== undefined ? options.width : 216;

    /**
     * Object height
     * @type {Number}
     */
    this.height = options.height !== undefined ? options.height : 162;

    /**
     * Object's image
     */
    this.image = new Image();

    /**
     * Image location
     * @type {String}
     */
    this.image.src = options.image !== undefined ? options.image : "images/hill1.png";

    /**
     * Image location
     * @type {String}
     */
    this.opacityFunction = options.opacityFunction !== undefined ? options.opacityFunction : function () {
      return this.opacity;
    };

    this.opacity = options.opacity !== undefined ? options.opacity : 1;
  }

  /**
   * Draw the item
   * @return this
   */


  _createClass(Drawable, [{
    key: "draw",
    value: function draw(context) {
      this.calculateOpacity();
      context.globalAlpha = this.opacity;

      context.drawImage(this.image, 0, 0, this.width, this.height, this.xPosition, this.yPosition, this.width, this.height);

      context.globalAlpha = 1;
      return this;
    }
  }, {
    key: "calculateOpacity",
    value: function calculateOpacity() {
      this.opacity = this.opacityFunction();
    }
  }]);

  return Drawable;
}();

exports.default = Drawable;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Environment = function () {
    function Environment() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Environment);

        /**
         * Active items
         * @type {Array}
         */
        this.items = options.items !== undefined ? options.items : [];

        /**
         * Percentage progress through each animation cycle
         * @type {Number}
         */
        this.progress = 0;

        /**
         * Desired animation frames per second
         * @type {Number}
         */
        this.framesPerSecond = 60;

        /**
         * Desired island rotations per minute
         * @type {Number}
         */
        this.rotationsPerMinute = 3;

        /**
         * Current camera position (between 0 and 1 inclusive)
         * @type {Number}
         */
        // this.cameraPosition = 0;
    }

    /**
     * Initialize the canvas
     * @return null
     */


    _createClass(Environment, [{
        key: "init",
        value: function init() {
            this.canvas = document.getElementById("canvas");
            this.context = this.canvas.getContext("2d");
            this.canvas.width = 900;
            this.canvas.height = 600;
        }

        /**
         * The main event loop
         * @param  {Environment} environment
         * @return null
         */

    }, {
        key: "main",
        value: function main(environment) {
            environment.updateProgress();
            // environment.setCameraPosition(environment.progress);
            environment.moveItems();
            environment.sortItems(environment.progress);
            environment.animateItems();
            environment.clearCanvas();
            environment.drawBackground();
            environment.drawItems();
            setTimeout(environment.main.bind(null, environment), 1000 / environment.framesPerSecond);
        }

        /**
         * Clear the canvas
         * @return null
         */

    }, {
        key: "clearCanvas",
        value: function clearCanvas() {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }

        /**
         * Increment the progress tracker
         * @return null
         */

    }, {
        key: "updateProgress",
        value: function updateProgress() {
            this.progress = (this.progress + this.rotationsPerMinute / (this.framesPerSecond * 60)) % 1;
        }

        /**
         * Set the current camera position (between 0 and 1 inclusive)
         * @param  {Number} position
         * @return null
         */

    }, {
        key: "setCameraPosition",
        value: function setCameraPosition(position) {
            this.cameraPosition = position;
        }
    }, {
        key: "moveItems",
        value: function moveItems() {
            for (var i = 0; i < this.items.length; i++) {
                this.items[i].move(this.progress);
            }
        }

        /**
         * Draw all items
         * @return null
         */

    }, {
        key: "drawItems",
        value: function drawItems() {
            for (var i = 0; i < this.items.length; i++) {
                this.items[i].draw(this.context);
            }
        }
    }, {
        key: "drawBackground",
        value: function drawBackground() {
            var image = new Image();
            image.src = './images/island.png';

            this.context.save();

            this.context.setTransform(1, 0, 0, 0.333, 0, 0);
            this.context.translate(450, 1350);
            this.context.rotate(this.progress * 2 * Math.PI);
            this.context.translate(-450, -450);

            this.context.drawImage(image, 0, 0, 783, 783, 0, 0, 900, 900);

            this.context.restore();
        }

        /**
         * Update current animation frame for all items
         * @return null
         */

    }, {
        key: "animateItems",
        value: function animateItems() {
            for (var i = 0; i < this.items.length; i++) {
                this.items[i].updateFrame();
            }
        }
    }, {
        key: "sortItems",
        value: function sortItems(progress) {
            this.items.sort(function (a, b) {
                return a.getBottomY(progress) - b.getBottomY(progress);
            });
        }
    }]);

    return Environment;
}();

exports.default = Environment;

},{}],4:[function(require,module,exports){
'use strict';

var _environment = require('./environment.js');

var _environment2 = _interopRequireDefault(_environment);

var _item = require('./item.js');

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.addEventListener("load", boot);

function boot() {
    ENVIRONMENT.init();
    ENVIRONMENT.main(ENVIRONMENT);
}

var ENVIRONMENT = new _environment2.default({
    "items": [new _item2.default({
        "radiusMultiplier": 0.375,
        "scale": 0.5,
        "rotationOffset": 0.275
    }), new _item2.default({
        "radiusMultiplier": 0.75,
        "scale": 0.25
    }), new _item2.default({
        "radiusMultiplier": 0.55,
        "scale": 0.25,
        "rotationOffset": 0.235
    }), new _item2.default({
        "image": "images/mountain1.png",
        "width": 216,
        "height": 324,
        "radiusMultiplier": 0.1,
        "scale": 0.5
    }), new _item2.default({
        "image": "images/mountain3.png",
        "width": 216,
        "height": 270,
        "radiusMultiplier": 0.35,
        "scale": 0.5,
        "rotationOffset": 0.117
    }), new _item2.default({
        "image": "images/hut.png",
        "width": 54,
        "height": 54,
        "radiusMultiplier": 0.91,
        "scale": 0.50,
        "rotationOffset": 0.635
    }), new _item2.default({
        "image": "images/hut.png",
        "width": 54,
        "height": 54,
        "radiusMultiplier": 0.85,
        "scale": 0.50,
        "rotationOffset": 0.65
    }), new _item2.default({
        "image": "images/hut.png",
        "width": 54,
        "height": 54,
        "radiusMultiplier": 0.95,
        "scale": 0.50,
        "rotationOffset": 0.645
    }), new _item2.default({
        "image": "images/cloud1.png",
        "width": 108,
        "height": 72,
        "radiusMultiplier": 0.20,
        "scale": 0.5,
        "rotationOffset": 0.27,
        "verticalOffset": 70,
        "verticalOffsetFunction": function verticalOffsetFunction(progress) {
            return this.verticalOffset + 5 * Math.cos(progress * 3 * 2 * Math.PI);
        }
    }), new _item2.default({
        "image": "images/cloud1.png",
        "width": 108,
        "height": 72,
        "radiusMultiplier": 0.70,
        "scale": 0.6,
        "rotationOffset": 0.27,
        "verticalOffset": 270
    }), new _item2.default({
        "image": "images/cloud1.png",
        "width": 108,
        "height": 72,
        "radiusMultiplier": 0.20,
        "scale": 0.7,
        "rotationOffset": 0.67,
        "verticalOffset": 190,
        "opacity": 0,
        "opacityFunction": function opacityFunction() {
            if (this.opacity >= 0.99) {
                return 1;
            }
            return this.opacity += 0.001;
        }
    }), new _item2.default({
        "image": "images/tree1.png",
        "width": 72,
        "height": 137,
        "radiusMultiplier": 0.20,
        "scale": 0.35,
        "rotationOffset": 0.67
    }), new _item2.default({
        "image": "images/tree1.png",
        "width": 72,
        "height": 137,
        "radiusMultiplier": 0.27,
        "scale": 0.3,
        "rotationOffset": 0.97
    }), new _item2.default({
        "image": "images/tree1.png",
        "width": 72,
        "height": 137,
        "radiusMultiplier": 0.22,
        "scale": 0.28,
        "rotationOffset": 0.69
    }), new _item2.default({
        "image": "images/tree1.png",
        "width": 72,
        "height": 137,
        "radiusMultiplier": 0.21,
        "scale": 0.29,
        "rotationOffset": 0.63
    }), new _item2.default({
        "image": "images/tree1.png",
        "width": 72,
        "height": 137,
        "radiusMultiplier": 0.225,
        "scale": 0.25,
        "rotationOffset": 0.64
    }), new _item2.default({
        "image": "images/palm-tree1.png",
        "width": 87,
        "height": 162,
        "radiusMultiplier": 0.81,
        "scale": 0.25,
        "rotationOffset": 0.16
    }), new _item2.default({
        "image": "images/palm-tree1.png",
        "width": 87,
        "height": 162,
        "radiusMultiplier": 0.83,
        "scale": 0.25,
        "rotationOffset": 0.15
    }), new _item2.default({
        "image": "images/palm-tree1.png",
        "width": 87,
        "height": 162,
        "radiusMultiplier": 0.80,
        "scale": 0.25,
        "rotationOffset": 0.145
    }), new _item2.default({
        "image": "images/palm-tree1.png",
        "width": 87,
        "height": 162,
        "radiusMultiplier": 0.81,
        "scale": 0.25,
        "rotationOffset": 0.13
    }), new _item2.default({
        "image": "images/seagull-sprite.png",
        "width": 216,
        "height": 72,
        "radiusMultiplier": 0.81,
        "scale": 0.15,
        "rotationOffset": 0.13,
        "numberOfFrames": 16,
        "verticalOffset": 125,
        "frameDelay": 1.6,
        "rotationOffsetFunction": function rotationOffsetFunction(progress) {
            return this.rotationOffset - 0.0002;
        }
    }), new _item2.default({
        "image": "images/seagull-sprite.png",
        "width": 216,
        "height": 72,
        "radiusMultiplier": 0.84,
        "scale": 0.15,
        "rotationOffset": 0.14,
        "numberOfFrames": 16,
        "verticalOffset": 125,
        "frameDelay": 1.61,
        "currentFrame": 10,
        "rotationOffsetFunction": function rotationOffsetFunction(progress) {
            return this.rotationOffset - 0.0002;
        }
    }), new _item2.default({
        "image": "images/seagull-sprite.png",
        "width": 216,
        "height": 72,
        "radiusMultiplier": 0.78,
        "scale": 0.15,
        "rotationOffset": 0.14,
        "numberOfFrames": 16,
        "verticalOffset": 125,
        "frameDelay": 1.82,
        "currentFrame": 6,
        "rotationOffsetFunction": function rotationOffsetFunction(progress) {
            return this.rotationOffset - 0.0002;
        }
    }), new _item2.default({
        "image": "images/seagull-sprite.png",
        "width": 216,
        "height": 72,
        "radiusMultiplier": 0.375,
        "rotationOffset": 0.275,
        "scale": 0.15,
        "numberOfFrames": 16,
        "verticalOffset": 55,
        "frameDelay": 1.57,
        "currentFrame": 13,
        "rotationOffsetFunction": function rotationOffsetFunction(progress) {
            return this.startingRotationOffset + 0.045 * Math.sin(progress * 4 * 2 * Math.PI);
        },
        "radiusMultiplierFunction": function radiusMultiplierFunction(progress) {
            return this.startingRadiusMultiplier + 0.15 * Math.cos(progress * 4 * 2 * Math.PI);
        }
    }), new _item2.default({
        "image": "images/seagull-sprite.png",
        "width": 216,
        "height": 72,
        "radiusMultiplier": 0.375,
        "rotationOffset": 0.275,
        "scale": 0.15,
        "numberOfFrames": 16,
        "verticalOffset": 55,
        "frameDelay": 1.61,
        "currentFrame": 5,
        "rotationOffsetFunction": function rotationOffsetFunction(progress) {
            return this.startingRotationOffset + 0.045 * Math.sin((progress + 0.2) % 1 * 4 * 2 * Math.PI);
        },
        "radiusMultiplierFunction": function radiusMultiplierFunction(progress) {
            return this.startingRadiusMultiplier + 0.15 * Math.cos((progress + 0.2) % 1 * 4 * 2 * Math.PI);
        }
    }), new _item2.default({
        "image": "images/seagull-sprite.png",
        "width": 216,
        "height": 72,
        "radiusMultiplier": 0.375,
        "rotationOffset": 0.275,
        "scale": 0.15,
        "numberOfFrames": 16,
        "verticalOffset": 55,
        "frameDelay": 1.92,
        "currentFrame": 2,
        "rotationOffsetFunction": function rotationOffsetFunction(progress) {
            return this.startingRotationOffset + 0.045 * Math.sin((progress + 0.4) % 1 * 4 * 2 * Math.PI);
        },
        "radiusMultiplierFunction": function radiusMultiplierFunction(progress) {
            return this.startingRadiusMultiplier + 0.15 * Math.cos((progress + 0.4) % 1 * 4 * 2 * Math.PI);
        }
    }), new _item2.default({
        "image": "images/seagull-sprite.png",
        "width": 216,
        "height": 72,
        "radiusMultiplier": 0.375,
        "rotationOffset": 0.275,
        "scale": 0.15,
        "numberOfFrames": 16,
        "verticalOffset": 55,
        "frameDelay": 1.71,
        "currentFrame": 5,
        "rotationOffsetFunction": function rotationOffsetFunction(progress) {
            return this.startingRotationOffset + 0.045 * Math.sin((progress + 0.6) % 1 * 4 * 2 * Math.PI);
        },
        "radiusMultiplierFunction": function radiusMultiplierFunction(progress) {
            return this.startingRadiusMultiplier + 0.15 * Math.cos((progress + 0.6) % 1 * 4 * 2 * Math.PI);
        }
    }), new _item2.default({
        "image": "images/seagull-sprite.png",
        "width": 216,
        "height": 72,
        "radiusMultiplier": 0.375,
        "rotationOffset": 0.275,
        "scale": 0.15,
        "numberOfFrames": 16,
        "verticalOffset": 55,
        "frameDelay": 1.89,
        "currentFrame": 2,
        "rotationOffsetFunction": function rotationOffsetFunction(progress) {
            return this.startingRotationOffset + 0.045 * Math.sin((progress + 0.8) % 1 * 4 * 2 * Math.PI);
        },
        "radiusMultiplierFunction": function radiusMultiplierFunction(progress) {
            return this.startingRadiusMultiplier + 0.15 * Math.cos((progress + 0.8) % 1 * 4 * 2 * Math.PI);
        }
    }), new _item2.default({
        "image": "images/seagull-sprite.png",
        "width": 216,
        "height": 72,
        "radiusMultiplier": 0.75,
        "scale": 0.15,
        "numberOfFrames": 16,
        "verticalOffset": 50,
        "frameDelay": 1.5,
        "currentFrame": 15,
        "rotationOffsetFunction": function rotationOffsetFunction(progress) {
            return this.startingRotationOffset + 0.02 * Math.cos(progress * 5 * 2 * Math.PI);
        },
        "radiusMultiplierFunction": function radiusMultiplierFunction(progress) {
            return this.startingRadiusMultiplier + 0.07 * Math.sin(progress * 5 * 2 * Math.PI);
        }
    }), new _item2.default({
        "image": "images/seagull-sprite.png",
        "width": 216,
        "height": 72,
        "radiusMultiplier": 0.75,
        "scale": 0.15,
        "numberOfFrames": 16,
        "verticalOffset": 50,
        "frameDelay": 1.65,
        "currentFrame": 11,
        "rotationOffsetFunction": function rotationOffsetFunction(progress) {
            return this.startingRotationOffset + 0.02 * Math.cos((progress + 0.33) % 1 * 5 * 2 * Math.PI);
        },
        "radiusMultiplierFunction": function radiusMultiplierFunction(progress) {
            return this.startingRadiusMultiplier + 0.07 * Math.sin((progress + 0.33) % 1 * 5 * 2 * Math.PI);
        }
    }), new _item2.default({
        "image": "images/seagull-sprite.png",
        "width": 216,
        "height": 72,
        "radiusMultiplier": 0.75,
        "scale": 0.15,
        "numberOfFrames": 16,
        "verticalOffset": 50,
        "frameDelay": 1.99,
        "currentFrame": 4,
        "rotationOffsetFunction": function rotationOffsetFunction(progress) {
            return this.startingRotationOffset + 0.02 * Math.cos((progress + 0.66) % 1 * 5 * 2 * Math.PI);
        },
        "radiusMultiplierFunction": function radiusMultiplierFunction(progress) {
            return this.startingRadiusMultiplier + 0.07 * Math.sin((progress + 0.66) % 1 * 5 * 2 * Math.PI);
        }
    })]
});

},{"./environment.js":3,"./item.js":5}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _animatable = require('./animatable.js');

var _animatable2 = _interopRequireDefault(_animatable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = function (_Animatable) {
  _inherits(Item, _Animatable);

  function Item() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Item);

    /**
     * Image location
     * @type {String}
     */
    var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this, options));

    _this.startingRadiusMultiplier = options.radiusMultiplier !== undefined ? options.radiusMultiplier : 1;

    /**
     * Image location
     * @type {String}
     */
    _this.radiusMultiplier = options.radiusMultiplier !== undefined ? options.radiusMultiplier : 1;

    /**
     * Image location
     * @type {String}
     */
    _this.radiusMultiplierFunction = options.radiusMultiplierFunction !== undefined ? options.radiusMultiplierFunction : function () {
      return this.startingRadiusMultiplier;
    };

    /**
     * Image location
     * @type {String}
     */
    _this.startingRotationOffset = options.rotationOffset !== undefined ? options.rotationOffset : 0;

    /**
     * Image location
     * @type {String}
     */
    _this.rotationOffset = options.rotationOffset !== undefined ? options.rotationOffset : 0;

    /**
     * Image location
     * @type {String}
     */
    _this.verticalOffset = options.verticalOffset !== undefined ? options.verticalOffset : 0;

    /**
     * Image location
     * @type {String}
     */
    _this.verticalOffsetFunction = options.verticalOffsetFunction !== undefined ? options.verticalOffsetFunction : function () {
      return this.verticalOffset;
    };

    /**
     * Image location
     * @type {String}
     */
    _this.rotationOffsetFunction = options.rotationOffsetFunction !== undefined ? options.rotationOffsetFunction : function () {
      return this.startingRotationOffset;
    };
    return _this;
  }

  /**
   * Update the x and y coordinates of the item
   * @return {Item}
   */


  _createClass(Item, [{
    key: 'move',
    value: function move(progress) {
      this.updateRadiusMultiplier(progress);
      this.updateXCoordinate(progress);
      this.updateYCoordinate(progress);
      return this;
    }

    /**
     * Update the x coordinate of the item
     * @param  {Number} progress
     * @return {Item}
     */

  }, {
    key: 'updateXCoordinate',
    value: function updateXCoordinate(progress) {
      this.xPosition = 450 - this.getWidth() / 2 + this.getXRadius() * Math.cos(this.getRotationOffset(progress) * 2 * Math.PI);
      return this;
    }

    /**
     * Update the y coordinate of the item
     * @param  {Number} progress
     * @return {Item}
     */

  }, {
    key: 'updateYCoordinate',
    value: function updateYCoordinate(progress) {
      this.yPosition = 450 - this.getHeight() + this.getYRadius() * Math.sin(this.getRotationOffset(progress) * 2 * Math.PI) - this.getVerticalOffset(progress);
      return this;
    }

    /**
     * Get item ellipse x radius
     * @return {Number}
     */

  }, {
    key: 'getXRadius',
    value: function getXRadius() {
      return 350 * this.radiusMultiplier;
    }

    /**
     * Get item ellipse y radius
     * @return {Number}
     */

  }, {
    key: 'getYRadius',
    value: function getYRadius() {
      return 100 * this.radiusMultiplier;
    }
  }, {
    key: 'updateRadiusMultiplier',
    value: function updateRadiusMultiplier(progress) {
      this.radiusMultiplier = this.radiusMultiplierFunction(progress);
    }
  }, {
    key: 'getBottomY',
    value: function getBottomY(progress) {
      return this.yPosition + this.getHeight() + this.getVerticalOffset(progress);
    }
  }, {
    key: 'getVerticalOffset',
    value: function getVerticalOffset(progress) {
      return this.verticalOffsetFunction(progress);
    }
  }, {
    key: 'getRotationOffset',
    value: function getRotationOffset(progress) {
      this.updateRotationOffset(progress);
      return (progress + this.rotationOffset) % 1;
    }
  }, {
    key: 'updateRotationOffset',
    value: function updateRotationOffset(progress) {
      this.rotationOffset = this.rotationOffsetFunction(progress);
    }
  }]);

  return Item;
}(_animatable2.default);

exports.default = Item;

},{"./animatable.js":1}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _drawable = require('./drawable.js');

var _drawable2 = _interopRequireDefault(_drawable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Scalable = function (_Drawable) {
    _inherits(Scalable, _Drawable);

    function Scalable() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Scalable);

        /**
         * Size multiplier
         * @type {Number}
         */
        var _this = _possibleConstructorReturn(this, (Scalable.__proto__ || Object.getPrototypeOf(Scalable)).call(this, options));

        _this.scale = options.scale !== undefined ? options.scale : 1;
        return _this;
    }

    /**
     * Return scaled width
     * @return {number}
     */


    _createClass(Scalable, [{
        key: 'getWidth',
        value: function getWidth() {
            return this.width * this.scale;
        }

        /**
         * Return scaled height
         * @return {number}
         */

    }, {
        key: 'getHeight',
        value: function getHeight() {
            return this.height * this.scale;
        }

        /**
         * Draw the item
         * @return this
         */

    }, {
        key: 'draw',
        value: function draw(context) {
            this.calculateOpacity();
            context.globalAlpha = this.opacity;

            context.drawImage(this.image, 0, 0, this.width, this.height, this.xPosition, this.yPosition, this.getWidth(), this.getHeight());

            context.globalAlpha = 1;
            return this;
        }
    }]);

    return Scalable;
}(_drawable2.default);

exports.default = Scalable;

},{"./drawable.js":2}]},{},[4]);
