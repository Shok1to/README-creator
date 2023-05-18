// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const generateMarkdown = require('./generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        message: 'What is the title of your project?',
        name:'title',
    },
    {
        type:'input',
        message:'Please provide the description of your project.',
        name:'description',
    },
    {
        type:'input',
        message:'What is your installation instructions ?',
        name:'install',
    },
    {
        type:'input',
        message:'What is your usage ?',
        name:'usage',
    },
    {
        type:'input',
        message:'What is your contribution guidelines?',
        name:'contribution',
    },
    {
        type:'input',
        message:'What is your test instructions ?',
        name:'test',
    },
    {
        type:'input',
        message:'What is your github name ?',
        name:'github',
    },
    {
        type:'input',
        message:'What is your email ?',
        name:'email',
    },
    {
        type:'list',
        message:'What license would you like to use ?',
        name:'license',
        choices: ['Apache','GNU','MIT','BSD'],
    },

];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(answers) {
        console.log(answers)

        fs.writeFileSync('./userREADME.md', generateMarkdown({...answers}))
    })


}

// Function call to initialize app
init();
