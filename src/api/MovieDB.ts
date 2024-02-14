import axios from 'axios';

const MovieDB = axios.create({
    baseURL : 'https://api.themoviedb.org/3/movie',
    headers: {
       Authorization : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDg2MDU1YTlmODk4NWI2NzIxOTA5OGJjODRhMjM1ZCIsInN1YiI6IjY1MjFjNTZhOTVjMGFmMDEzYjE3NDQ5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1bGhP35sJNBAtaj5FKqEQ3abTKZVNJp0oVvCUizOieg'
    }
})
export default MovieDB