const Manager = require("./lib/manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const teamMembers = [];
const idArray = [];

function appMenu() {
//manager name input
    function createManager() {
      console.log("Please build your team");
      inquirer.prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is the manager's name?",
          validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Enter a character";
          }
        },
        //input for manager id
        {
          type: "input",
          name: "managerId",
          message: "What is the manager's id?",
          validate: answer => {
            const pass = answer.match(
              /^[1-9]\d*$/
            );
            if (pass) {
              return true;
            }
            return "Enter a number greater than zero";
          }
        },
        //input for manager email
        {
        
            type: "input",
        name: "managerEmail",
        message: "What is the manager's email?",
        validate: answer => {
          const pass = answer.match(
            /\S+@\S+\.\S+/
          );
          if (pass) {
            return true;
          }
          return "Enter a valid email address";
        }
      },
      //input for manager's offfice number
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the manager's office number?",
        validate: answer => {
          const pass = answer.match(
            /^[1-9]\d*$/
          );
          if (pass) {
            return true;
          }
          return "Enter a positive number greater than zero";
        }
    }
  ]).then(answers => {
    const manager = new Manager (answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
    teamMembers.push(manager);
    idArray.push(answers.managerId);
    createTeam();
  });
}
// input for which member is being added i.e. interen, engineer, none
function createTeam() {

    inquirer.prompt([
      {
        type: "list",
        name: "memberChoice",
        message: "Which type of member do you want to add?",
        choices: [
          "Engineer",
          "Intern",
          "No more members"
        ]
      }
    ]).then(userChoice => {
      switch (userChoice.memberChoice) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        default:
          buildTeam();
      }
    });
  }
// input for input engineer name
  function addEngineer() {
      inquirer.prompt([
          {
              type: "input",
              name: "engineerName",
              message: "What is the engineer's name?",
              validate: answer => {
                  if(answer !== "") {
                      return true;
                  }
                  return "Enter at least one character";
              }
          },
          //input for engineer's id
          {
              type: "input",
              name: "engineerId",
              message: "What is your engineer's id?",
              validate: answer => {
                  const pass = answer.match(
                      /^[1-9]\d*$/
                  );
                  if (pass) {
                  if (idArray.includes(answer)) {
                      return "Id is already used, Please enter another one";
                  } else {
                      return true;
                  }
              }
              return "Enter a positive number that is greater than zero";
            }
          },
          //array for engineer id input
          {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email?",
            validate: answer => {
              const pass = answer.match(
                /\S+@\S+\.\S+/
              );
              if (pass) {
                return true;
              }
              return "Enter a valid email address";
            }
          },
          //array for engineer github input
          {
            type: "input",
            type: "input",
        name: "engineerGithub",
        message: "What is your engineer's GitHub username?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        }
      }
    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamMembers.push(engineer);
      idArray.push(answers.engineerId);
      createTeam();
    });
          }
          //name of intern input
          function addIntern() {
              inquirer.prompt([
                  {
                      type: "input",
                      name: "internName",
                      message: "What is the intern's name?",
                      validate: answer => {
                          if (answer !=="") {
                              return true;
                          }
                          return "Enter at least one character";
                      }
                  }, 
                  {
                      
                  }
              ])
          }
   
      ])
  }


