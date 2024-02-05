const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message:'What is your README title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your README description?',
    }, 
    {
        type: 'input',
        name: 'tableOfContents',
        message: 'Do you have a table of contents for your README document?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is your preferred style of installation?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What usage would you like your users to know about in your README document?',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What license does your web application have?',
        choices: ['MIT', 'Chocolate'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who contributed to your web application?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What kinds of tests have you conducted on your web application?',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Are there any questions alluding to your web application?',
    },
])
.then((answers) => {
    const html = generateHTML(answers);
    console.log(html)


fs.appendFile('index.html', html, (err) =>
err ? console.error(err) : 'Success!'
);

});

const generateHTML = (title, description,tableOfContents, installation, usage, license, contributing, tests, questions ) => {
    return `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv = "X-UA-Compatible" content = "ie=edge">
            <link rel = "stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
            <title>Title</title>
        </head>
        <body>
            <header class = "p-5 mb-4 header bg-light">
                <div class = "container">
                    <h1 class = "display-4"> Title: ${title}</h1>
                    <h3 class = "display-4"> Description: ${description}</h1>
                    <h1 class = "display-4"> Table of Contents: ${tableOfContents}</h1>
                    <h1 class = "display-4"> Installation: ${installation}</h1>
                    <h1 class = "display-4"> Usage: ${usage}</h1>
                    <h1 class = "display-4"> License: ${license}</h1>
                    <h1 class = "display-4"> Contributing: ${contributing}</h1>
                    <h1 class = "display-4"> Tests: ${tests}</h1>
                    <h1 class = "display-4"> Questions: ${questions}</h1>
                </div>
            </header>
        </body>
    </html> `
}

