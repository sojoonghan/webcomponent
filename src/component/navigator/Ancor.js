class Link extends HTMLAnchorElement {
    constructor() {
        super();
        this.addEventListener('click', (event) => {
            confirm('do you want to continue?')
        })
    }
}

customElements.define('my-link', Link, { extends: 'a' })