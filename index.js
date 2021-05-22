// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

/*
capture UI w/ inquirer
place UI in a template
use fs to writeFile
*/

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project? (required)",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter a title for your project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Describe your project: (required)",
    validate: (descInput) => {
      if (descInput) {
        return true;
      } else {
        console.log("Please enter a description of the project");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "Provide installation instructions: (required)",
    validate: (instInput) => {
      if (instInput) {
        return true;
      } else {
        console.log("Please enter install instructions");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Input the usage for this project: (required)",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please provide project usage");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "contribution",
    message: "Provide information on how to contribute to this project:",
  },
  {
    type: "input",
    name: "test",
    message: "Provide information on tests for this project:",
  },
  {
    type: "input",
    name: "github",
    message: "What is your github username? (required)",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please provide your github username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "what is your email address? (required)",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please provide a contact email!");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "Select a license type:",
    choices: ["MIT", "Apache", "GPLv3", "CC", "none"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   fs.writeFileSync(path.join(__dirname, fileName), data)
}

// TODO: Create a function to initialize app
async function init() {
   const responses = await inquirer.prompt(questions);
   writeToFile('README.md', generateMarkdown(responses));

}

// Function call to initialize app
init();
