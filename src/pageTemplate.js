// dependancy
const { fs } = require("fs");

//we create a function that will be call to create the 'html file'
const createAll = (teamRoster) => {
  // creates generated manager in this card.
  const createManager = (manager) => {
    return `
        <div class="col-4 mt-4 card text-dark bg-ligth mb-3" style="max-width: 18rem;">
        <div class="card-header">${manager.getName()}</div>
        <div class="card-body">
          <h5 class="card-title"><i class="fas fa-coffee"></i>Manager</h5>
        </div>
        <div class='card-body'>
        <p>ID:${manager.getId()}</p>
        <p>Email: <a href="mailto:${manager.getEmail()}"></a> ${manager.getEmail()}</p>
        <p>Office Number:${manager.getOfficeNumber()}</p>
        </div>
      </div>
        `;
  };
  // creates generated intern in this card.
  const createIntern = (intern) => {
    return `
        <div class="col-4 mt-4 card text-dark bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header">${intern.getName()}</div>
        <div class="card-body">
          <h5 class="card-title"><i class="fas fa-user-graduate"></i></i>Intern</h5>
        </div>
        <div class='card-body'>
        <p>ID:${intern.getId()}</p>
        <p>Email:<a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
        <p>School: ${intern.getSchool()}</p>
        </div>
      </div>
        `;
  };
  // creates generated engineer in this card.
  const createEngineer = (engineer) => {
    return `
        <div class="col-4 mt-4  card text-dark bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header">${engineer.getName()}</div>
        <div class="card-body">
          <h5 class="card-title"><i class="fas fa-glasses"></i></i>Engineer</h5>
        </div>
        <div class='card-body'>
        <p>ID: ${engineer.getId()}</p>
        <p>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
        <p>GitHub: <a href="https://github.com/${engineer.getGithub()}"></a>${engineer.getGithub()}</p>
        </div>
      </div>
        `;
  };
  //a variable with an array that will hold all our teamRoster cards information after the user answer the prompt
  const pageArray = [];

  pageArray.push(
    teamRoster
      .filter((item) => item.getRole() === "Manager")
      .map((manager) => createManager(manager))
  );
  pageArray.push(
    teamRoster
      .filter((item) => item.getRole() === "Engineer")
      .map((engineer) => createEngineer(engineer))
  );
  pageArray.push(
    teamRoster
      .filter((item) => item.getRole() === "Intern")
      .map((intern) => createIntern(intern))
  );

  return pageArray.join("");
};

module.exports = (teamRoster) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/4cf7e7bf8a.js" crossorigin="anonymous"></script>
        <title>teamRoster-Profile</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link href="https://fonts.googleapis.com/css2?family=Comforter+Brush&family=Quicksand:wght@600&display=swap" rel="stylesheet">

    </head>
    <body>
        <header class='jumbotron text-center flex-row  bg-danger text-light'>
            <h1>My teamRoster</h1>
        </header>
       <div class='container'>
        <div class='card-body row justify-content-center'>
            ${createAll(teamRoster)}
        </div>
       </div>
    </body>
    <script src="index.js"></script>
    </html>
    `;
};
