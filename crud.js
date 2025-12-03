// create a card
let projects = JSON.parse(localStorage.getItem('projects')) || [];
document.getElementById('createForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const newProject = {
    img: document.getElementById('create-img').value.trim(),
    alt: document.getElementById('create-alt').value.trim(),
    title: document.getElementById('create-title').value.trim(),
    description: document.getElementById('create-description').value.trim(),
    github: document.getElementById('create-github').value.trim(),
    website: document.getElementById('create-website').value.trim()
    };
    projects.push(newProject);

    saveStorage(projects);
    renderProjects(projects);
    e.target.reset();
});



function updateCard() {

}

function deleteCard() {

}

// list of project cards currently in local storage