// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: input => {
            if (input) {
                return true
            } else {
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description about the project.',
        validate: input => {
            if (input) {
                return true
            } else {
                return false
            }
        }
    },{
        type: 'input',
        name: 'installation',
        message: 'What are your project installation instructions?',
        validate: input => {
            if (input) {
                return true
            } else {
                return false
            }
        }
    },{
        type: 'input',
        name: 'usage',
        message: 'What is the usage information for the project?',
        validate: input => {
            if (input) {
                return true
            } else {
                return false
            }
        }
    },{
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution guidelines?',
        validate: input => {
            if (input) {
                return true
            } else {
                return false
            }
        }
    },{
        type: 'input',
        name: 'test',
        message: 'What are your projects test requirements?',
        validate: input => {
            if (input) {
                return true
            } else {
                return false
            }
        }
    },{
        type: 'list',
        name: 'license',
        message: 'Please select the license you would like to use for the project.',
        choices: [
            'Apache 2.0',
            'IBM',
            'ISC',
            'MIT',
            'SIL',
            'GNU AGPL v3',
            'N/A'
        ],
        validate: input => {
            if (input) {
                return true
            } else {
                return false
            }
        }
    },{
        type: 'input',
        name: 'username',
        message: 'For questions contact (GitHub username).',
        validate: input => {
            if (input) {
                return true
            } else {
                return false
            }
        }
    },{
        type: 'input',
        name: 'email',
        message: 'For questions contact (email address).',
        validate: input => {
            if (input) {
                return true
            } else {
                return false
            }
        }
    },    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (e) => {
        if (e) {
            console.log(e)
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (input){
        writeToFile('README.md', 
        generateMarkdown(input))
        console.log('README.md generated successfully.')
    })

} 

// Function call to initialize app
init();
