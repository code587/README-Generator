// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: 'What is the title of your project?',
    },
    {
        type: "input",
        name: "purpose",
        message: 'What was your motivation to build this project?',
    },
    {
        type: "input",
        name: "description",
        message: "Describe the project.",
    },
    {
        type: "input",
        name: "features",
        message: "List any features of the project.",
    },
    {
        type: "input",
        name: "technology",
        message: "What technologies were used for this project.",
    },
    {
        type: "input",
        name: "challenges",
        message: "Detail any challenges incurrred when creating project?",
    },
    {
        type: "input",
        name: "contributers",
        message: "Acknowledge any contributers on this project and input their information."
        //"List and acknowledge all contributers, if any.",
    },
    {
        type: "input",
        name: "screenshot",
        message: "Include a screenshot and/or video.",
    },
    {
        type: "list",
        name: "license",
        message: "If applicable, choose a license that your project is licensed with.",
        choices: ["Apache license 2.0", "GPL", "MIT", "BSD 3", "None"]
    }
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   return fs.writeFileSync(path.join(process.cwd(), fileName), data)
};
   


// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions).then((userAnswers) => {
        console.log("userAnswers", userAnswers)

        writeToFile("ReadMe.md", generateMarkdown({...userAnswers}) )
    })
}

// Function call to initialize app
init();
