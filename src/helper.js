// export const setupShadow = (element, html, css) => {
//     const shadow = element.attachShadow({ mode: "open" });
//     const template = document.createElement("template");
//     template.innerHTML = `<style>@import styles.css ${css} </style> ${attachCallbacks(html, element)}`
//     const templateContent = template.content;
//     shadow.appendChild(templateContent.cloneNode(true));
// }

// const attachCallbacks = (html, element) => {
//     const lastId = window.lastComponentId ? window.lastComponentId : 0;
//     const componentId = lastId + 1;
//     window.lastComponentId = componentId;

//     const componentName = "component" + componentId;
//     window[componentName] = element;
//     return html.replaceAll("this.", "window" + componentName + ".")
// }