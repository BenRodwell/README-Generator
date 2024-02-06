const inquirer = require('inquirer');
const fs = require('fs');

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
        choices: ['MIT','APACHE 2.0', 'GPL 3.0', 'BSD 3', 'none'],
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
        name: 'using',
        message: 'What does the user need to know about using the repo?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo',
    },
])
.then((answers) => {
    const README = generateREADME(answers);
    console.log('Generating README file...')


fs.appendFile('README.md', README, (err) =>
err ? console.error(err) : 'Success!'
);

});

const generateREADME = ({title, description, tableOfContents, username, email, installation, usage, license, dependencies, tests, using, contributing}) => {
return `# ${title}

## Description
    
${description}
    
## Table of Contents
    
${tableOfContents}

## Installation
To install necessary dependencies, run the following command:
${installation}
    
## Usage
    
${usage}
    
## Credits
    
N/A
    
## License
    
This project is licensed under the ${license} license.
    
## Dependencies
    
${dependencies}
    
## Tests
    
${tests}

## Using
    
${using}
    
## How to Contribute
    
${contributing}

## Questions
If you have any questions about the repo, open an aissue or contact me directly at ${email}. You can find more of my work at ${username}.
   
      `
}



