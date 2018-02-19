import Drawable from './drawable.js';

export default class Scalable extends Drawable {
    constructor(options = {}) {
        super(options);

        /**
         * Size multiplier
         * @type {Number}
         */
        this.scale = options.scale !== undefined ? options.scale : 1;
    }

    /**
     * Return scaled width
     * @return {number}
     */
    getWidth() {
        return this.width * this.scale;
    }

    /**
     * Return scaled height
     * @return {number}
     */
    getHeight() {
        return this.height * this.scale;
    }

    /**
     * Draw the item
     * @return this
     */
    draw(context) {
        this.calculateOpacity();
        context.globalAlpha = this.opacity;

        context.drawImage(this.image, 0, 0, this.width, this.height, this.xPosition, this.yPosition, this.getWidth(), this.getHeight());

        context.globalAlpha = 1;
        return this;
    }
}
