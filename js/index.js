let footer = document.createElement('footer');
document.body.appendChild(footer);

let today = new Date();
let thisYear = today.getFullYear();

footer = document.querySelector('footer');

let copyright = document.createElement('p');
copyright.innerHTML = 'Mariia Kirkpatrick ' + thisYear;
footer.appendChild(copyright);

let skills = ["Managing filing systems", "Situation analysis", "Updating paperwork", "Maintaining documents", "Coordinating events", "Bilingual (Russian & English)"];
let skillsSection = document.querySelector('#Skills');
let skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement('li');

    skill.innerText = skills[i];

    skillsList.appendChild(skill);
}

