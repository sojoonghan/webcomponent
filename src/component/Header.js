import Input from './Input';
export default class Header extends HTMLElement {
    constructor() {
        super();
        this.stateName = "jihoon lee"
        this.attachShadow({ mode: 'open' })
        this.render();
    }
    render() {
        this.shadowRoot.innerHTML = this.template();
    };
    template() {
        return `<h1>Todo List</h1>
        <slot></slot>
        <my-input state="lee">
        <h1>${this.stateName}</h1>
        <h1 slot="age"> 40</h1>
        </my-input>`
    }
    connectedCallback() {
    }
}
customElements.define('my-header', Header);