import Animatable from './animatable.js';

export default class Item extends Animatable {
    constructor(options = {}) {

        super(options);

        /**
         * Image location
         * @type {String}
         */
        this.startingRadiusMultiplier = options.radiusMultiplier !== undefined ? options.radiusMultiplier : 1;

        /**
         * Image location
         * @type {String}
         */
        this.radiusMultiplier = options.radiusMultiplier !== undefined ? options.radiusMultiplier : 1;

        /**
         * Image location
         * @type {String}
         */
        this.radiusMultiplierFunction = options.radiusMultiplierFunction !== undefined ? options.radiusMultiplierFunction : (function() {return this.startingRadiusMultiplier;});

        /**
         * Image location
         * @type {String}
         */
        this.startingRotationOffset = options.rotationOffset !== undefined ? options.rotationOffset : 0;

        /**
         * Image location
         * @type {String}
         */
        this.rotationOffset = options.rotationOffset !== undefined ? options.rotationOffset : 0;

        /**
         * Image location
         * @type {String}
         */
        this.verticalOffset = options.verticalOffset !== undefined ? options.verticalOffset : 0;

        /**
         * Image location
         * @type {String}
         */
        this.verticalOffsetFunction = options.verticalOffsetFunction !== undefined ? options.verticalOffsetFunction : (function() {return this.verticalOffset;});

        /**
         * Image location
         * @type {String}
         */
        this.rotationOffsetFunction = options.rotationOffsetFunction !== undefined ? options.rotationOffsetFunction : (function() {return this.startingRotationOffset;});
    }

    /**
     * Update the x and y coordinates of the item
     * @return {Item}
     */
    move(progress) {
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
    updateXCoordinate(progress) {
        this.xPosition = (450 - this.getWidth() / 2) + (this.getXRadius() * Math.cos(this.getRotationOffset(progress) * 2 * Math.PI));
        return this;
    }

    /**
     * Update the y coordinate of the item
     * @param  {Number} progress
     * @return {Item}
     */
    updateYCoordinate(progress) {
        this.yPosition = (450 - this.getHeight()) + (this.getYRadius() * Math.sin(this.getRotationOffset(progress) * 2 * Math.PI)) - this.getVerticalOffset(progress);
        return this;
    }

    /**
     * Get item ellipse x radius
     * @return {Number}
     */
    getXRadius() {
        return (350) * this.radiusMultiplier;
    }

    /**
     * Get item ellipse y radius
     * @return {Number}
     */
    getYRadius() {
        return (100) * this.radiusMultiplier;
    }

    updateRadiusMultiplier(progress) {
        this.radiusMultiplier = this.radiusMultiplierFunction(progress);
    }

    getBottomY(progress) {
        return this.yPosition + this.getHeight() + this.getVerticalOffset(progress);
    }

    getVerticalOffset(progress) {
        return this.verticalOffsetFunction(progress);
    }

    getRotationOffset(progress) {
        this.updateRotationOffset(progress);
        return (progress + this.rotationOffset) % 1;
    }

    updateRotationOffset(progress) {
        this.rotationOffset = this.rotationOffsetFunction(progress);
    }

}
