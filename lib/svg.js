class SVG {
    constructor() {
        this.textEL = "";
        this.shapeEL = "";
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;
    }
    
    setText(message, color) {
        if (message.length > 3) {
            throw new Error("cant be more than 3 chars");
        }
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`;
    }
    
    setShape(shape) {
        this.shapeElement = shape.render();
    }
}
module.exports = SVG;