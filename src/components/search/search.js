import { DivComponent } from '../../common/div-component.js';
import './search.css'

export class Search extends DivComponent {
    constructor(state) {
        super();
        this.state = state
    }

    render() {
        this.el.classList.add('search');
        this.el.innerHTML = `
            <div class="search__wrapper">
                <input 
                    type="text" 
                    placeholder="Find books or author..."
                    class="search__input"
                    value="${this.state.searchQuery ? this.state.searchQuery : ''}"
                />
                <img src="/static/search.svg" alt="search">
            </div>
            <button type="button" aria-label="searching">
                <img src="/static/search-white.svg" alt="search button">
            </button>
        `;

        return this.el;
    }
}