class MovieDialog extends HTMLElement {
    set content(content) {
        this._content = content
        this.render()
        const closeButton = this.querySelector('.close')
        closeButton.addEventListener('click', () => {
            this.style.visibility = 'hidden'
        })
    }

    render() {
        const content = this._content
        this.innerHTML = `
        <div class="fadeIn">
        <div class="close">X</div>
          <div class="content">
            <div class="left">
              <img src="https://image.tmdb.org/t/p/w500/${content.poster_path}" alt="">
            </div>
            <div class="right">
              <h1>${content.title}</h1>
              <p>${content.overview}</p>
            </div>
          </div>
      </div>
    </div>
        `
    }
}

customElements.define('movie-dialog', MovieDialog)