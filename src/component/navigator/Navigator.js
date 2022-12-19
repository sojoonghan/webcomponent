const css = `
:host{
    background-color:blue
    --color-base:red;
    --font-size:70px;
}
:host(h1){
    color:red;
}
`
const template = document.createElement('template');
template.innerHTML += /*html*/`
<h1>navigator</h1>
<a id="nave-a" href="https://www.naver.com target="_blank">Go naver</a>
<style>${css}</style>
`

export default class Navigator extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
    connectedCallback() {

    }

    disconnectedCallback() {

    }
}

customElements.define('my-navigator', Navigator);
