const inquirer = require('inquirer');
const fs = require('fs');


// JSON writing function
const writeJSON = data => {
    let text = JSON.stringify(data, null, 2);
    fs.writeFile("readme.JSON", text, function(err) {
       if (err) { 
        throw Error("something went wrong! + err.message");
    }
    console.log("Success");
    });
}

// array of questions for user
inquirer
    .prompt([
        {
            type: "input",
            message: "What is the name of your Project?",
            name: "title"
        },
        {
            type: "input",
            message: `Please enter a description of your project.`,
            name: "description"
        },
        {
            type: "input",
            message: "What are the installation instructions for this project. Write NONE if no instructions",
            name: "installation"
        },
        {
            type: "input",
            message: "How would you like your application to be used?",
            name: "usage"
        },
        {
            type: "input",
            message: "Who contributed on this project?",
            name: "contribution"
        },
        {
            type: "input",
            message: "what are the Test Instructions?",
            name: "test"
        },
        {
            type: "checkbox",
            name: "license",
            message: "Please select a license.",
            choices: [
                "choice 1",
                "choice 2",
                "choice 3"
            ]  
        },
        {
            type: "input",
            message: "What is your GitHub username",
            name: "username"
        },
        {
            type: "input",
            message: "What is your email address",
            name: "emailAddress"
        },
    ])
    .then(function(answers) {
        writeJSON(answers);
    });


// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
