class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = "<h1>Search Bar</h1>"
  }
}

customElements.define('search-bar', SearchBar)