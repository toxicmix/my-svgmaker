const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

class CLI {
    run() {
        return inquirer.prompt([
            {
                name: "text",
                type: "input",
                messege: "enter the text for the logo cant be longer than 3 chars",
                validate: (text) =>
                    text.length <= 3 ||
                    "input is too many chars",
            },
            {
                name: "textC",
                type: "list",
                messege: "text color",
                choices: ["red", "green", "blue", "purple"],
            },
            {
                name: "shapeC",
                type: "list",
                message: "Enter a shape color",
                choices: ["green", "red", "blue", "purple"],
            },
            {
                name: "shapeType",
                type: "list",
                message: "Enter a shape",
                choices: ["circle", "triangle", "square"],
            },
        ])
        .then(({ text, textC, shapeType, shapeC}) => {
            let newShape;
            switch(shapeType){
                case "triangle":
                    newShape = new Triangle();
                    break;
                    
                case "circle":
                    newShape = new Circle();
                    break;

                case "square":
                    newShape = new Square();
                    break;
            }
        
        newShape.setColor(shapeC);

        const svg = new SVG();
        svg.setText(text, textC);
        svg.setShape(newShape);
        return writeFile("logo.svg", svg.render());
        })
        .then(() => {
            console.log("Generated logo.svg");
        })
        .catch((error) => {
            console.log(error);
            console.log("u suck");
        });
    }
}

module.exports = CLI;