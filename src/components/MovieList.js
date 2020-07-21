class MovieList extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = "<h1>Movie List</h1>"
    }
  }
  
  customElements.define('movie-list', MovieList)