import html from './html.js';

function makeTemplate() {
    return html`
        <nav>
            <a href="./index.html">Home</a>
        </nav>
    `;
}

export default class Header {
    render() {
        const dom = makeTemplate();
        return dom;
    }
}