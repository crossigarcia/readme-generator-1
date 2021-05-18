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
      type: 'input',
      name: 'title',
      message: 'What is the title of this application?'
   },
   {
      type: 'input',
      name: 'description',
      message: 'Describe the application:'
   },
   {
      type: 'input',
      name: 'installation',
      message: 'how to install:'
   },
   {
      type: 'input',
      name: 'usage',
      message: 'What is this app for?'
   },
   {
      type: 'input',
      name: 'contribution',
      message: 'are there other contributors to this app?'
   },
   {
      type: 'input',
      name: 'test',
      message: 'placeholder test'
   },
   {
      type: 'input',
      name: 'github',
      message: 'link to github:'
   },
   {
      type: 'input',
      name: 'email',
      message: 'what is your email?'
   },
   {
      type: 'list',
      name: 'license',
      message: 'app license',
      choices: ['MIT', 'amazon', 'google', 'none']
   }
   
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   fs.writeFileSync(path.join(__dirname, fileName), data)
}

// TODO: Create a function to initialize app
async function init() {
   const responses = await inquirer.prompt(questions);
   console.log(responses);
   writeToFile('README.md', generateMarkdown(responses));

}

// Function call to initialize app
init();
