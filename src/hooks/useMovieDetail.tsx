import { View, Text } from 'react-native'
import MovieDB from '../api/MovieDB'
import { useEffect, useState } from 'react'
import { AxiosError } from 'axios'
import { MovieDetail as  Movie,  } from '../interfaces/MovieDetail'
import { CastElement as Cast, CastInterface } from '../interfaces/CastInterface'

interface MovieState {
    isLoading : boolean,
    movieFull? : Movie,
    cast : Cast[]
    
}

const UseMovieDetail = (idMovie : number) => {
    const [movieFullDetail, setMovieFullDetail] = useState<MovieState>({
        isLoading : true,
        movieFull : undefined,
        cast : []
    });



    const getMovieDetail = async () => {
        try {
            const movieDetail = MovieDB.get<Movie>(`/${idMovie}`);
            const castList = MovieDB.get<CastInterface>(`${idMovie}/credits`);
            const data = await Promise.all([movieDetail, castList]);
            setMovieFullDetail({
                isLoading : false,
                movieFull : data[0].data,
                cast : data[1].data.cast
            })

        } catch (error : unknown) {
            if(error instanceof AxiosError){
                console.log(error.response?.data)
            }
        }
    }
    useEffect(()  => {
        getMovieDetail()
    }, [])
    return  {
        ...movieFullDetail
    }

}

export default UseMovieDetail