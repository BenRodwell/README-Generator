// Inquirer and Fs Libraries
const inquirer = require('inquirer');
const fs = require('fs');

//Inquirer Prompt Function to create questions for the user to answer to create their README.md file
inquirer.prompt([
    {
        type: 'input',
        name: 'username',
        message:'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    }, 
    {
        type: 'input',
        name: 'title',
        message: 'What is your projects name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What usage would you like your users to know about in your README document?',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT','APACHE 2.0', 'GPL 3.0', 'BDS 3', 'none',],
    },
    {
        type: 'input',
        name: 'dependencies',
        message: 'What command should be run to install dependencies',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo',
    },
])
//Attains the user answers from the terminal and puts the answers on 'pending'
.then((answers) => {
    const README = generateREADME(answers);
    console.log('Generating README file...')

//Creates the README.md file and puts the answers into it
fs.appendFile('README.md', README, (err) =>
err ? console.error(err) : 'Success!'
);

});

//Shows how the README.md file should display and uses literal templates to indicate where certain pieces of information should be
const generateREADME = ({title, description, username, email, installation, usage, license, dependencies, tests, contributing}) => {
return `# ${title}

## Description
    
${description}
    
## Table of Contents
    
* [Description](#description)
* [Table of Contents](#table-of-contents)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Dependencies](#dependencies)
* [Tests](#tests)
* [How To Contribute](#how-to-contribute)
* [Questions](#questions)

## Installation
To install necessary dependencies, run the following command:
${installation}
    
## Usage
    
${usage}
    
## License
    
${license}
    
## Dependencies
    
${dependencies}
    
## Tests
    
${tests}


    
## How to Contribute
    
${contributing}

## Questions
If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work at ${username}.
   
      `
}



