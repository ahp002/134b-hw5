let editIndex = null;

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
    if (editIndex !== null) {
        projects[editIndex] = newProject;
        editIndex = null;
        document.getElementById("create").textContent = "Create";
    } else {
        projects.push(newProject);
    }

    saveStorage(projects);
    renderProjects(projects);
    e.target.reset();
});

// update a card
function updateCard() {
    document.querySelectorAll(".edit-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const index = btn.dataset.index;
            const card = btn.closest(".project-item");
            const project = projects[index];

            card.innerHTML = `
                <h3>Img</h3>
                <input type="text" class="edit-img" value="${project.img}" placeholder="Image URL"/>
                <h3>Alt Text for Img</h3>
                <input type="text" class="edit-alt" value="${project.alt}" placeholder="Alt text"/>
                <h3>Title</h3>
                <input type="text" class="edit-title" value="${project.title}" placeholder="Title"/>
                <h3>Project Description</h3>
                <textarea class="edit-description" maxlength="107">${project.description}</textarea>
                <h3>GitHub URL</h3>
                <input type="text" class="edit-github" value="${project.github}" placeholder="GitHub URL"/>
                <h3>Website URL</h3>
                <input type="text" class="edit-website" value="${project.website}" placeholder="Website URL"/>
                <button class="save-btn">Save</button>
            `;

            card.querySelector(".save-btn").addEventListener("click", () => {
                projects[index] = {
                    img: card.querySelector(".edit-img").value.trim(),
                    alt: card.querySelector(".edit-alt").value.trim(),
                    title: card.querySelector(".edit-title").value.trim(),
                    description: card.querySelector(".edit-description").value.trim(),
                    github: card.querySelector(".edit-github").value.trim(),
                    website: card.querySelector(".edit-website").value.trim()
                };
                saveStorage(projects);
                renderProjects(projects);
            });
        });
    });
}

// delete a card
function deleteCard() {
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
    deleteCard();
    updateCard();
}

window.onload = function () {
    const projects = loadStorage();
    renderProjects(projects);
};
