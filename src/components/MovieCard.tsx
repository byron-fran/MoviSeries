import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Movie } from '../interfaces/MovieInterface'
import { FC } from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons';
interface MovieCardProps {
    movie: Movie,
    width?: number,
    height?: number

}
const MovieCard: FC<MovieCardProps> = ({ movie, height = 420, width = 300 }) => {

    const uri = `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`
    const navigate = useNavigation()
    return (
        <TouchableOpacity
            onPress={() => navigate.navigate('detailScreen', movie)} 
            >
            <View style={{
                width,
                height,
                marginHorizontal: 7,
                paddingBottom : 20
            }}>
           
              
                <View style={styles.imageContainer}>

                    <Image
                        source={{ uri }}
                        style={styles.imageMovie}
                    />
                </View>

            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({

    imageMovie: {
        flex: 1,
        borderRadius: 18
    },
    imageContainer: {
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 17,

    }
})
export default MovieCard