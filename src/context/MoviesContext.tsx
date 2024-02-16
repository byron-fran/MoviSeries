import { View, Text } from 'react-native'
import { createContext, Dispatch, SetStateAction, ReactNode, useState, useEffect } from 'react'
import { Movie } from '../interfaces/MovieInterface'

interface MovieStateProps {
    moviesSearch : Movie[],
    setMoviesSearch : Dispatch<SetStateAction<Movie[]>>,

}

export const MovieContext = createContext({} as MovieStateProps)

type MovieContextProps = {
    children : ReactNode
}
const MoviesProvider = ({children}: MovieContextProps) => {

    const [moviesSearch, setMoviesSearch] = useState<Movie[]>([])
    return (
       <MovieContext.Provider value={{
        moviesSearch,
        setMoviesSearch
       }}>
        {children}
       </MovieContext.Provider>
    )
}
export default MoviesProvider