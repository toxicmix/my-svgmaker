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
            }
        ]

        )
    }
}