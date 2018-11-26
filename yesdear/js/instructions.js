import html from './js/html.js';

function makeTemplate() {
    return html`
        <img class="background-pic" src="">
        <section class="directions">
            <h1 class="title">How to Use "Yes Dear".</h1>
            <ol>
                <li>Choose a relationship that you seek advice with.</li>
                <li>Be a dear and read the advice.</li>
                <li>"Advice" is meant solely for entertainment purposes. Share with friends and have a laugh!</li>
            </ol>
        </section>
    `;
}

export default class Instructions {
    render() {
        const dom = makeTemplate();
        return dom;
    }
}

const instructions = new Instructions();
const root = document.getElementById('root');
root.appendChild(instructions.render());