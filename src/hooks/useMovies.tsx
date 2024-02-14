import { useEffect, useState } from "react";
import MovieDB from "../api/MovieDB";
import {AxiosError} from 'axios'
import { MovieInterface, Movie} from "../interfaces/MovieInterface";

interface MoviesState {
    nowPlaying : Movie[],
    topRated : Movie[],
    popular : Movie[],
    upcoming : Movie[],
}

const useMovies = () => {

 
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const [movies, setMovies] = useState<MoviesState>({
        nowPlaying : [],
        topRated : [],
        popular : [],
        upcoming : []
    })


    const [popular, setPopular] = useState<Movie[]>([])
    const getMovies = async () => {

        try {
            const nowPlayingMovies=  MovieDB.get<MovieInterface>('/now_playing');
            const pupularMovies  =  MovieDB.get<MovieInterface>('/popular');
            const upcomingMovies  = MovieDB.get<MovieInterface>('/top_rated');
            const topRatedgMovies  = MovieDB.get<MovieInterface>('/upcoming');

            const data = await Promise.all([nowPlayingMovies, pupularMovies, upcomingMovies, topRatedgMovies])
            setMovies({
                nowPlaying : data[0].data.results,
                popular : data[1].data.results,
                upcoming : data[2].data.results,
                topRated : data[3].data.results
            })
            setIsLoading(false)

        } catch (error : unknown) {
            if(error instanceof AxiosError){
                console.log(error.response?.data)
            }
        }
    }

    useEffect(() => {
        getMovies()
    }, [])

    return {
        ...movies,
        isLoading,
    }
}

export  default useMovies