import './MovieCard'

class MovieList extends HTMLElement {
  set dataSource(dataSource) {
    this._dataSource = dataSource
    this.render()
  }

  set infiniteScroll(infiniteScroll) {
    this._infiniteScroll = infiniteScroll
  }
  render() {
    if (!this._infiniteScroll) this.innerHTML = ''
    this._dataSource.forEach(data => {
      const el = document.createElement('movie-card')
      el.content = data
      this.appendChild(el)
    })
  }
}

customElements.define('movie-list', MovieList)