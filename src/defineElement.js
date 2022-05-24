
const wrapper = (renderFn) => {
   return class BaseElement extends HTMLElement {
        constructor() {
            super();
            let div = document.createElement('div');
            div.innerHTML = renderFn();
            this.appendChild(div);
        }
    }
}

export function defineElement(elementName, elementFunction) {
   customElements.define(elementName, wrapper(elementFunction));

} 




