import html from './html.js';
import userApi from '../apis/user-api.js';

function makeTemplate() {
    return html`
    <img class="background-pic" src="img/bwdeer">
   
    `;
}

export default class GameInfo {
    constructor() {
        this.user = userApi.getAll();
    }
    render() {
        let dom = makeTemplate();
        const form = dom.getElementById('user-form');
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const elements = form.elements;
            const user = {};

            user.name = elements.name.value;
    
            
            userApi.add(user);
            
            window.location.href = './index.html';
        });
        return dom;
    }
}

const gameInfo = new GameInfo();
const root = document.getElementById('root');
root.appendChild(gameInfo.render());