import "regenerator-runtime"
import './index.scss'
import './components/MovieList'
import api from './provider/tmdb'

const App = () => {
    const searchBar = document.querySelector('.search-bar')
    let timeout = null
    const current = {
        query: "avenger",
        page: 1
    }

    const fetchMovies = async (keyword, page, infiniteScroll) => {
        const result = await api.list('/search/movie', keyword, page)
        const el = document.querySelector('movie-list')
        el.infiniteScroll = infiniteScroll
        el.dataSource = result
    }
    const searchListener = (e) => {
        if (e.which === 13) {
            const keyword = e.target.value
            fetchMovies(keyword, 1)
        } else {
            const query = e.target.value
            if (!query) {
                timeout = setTimeout(() => {
                    fetchMovies(current.query, current.page)
                }, 1000)
            } else {
                clearTimeout(timeout)
            }
        }
    }
    searchBar.addEventListener('keyup', searchListener)
    document.addEventListener('scroll', () => {
    })
    fetchMovies(current.query, current.page)
}

export default App