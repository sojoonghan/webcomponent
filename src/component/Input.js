import { store } from '../store/store';
import { increament } from '../store/slice/userSlice';

const css = /*css*/`
<style>
    :host{
    --primary-color:green;
    }
    input { color: var(--primary-color) }
</style>
`;

const template = document.createElement('template');
// template.setAttribute('shadowroot', 'open')
template.innerHTML += /*html*/`
            <div>
                <input id='input' type='text' value="">
                <button id="btn">추가</button>
            </div>
            <h1></h1>
            <slot></slot>
            <slot name="age"></slot>
${css}
`;

export default class Input extends HTMLElement {
    static get observedAttributes() {
        return ['state']
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true))
        this.stateElement = this.shadowRoot.querySelector('h1')
        console.log("construct")
    }
    attributeChangedCallback(arrtName, oldval, newval) {
        if (oldval === newval) return;
        else if (arrtName === "state") {
            console.log("attribute")
            console.log(arrtName)
            console.log(newval)
            console.log(oldval)
        }
    }
    connectedCallback() {
        console.log("connectedCallback")
        this.dispatchEvent(new CustomEvent("eventName", { detail: { name: 'jihoon' } }))
        this.render();
    };
    render() {
        const form = this.shadowRoot.querySelector('#btn')
        form.addEventListener('click', this.inputValue.bind(this))
    }
    inputValue(event) {
        const input = this.shadowRoot.querySelector('#input')
        console.log(event.detail, 'detail')
        this.setAttribute('state', input.value)
        this.stateElement.innerHTML = this.getAttribute('state')
        console.log(store.getState().user.value, "store state")

        this.dispatchEvent(new CustomEvent('inputValue', {
            detail: {
                value: input.value
            }
        }))

        input.value = ''
        store.dispatch(increament)
        console.log(store.getState().user.value, "changed state")
    }

    disconectedCallback() {
        console.log("disconnectedCallback")
    }
    adoptedCallback() {
        console.log("adoptedCallback")

    }
    //attribute 가 바뀌는지 감시해주세요 rerndering
    //바뀌면 실행하는 함수
    // attributeChangedCallback(arrtName, oldval, newval) {
    //     if (oldval === newval) return;
    //     this[arrtName] = newval;
    //     this.render();
    // }
}
customElements.define('my-input', Input)