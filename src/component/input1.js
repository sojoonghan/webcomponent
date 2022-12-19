import './Input'

const component = document.querySelector('my-input');

component.addEventListener('inputValue', (e) => {
    console.log(e.detail)
    component.innerHTML = `<h1> ${e.detail.value} : custom Event</h1>`
})