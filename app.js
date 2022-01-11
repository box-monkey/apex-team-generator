// required dependancy
const inquirer = require("inquirer");

// global variables
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const pageTemplate = require("./src/pageTemplate");

const teamRoster = [];
const teamIdArray = [];
//inquirer help us to  see the questions in the console
inquirer
  //creates and prompts manager questions
  .prompt([
    {
      type: "input",
      name: "managerName",
      message: "Enter your managers name?(Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please, enter your name");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "managerId",
      message: "Enter your Manager ID number?(Required)",
      validate: (idNumber) => {
        if (idNumber) {
          return true;
        } else {
          console.log("Enter your employee number ID");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "managerEmail",
      message: "Enter your managers email address?",
    },
    {
      type: "input",
      name: "managerOffice",
      message: "Enter your managers office number?",
    },
    //the 'then' method is a chain that help us to connect the functions, in this case the answers from the manager will be display
  ])
  .then((answers) => {
    const manager = new Manager(
      answers.managerName,
      answers.managerId,
      answers.managerEmail,
      answers.managerOffice
    );
    teamRoster.push(manager);
    teamIdArray.push(answers.managerId);
    promptUser();
  });
promptUser = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "select",
        message: "Add team members (Enter and press the arrows to choose)",
        choices: ["Engineer", "Intern", " Finish"],
      },
    ])
    .then((answer) => {
      if (answer.select === "Engineer") {
        createEngineer();
      } else if (answer.select === "Intern") {
        createIntern();
      } else {
        createteamRoster();
      }
    });
};

//creates and prompts Engineer questions
function createEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "Enter your your name?",
      },
      {
        type: "input",
        name: "engineerId",
        message: "Enter your Engineer ID?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "Enter your your email?",
      },
      {
        type: "input",
        name: "github",
        message: "Enter your github username?",
      },
    ])
    .then((answer) => {
      const engineer = new Engineer(
        answer.engineerName,
        answer.engineerId,
        answer.engineerEmail,
        answer.github
      );
      teamRoster.push(engineer);
      teamIdArray.push(answer.engineerId);
      promptUser();
    });
}
// creates and prompts Intern questions
function createIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "Enter your name?",
      },
      {
        type: "input",
        name: "internId",
        message: "Enter your ID?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "Enter your email?",
      },
      {
        type: "input",
        name: "school",
        message: "Where did you recieve education?",
      },
    ])
    .then((answer) => {
      const intern = new Intern(
        answer.internName,
        answer.internId,
        answer.internEmail,
        answer.school
      );
      teamRoster.push(intern);
      teamIdArray.push(answer.internId);
      promptUser();
    });
}

function createteamRoster() {
  fs.writeFile("teamRoster.html", pageTemplate(teamRoster), "utf-8", (err) =>
    err ? console.log(err) : console.log("Your roster has been created")
  );
  console.log(teamRoster);
}
