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
        type: "list",
        name: "license",
        message: "If applicable, choose a license that your project is licensed with.",
        choices: ["Apache license 2.0", "ISC", "MIT", "BSD 3", "None"]
    }
    


    // 'What issue does this problem solve?',

    // 'Describe the project',

    // 'List any features of the project.',

    // 'List all technologies used for this project.',

    // 'Describe any challenges incurrred when creating project?',

    // 'List and acknowledge all contributers, if any.',

    // 'Provide licenses',

    // 'Do not forget to provide screenshots and/or video.'    
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
