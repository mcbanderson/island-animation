export default class Drawable {
    constructor(options = {}) {
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
        this.opacityFunction = options.opacityFunction !== undefined ? options.opacityFunction : function() {return this.opacity;};

        this.opacity = options.opacity !== undefined ? options.opacity : 1;
    }

    /**
     * Draw the item
     * @return this
     */
    draw(context) {
        this.calculateOpacity();
        context.globalAlpha = this.opacity;

        context.drawImage(this.image, 0, 0, this.width, this.height, this.xPosition, this.yPosition, this.width, this.height);

        context.globalAlpha = 1;
        return this;
    }

    calculateOpacity() {
        this.opacity = this.opacityFunction();
    }
}
