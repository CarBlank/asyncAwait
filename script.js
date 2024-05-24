const API_URL = 'https://api.themoviedb.org/3/search/movie?query='
const apikey = '84c4ccbcfa24d4ea1be4f04f76b3df93'
const apitoken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGM0Y2NiY2ZhMjRkNGVhMWJlNGYwNGY3NmIzZGY5MyIsInN1YiI6IjY2NGUyYjQyOGJkOTEwN2ZhMTE4OGNmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XZhzV_ZsNN1yR_o8dsOKEuH1__EI9qpI38VL6GioOww'
const moviesContainer = document.querySelector('#movie')
const formSearch = document.getElementById('form')
const searchInput = document.getElementById('searchId')

const showMovies = (movie) => {
    moviesContainer.innerHTML = '' //limpia el input lo deja vacio

    movie.forEach((movies_Container) => {
        moviesContainer.innerHTML += `
            <div class="card col-lg-3 col-xs-12 col-md-6">
            <img src="https://image.tmdb.org/t/p/w220_and_h330_face/${movies_Container.poster_path}" alt="${movies_Container.title}">
            <div class="card-body">
            <h3 class="card-header">${movies_Container.title}</h3>
            <h5 class="card-title">${movies_Container.overview}</h5>
            </div>
            </div>
            `
    })
}
    
const searchMovies = async (event) => {
    event.preventDefault()
        try {
        const search = searchInput.value
        const res = await axios.get(`${API_URL}${search}&api_key=${apikey}`)
        const movie = res.data.results
        showMovies(movie)
    } catch (error) {
        console.error(error)
    }
}

formSearch.addEventListener('submit', searchMovies)
        