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

function deleteProject() {
    document.querySelectorAll(".delete-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const index = btn.dataset.index; 
            const projects = loadStorage();
            projects.splice(index, 1);
            saveStorage(projects);
            renderProjects(projects);
        });
    });
}

// render list of <card-project>
function loadStorage() {
    const p = localStorage.getItem("projects");
    if (!p) return [];
    return JSON.parse(p);
}

function saveStorage(list) {
    localStorage.setItem("projects", JSON.stringify(list));
}

function renderProjects(list) {
    const container = document.getElementById("current-projects");
    container.innerHTML = "";

    list.forEach((p, index) => {
    const card = document.createElement("div");
    card.className = "project-item";

    card.innerHTML = `
        <p>${p.title}</p>
        <button class="edit-btn" data-index="${index}">
            <i class="fas fa-edit"></i>
        </button>
        <button class="delete-btn" data-index="${index}">
            <i class="fas fa-trash-alt"></i>
        </button>
    `;

    container.appendChild(card);
});
deleteProject();
}

window.onload = function () {
    const projects = loadStorage();
    renderProjects(projects);
};
