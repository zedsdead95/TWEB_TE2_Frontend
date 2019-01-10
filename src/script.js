let request = new XMLHttpRequest()

const API_KEY = 'f1be4bafe6f7cb0cb84f5948c5b75497'
const API_URL = 'https://api.themoviedb.org/3/movie/popular?page=1&api_key=' + API_KEY;


// this script enables us to get all the movies from the API
async function getMovies(){
    let JSON_MOVIES
    request.open("GET", API_URL, true)
    request.onload = function () {
        JSON_MOVIES = JSON.parse(this.response);
        JSON_MOVIES.forEach(movie => {
            movie.title
            movie.poster_path
        })
    }
    return 
}

