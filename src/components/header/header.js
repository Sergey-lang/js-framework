import { DivComponent } from '../../common/div-component.js';

export class Header extends DivComponent {
    constructor(appState) {
        super();
        this.appState = appState
    }

    render() {
        this.el.innerHTML = '';
        this.el.classList.add('header');
        this.el.innerHTML = `
            <div>
                <img src="https://static.vecteezy.com/system/resources/previews/023/654/784/non_2x/golden-logo-template-free-png.png" alt="logo" />
            </div>
        `;

        return this.el;
    }
}