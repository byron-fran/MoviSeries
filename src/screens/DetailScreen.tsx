import { View, Text, Image, Dimensions, StyleSheet, ScrollView, ActivityIndicator } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../Navigation/Navigation'
import UseMovieDetail from '../hooks/useMovieDetail'
import MovieInfo from '../components/MovieInfo';

const heightScreen = Dimensions.get('screen').height;

interface DetailScreenProps extends StackScreenProps<RootStackParams, 'detailScreen'> { }

const DetailScreen = ({ navigation, route }: DetailScreenProps) => {

    const movie = route.params
    const uri = `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`;
    const {cast, movieFull, isLoading} = UseMovieDetail(movie.id)
  
    return (
        <ScrollView>
            <View style={styles.imageContainer} >
                <Image style={styles.image}
                    source={{
                        uri
                    }}
                />
            </View>
            <View style={styles.infoContainer}>
                {isLoading ? (
                     <ActivityIndicator size={40} color='#2E86C1' style={{marginTop : 10}}/>
                ) : <MovieInfo movie={movieFull!} cast={cast}/> }
               
  
            </View>
        </ScrollView>

    )
}


const styles = StyleSheet.create({
    imageContainer: {
        height: heightScreen * 0.6,
        width: '100%',
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20,
        overflow: 'hidden'
    },
    image: {
        flex: 1
    },
    infoContainer :{

    },
})
export default DetailScreen