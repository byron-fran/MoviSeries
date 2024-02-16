import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native'
import { useContext } from 'react'
import { MovieContext } from '../context/MoviesContext'
import { useNavigation } from '@react-navigation/native'
import { Movie } from '../interfaces/MovieInterface'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../Navigation/Navigation'

type NavigateProps = {
    navigate : (route : string, movie : Movie) => void
 };

 interface SearchResultProps extends StackScreenProps<RootStackParams, 'searchResults'> { };

const SearchResultsScreen = ({route, }: SearchResultProps) => {
    const { moviesSearch } = useContext(MovieContext);
    const params = route.params

    const  navigate = useNavigation<NavigateProps>();

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.textResult}>Result of { params.name}</Text>
                <View>
                    {moviesSearch.map(movie => {
                        const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
                        return (
                            <Pressable  key={movie.id} style={styles.card}
                            onPress={() => navigate.navigate('detailScreen', movie)}>
                                <View>
                                    <Image style={styles.image} source={{
                                        uri
                                    }} />
                                </View>
                                <View>
                                    <Text>{movie.title}</Text>
                                    <Text>{movie.release_date}</Text>
                                    
                                </View>
                            </Pressable>
                        )
                    })}
                </View>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginVertical: 20
    },
    card: {
        flexDirection: 'row',
        marginVertical: 10,
        borderBottomColor: '#D5DBDB',
        borderBottomWidth: 1,
        padding: 10,
        gap : 10


    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 10
    }
    ,textResult: {
      color : '#000',
      fontWeight : 'bold',
      fontSize : 25
    }
})
export default SearchResultsScreen