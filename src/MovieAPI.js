import axios from "axios"

export function getTrending() { 
        return axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=28f59146d010acf01a886226973a360d')
    }

export function getMovieById(movie_id){ 
        return axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=28f59146d010acf01a886226973a360d`)
}
    
export function getCasts(movie_id) { 
    return axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=28f59146d010acf01a886226973a360d`)
}

export function getReviews(movie_id) { 
    return axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=28f59146d010acf01a886226973a360d`)
}
export function getMovies(query) {
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=28f59146d010acf01a886226973a360d&language=en-US&query=${query}&page=1`)
}