import { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native'
import MovieDB from '../api/MovieDB';
import { AxiosError } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useContext } from 'react';
import { MovieContext } from '../context/MoviesContext';
import useMovies from '../hooks/useMovies';
import { MovieInterface } from '../interfaces/MovieInterface';
import { useNavigation } from '@react-navigation/native';

interface NavigateProps {
    navigate : (route: string, resultName : {name: string}) => void
}

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState<string>('');
    const { moviesSearch, setMoviesSearch } = useContext(MovieContext);
    const Navigate = useNavigation<NavigateProps>();

    const handleSearch = async () => {
        try {
            const { data } = await MovieDB.get<MovieInterface>(`/search/movie?query=${searchTerm}`);
            setMoviesSearch(data.results);
            if (moviesSearch.length > 0) {
                Navigate.navigate('searchResults', {name : searchTerm});
                setSearchTerm('')
                return
            }
        } catch (error: unknown) {
            if (error instanceof AxiosError) {

                console.log(error.response?.data)
            }
        }
    }
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 20,
            marginHorizontal: 20,
            gap: 10
        }} >
            <TextInput style={styles.input} placeholder='Search a movie' onChangeText={(text) => setSearchTerm(text)} />
            <View style={styles.btnContainer}
            >
                <TouchableOpacity onPress={handleSearch}>
                    <Text style={styles.btnText}>
                        search
                    </Text>
                </TouchableOpacity>

            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#fff',

        borderRadius: 15,
        padding: 10,
        flex: 3
    },
    btnContainer: {
        flex: 1,
        borderRadius: 15,
        backgroundColor: '#2881C9',
        padding: 10
    },
    btnText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    }
})
export default SearchBar