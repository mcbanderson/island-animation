import Environment from './environment.js';
import Item from './item.js';

window.addEventListener("load", boot);

function boot() {
    ENVIRONMENT.init();
    ENVIRONMENT.main(ENVIRONMENT);
}

var ENVIRONMENT = new Environment({
    "items": [
        new Item({
            "radiusMultiplier": 0.375,
            "scale": 0.5,
            "rotationOffset": 0.275
        }),
        new Item({
            "radiusMultiplier": 0.75,
            "scale": 0.25
        }),
        new Item({
            "radiusMultiplier": 0.55,
            "scale": 0.25,
            "rotationOffset": 0.235
        }),
        new Item({
            "image": "images/mountain1.png",
            "width": 216,
            "height": 324,
            "radiusMultiplier": 0.1,
            "scale": 0.5
        }),
        new Item({
            "image": "images/mountain3.png",
            "width": 216,
            "height": 270,
            "radiusMultiplier": 0.35,
            "scale": 0.5,
            "rotationOffset": 0.117
        }),
        new Item({
            "image": "images/hut.png",
            "width": 54,
            "height": 54,
            "radiusMultiplier": 0.91,
            "scale": 0.50,
            "rotationOffset": 0.635,
        }),
        new Item({
            "image": "images/hut.png",
            "width": 54,
            "height": 54,
            "radiusMultiplier": 0.85,
            "scale": 0.50,
            "rotationOffset": 0.65,
        }),
        new Item({
            "image": "images/hut.png",
            "width": 54,
            "height": 54,
            "radiusMultiplier": 0.95,
            "scale": 0.50,
            "rotationOffset": 0.645,
        }),
        new Item({
            "image": "images/cloud1.png",
            "width": 108,
            "height": 72,
            "radiusMultiplier": 0.20,
            "scale": 0.5,
            "rotationOffset": 0.27,
            "verticalOffset": 70,
            "verticalOffsetFunction": (function(progress) {
                return this.verticalOffset + (5 * Math.cos((progress * 3) * 2 * Math.PI));
            })
        }),
        new Item({
            "image": "images/cloud1.png",
            "width": 108,
            "height": 72,
            "radiusMultiplier": 0.70,
            "scale": 0.6,
            "rotationOffset": 0.27,
            "verticalOffset": 270
        }),
        new Item({
            "image": "images/cloud1.png",
            "width": 108,
            "height": 72,
            "radiusMultiplier": 0.20,
            "scale": 0.7,
            "rotationOffset": 0.67,
            "verticalOffset": 190,
            "opacity": 0,
            "opacityFunction": function() {
                if(this.opacity >= 0.99) {
                    return 1;
                }
                return this.opacity += 0.001;
            },
        }),
        new Item({
            "image": "images/tree1.png",
            "width": 72,
            "height": 137,
            "radiusMultiplier": 0.20,
            "scale": 0.35,
            "rotationOffset": 0.67,
        }),
        new Item({
            "image": "images/tree1.png",
            "width": 72,
            "height": 137,
            "radiusMultiplier": 0.27,
            "scale": 0.3,
            "rotationOffset": 0.97,
        }),
        new Item({
            "image": "images/tree1.png",
            "width": 72,
            "height": 137,
            "radiusMultiplier": 0.22,
            "scale": 0.28,
            "rotationOffset": 0.69,
        }),
        new Item({
            "image": "images/tree1.png",
            "width": 72,
            "height": 137,
            "radiusMultiplier": 0.21,
            "scale": 0.29,
            "rotationOffset": 0.63,
        }),
        new Item({
            "image": "images/tree1.png",
            "width": 72,
            "height": 137,
            "radiusMultiplier": 0.225,
            "scale": 0.25,
            "rotationOffset": 0.64,
        }),
        new Item({
            "image": "images/palm-tree1.png",
            "width": 87,
            "height": 162,
            "radiusMultiplier": 0.81,
            "scale": 0.25,
            "rotationOffset": 0.16,
        }),
        new Item({
            "image": "images/palm-tree1.png",
            "width": 87,
            "height": 162,
            "radiusMultiplier": 0.83,
            "scale": 0.25,
            "rotationOffset": 0.15,
        }),
        new Item({
            "image": "images/palm-tree1.png",
            "width": 87,
            "height": 162,
            "radiusMultiplier": 0.80,
            "scale": 0.25,
            "rotationOffset": 0.145,
        }),
        new Item({
            "image": "images/palm-tree1.png",
            "width": 87,
            "height": 162,
            "radiusMultiplier": 0.81,
            "scale": 0.25,
            "rotationOffset": 0.13,
        }),
        new Item({
            "image": "images/seagull-sprite.png",
            "width": 216,
            "height": 72,
            "radiusMultiplier": 0.81,
            "scale": 0.15,
            "rotationOffset": 0.13,
            "numberOfFrames": 16,
            "verticalOffset": 125,
            "frameDelay": 1.6,
            "rotationOffsetFunction": (function(progress) {
                return this.rotationOffset - 0.0002;
            })
        }),
        new Item({
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
            "rotationOffsetFunction": (function(progress) {
                return this.rotationOffset - 0.0002;
            })
        }),
        new Item({
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
            "rotationOffsetFunction": (function(progress) {
                return this.rotationOffset - 0.0002;
            })
        }),
        new Item({
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
            "rotationOffsetFunction": (function(progress) {
                return this.startingRotationOffset + (0.045 * Math.sin((progress * 4) * 2 * Math.PI));
            }),
            "radiusMultiplierFunction": (function(progress) {
                return this.startingRadiusMultiplier + (0.15 * Math.cos((progress * 4) * 2 * Math.PI));
            })
        }),
        new Item({
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
            "rotationOffsetFunction": (function(progress) {
                return this.startingRotationOffset + (0.045 * Math.sin(((progress + 0.2) % 1 * 4) * 2 * Math.PI));
            }),
            "radiusMultiplierFunction": (function(progress) {
                return this.startingRadiusMultiplier + (0.15 * Math.cos(((progress + 0.2) % 1 * 4) * 2 * Math.PI));
            })
        }),
        new Item({
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
            "rotationOffsetFunction": (function(progress) {
                return this.startingRotationOffset + (0.045 * Math.sin(((progress + 0.4) % 1 * 4) * 2 * Math.PI));
            }),
            "radiusMultiplierFunction": (function(progress) {
                return this.startingRadiusMultiplier + (0.15 * Math.cos(((progress + 0.4) % 1 * 4) * 2 * Math.PI));
            })
        }),
        new Item({
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
            "rotationOffsetFunction": (function(progress) {
                return this.startingRotationOffset + (0.045 * Math.sin(((progress + 0.6) % 1 * 4) * 2 * Math.PI));
            }),
            "radiusMultiplierFunction": (function(progress) {
                return this.startingRadiusMultiplier + (0.15 * Math.cos(((progress + 0.6) % 1 * 4) * 2 * Math.PI));
            })
        }),
        new Item({
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
            "rotationOffsetFunction": (function(progress) {
                return this.startingRotationOffset + (0.045 * Math.sin(((progress + 0.8) % 1 * 4) * 2 * Math.PI));
            }),
            "radiusMultiplierFunction": (function(progress) {
                return this.startingRadiusMultiplier + (0.15 * Math.cos(((progress + 0.8) % 1 * 4) * 2 * Math.PI));
            })
        }),
        new Item({
            "image": "images/seagull-sprite.png",
            "width": 216,
            "height": 72,
            "radiusMultiplier": 0.75,
            "scale": 0.15,
            "numberOfFrames": 16,
            "verticalOffset": 50,
            "frameDelay": 1.5,
            "currentFrame": 15,
            "rotationOffsetFunction": (function(progress) {
                return this.startingRotationOffset + (0.02 * Math.cos((progress * 5) * 2 * Math.PI));
            }),
            "radiusMultiplierFunction": (function(progress) {
                return this.startingRadiusMultiplier + (0.07 * Math.sin((progress * 5) * 2 * Math.PI));
            })
        }),
        new Item({
            "image": "images/seagull-sprite.png",
            "width": 216,
            "height": 72,
            "radiusMultiplier": 0.75,
            "scale": 0.15,
            "numberOfFrames": 16,
            "verticalOffset": 50,
            "frameDelay": 1.65,
            "currentFrame": 11,
            "rotationOffsetFunction": (function(progress) {
                return this.startingRotationOffset + (0.02 * Math.cos(((progress + 0.33) % 1 * 5) * 2 * Math.PI));
            }),
            "radiusMultiplierFunction": (function(progress) {
                return this.startingRadiusMultiplier + (0.07 * Math.sin(((progress + 0.33) % 1 * 5) * 2 * Math.PI));
            })
        }),
        new Item({
            "image": "images/seagull-sprite.png",
            "width": 216,
            "height": 72,
            "radiusMultiplier": 0.75,
            "scale": 0.15,
            "numberOfFrames": 16,
            "verticalOffset": 50,
            "frameDelay": 1.99,
            "currentFrame": 4,
            "rotationOffsetFunction": (function(progress) {
                return this.startingRotationOffset + (0.02 * Math.cos(((progress + 0.66) % 1 * 5) * 2 * Math.PI));
            }),
            "radiusMultiplierFunction": (function(progress) {
                return this.startingRadiusMultiplier + (0.07 * Math.sin(((progress + 0.66) % 1 * 5) * 2 * Math.PI));
            })
        }),
    ]
});
