import { useEffect, useState } from "react";
import MovieDB from "../api/MovieDB";
import {AxiosError} from 'axios'
import { MovieInterface, Movie} from "../interfaces/MovieInterface";

const useMovies = () => {
    
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const getMovies = async () => {

        try {
            const {data} = await MovieDB.get<MovieInterface>('/now_playing');
            setMovies(data.results)
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
        movies,
        isLoading
    }
}

export  default useMovies