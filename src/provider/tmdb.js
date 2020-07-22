const BASE_URL = "https://api.themoviedb.org/3"
const API_KEY = "bbf5a3000e95f1dddf266b5e187d4b21"

const getFullURL = (endpoint, keyword, pages) => {
    return `${BASE_URL}${endpoint}?api_key=${API_KEY}&query=${keyword}&pages=${pages}`
}

const fetchData = async (url) => {
    return fetch(url).then(res => res.json()).then(body => body)
}
export default {
    list: async (endpoint, keyword, pages) => {
        const url = getFullURL(endpoint, keyword, pages)
        const { results } = await fetchData(url)
        return results
    }
}