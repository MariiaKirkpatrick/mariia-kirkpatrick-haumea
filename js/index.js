let footer = document.createElement("footer");
document.body.appendChild(footer);

let today = new Date();
let thisYear = today.getFullYear();

footer = document.querySelector("footer");

let copyright = document.createElement("p");
copyright.innerHTML = "Mariia Kirkpatrick " + thisYear;
footer.appendChild(copyright);

let skills = [
  "Managing filing systems",
  "Situation analysis",
  "Updating paperwork",
  "Maintaining documents",
  "Coordinating events",
  "Bilingual (Russian & English)",
];
let skillsSection = document.querySelector("#Skills");
let skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");

  skill.innerText = skills[i];

  skillsList.appendChild(skill);
}

let messageForm = document.forms["leave_message"];

messageForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let usersName = event.target.elements["usersName"].value;
  let usersEmail = event.target.elements["usersEmail"].value;
  let usersMessage = event.target.elements["usersMessage"].value;

  console.log("Name:", usersName);
  console.log("Email:", usersEmail);
  console.log("Message:", usersMessage);

  let messageSection = document.querySelector("#messages");
  let messageList = messageSection.querySelector("ul");
  let newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a>:
    <span>${usersMessage}</span> `;

  let removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";
  removeButton.addEventListener("click", function () {
    let entry = this.parentNode;
    entry.remove();
  });

  newMessage.appendChild(removeButton);

  messageList.appendChild(newMessage);

  messageForm.reset();
});

fetch("https://api.github.com/users/mariiakirkpatrick/repos")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((repositories) => {
    console.log(repositories);

    let projectSection = document.getElementById("Projects");
    let projectList = projectSection.querySelector("ul");

    for (let i = 0; i < repositories.length; i++) {
      let project = document.createElement("li");
      project.innerText = repositories[i].name;
      projectList.appendChild(project);
    }
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
