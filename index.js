// packages needed for the application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");
const generateMarkdown = require('./utils/generateMarkdown');

// Questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: 'What is the title of your project?',
    },
    {
        type: "input",
        name: "purpose",
        message: 'What is the purpose of this app/project?',
    },
    {
        type: "input",
        name: "description",
        message: "Describe the app/project.",
    },
    {
        type: "input",
        name: "tableOfContents",
        message: "List a table of contents if your project is extensive enough to benefit from one.",
    },
    {
        type: "input",
        name: "technology",
        message: "List what technologies were used for the app.",
    },
    {
        type: "input",
        name: "installation",
        message: "Detail how to install the app.",
    },
    {
        type: "input",
        name: "usage",
        message: "Describe ways this app can be utilized.",
    },
    {
        type: "list",
        name: "license",
        message: "If applicable, choose a license that your project is licensed with.",
        choices: ["Apache license 2.0", "GPL", "MIT", "BSD 3", "None"]
    },
    {
        type: "input",
        name: "contributers",
        message: "Acknowledge any contributers on this project and input their information."
    },
    {
        type: "input",
        name: "tests",
        message: "Provide what tests were performed with the app.",
    },
    {
        type: "input",
        name: "questions",
        message: "Enter your github username for developers to contact you with questions.",
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address for additional contact information."
    },
    {
        type: "input",
        name: "screenshot",
        message: "Include a screenshot and/or video.",
    },  
];

// writes to README.md file
function writeToFile(fileName, data) {
   return fs.writeFileSync(path.join(process.cwd(), fileName), data)
};
   


// initializes app
function init() {

    inquirer.prompt(questions).then((userAnswers) => {
        console.log("userAnswers", userAnswers)

        writeToFile("Sample-ReadMe.md", generateMarkdown({...userAnswers}) )
    })
}

// Function call to initialize app
init();
