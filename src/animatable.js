import Scalable from './scalable.js';

export default class Animatable extends Scalable {
    constructor(options = {}) {
        super(options);

        /**
         * Current animation frame
         * @type {integer}
         */
        this.currentFrame = options.currentFrame !== undefined ? options.currentFrame : 0;

        /**
         * Animation speed (number of cycles before changing frames)
         * @type {integer}
         */
        this.frameDelay = options.frameDelay !== undefined ? options.frameDelay : 20;

        /**
         * Animation speed (number of cycles before changing frames)
         * @type {integer}
         */
        this.delayCount = options.delayCount !== undefined ? options.delayCount : 0;

        /**
         * Number of animation frames
         * @type {Number}
         */
        this.numberOfFrames = options.numberOfFrames !== undefined ? options.numberOfFrames : 1;
    }

    /**
     * Update the items current frame
     * @return {Item}
     */
    updateFrame() {
        this.delayCount++;
        if (this.delayCount > this.frameDelay) {
            this.delayCount = this.delayCount % this.frameDelay;
            if (this.currentFrame < this.numberOfFrames - 1) {
                this.currentFrame++;
            }
            else {
                this.currentFrame = 0;
            }
        }
        return this;
    }

    /**
     * Draw the user
     * @return this
     */
    draw(context) {
        this.calculateOpacity();
        context.globalAlpha = this.opacity;

        context.drawImage(this.image, this.currentFrame * this.width, 0, this.width, this.height, this.xPosition, this.yPosition, this.getWidth(), this.getHeight());

        context.globalAlpha = 1;

        return this;
    }
}
