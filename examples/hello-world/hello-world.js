import { html, defineElement } from '../../index.js';


function HelloWorld() {

    return html(`<h1>Hello World!!</h1>`);

}

defineElement('hello-world', HelloWorld);