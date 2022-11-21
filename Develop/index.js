// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a valid title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your project for?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a valid description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter valid instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install this program?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a valid title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'githubusername',
        message: 'What is your github?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter valid name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter valid instructions!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license will you use for your project?',
        choices: ['agpl', 'apache', 'mit', 'no license']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./dist/${fileName}`, data, err => {
        if (err) {
            throw err
        };
    });
    console.log('README generation complete!')
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions).then(readmeData => {
        return readmeData;
    });
}

// Function call to initialize app
init().then(readmeData => {
    return generateMarkdown(readmeData);
})
.then(pageMD => {
    return writeToFile("Readme.md", pageMD)
})