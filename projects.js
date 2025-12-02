import { cardCss } from '/projects-css.js';

class ProjectCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const img = this.getAttribute('img') ?? '';
        const alt = this.getAttribute('alt') ?? 'Cannot see picture!';
        const title = this.getAttribute('title') ?? 'Unknown title!';
        const description = this.getAttribute('description') ?? 'Unknown description!';
        const github = this.getAttribute('github') ?? '#'; // button
        const website = this.getAttribute('website') ?? '#'; // another button

        this.shadowRoot.innerHTML= '';
        this.shadowRoot.innerHTML += `
            <style>${cardCss()}</style>
            <div class ="pcard">
            <picture>
            <img src ="${img}" alt="${alt}">
            </picture>
            <hgroup>
                <h3 class="title">${title}</h3>
                <p class="description">${description}</p>
            </hgroup>
                <div class ="btn">
                    <a href="${website}" target="_blank">
                    <button type="button">View Site</button>
                    </a>
                    <a href="${github}" target="_blank">
                    <button type="button">View GitHub</button>
                    </a>
                </div>
            </div>
        `;
    }
}

console.log("custom element defined!");
customElements.define("project-card", ProjectCard);