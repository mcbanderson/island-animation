export default class Environment {
    constructor(options = {}) {

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
    init() {
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
    main(environment) {
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
    clearCanvas() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    /**
     * Increment the progress tracker
     * @return null
     */
    updateProgress() {
        this.progress = (this.progress + this.rotationsPerMinute / (this.framesPerSecond * 60)) % 1;
    }

    /**
     * Set the current camera position (between 0 and 1 inclusive)
     * @param  {Number} position
     * @return null
     */
    setCameraPosition(position) {
        this.cameraPosition = position;
    }

    moveItems() {
        for (let i = 0; i < this.items.length; i++) {
            this.items[i].move(this.progress);
        }
    }

    /**
     * Draw all items
     * @return null
     */
    drawItems() {
        for (let i = 0; i < this.items.length; i++) {
            this.items[i].draw(this.context);
        }
    }

    drawBackground() {
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
    animateItems() {
        for (let i = 0; i < this.items.length; i++) {
            this.items[i].updateFrame();
        }
    }

    sortItems(progress) {
        this.items.sort(function(a, b){return a.getBottomY(progress) - b.getBottomY(progress);});
    }

}
