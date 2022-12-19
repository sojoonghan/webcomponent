import Header from './component/Header';
import Navegator from './component/navigator/Navigator'

const Main = (() => {
    const app = document.querySelector('#root');
    app.innerHTML =/*html*/`
    <my-navigator></my-navigator>
    <my-header><h1>slot test</h1></my-header>
        `
})();
