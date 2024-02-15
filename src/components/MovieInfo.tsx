import { View, Text, StyleSheet } from 'react-native'
import { MovieDetail as Movie } from '../interfaces/MovieDetail'
import { CastElement } from '../interfaces/CastInterface'
import Icon from 'react-native-vector-icons/Ionicons'
import { formatQuantity } from '../helpers/currency'

interface MovieProps {
    movie: Movie,
    cast: CastElement[]
}
const MovieInfo = ({ movie, cast }: MovieProps) => {

    
    return (
        <>
            <View style={styles.containerInfo}>
                <Text style={styles.title}>{movie.title}</Text>
                <View style={styles.flexinfo}>
                    <Text> <Icon name="star-outline" /> </Text>
                    <Text>
                        {movie.vote_average.toFixed(2)}
                    </Text>
                    <View style={styles.genresContainer}>
                        {movie.genres.map((genre) => (
                            <Text key={genre.id}>{genre.name}{' '}</Text>
                        ))}
                    </View>
                </View>
                <Text style={styles.title}>History</Text>
                <Text>{movie.overview}</Text>
                <Text style={styles.bufgetText}>Budget: {formatQuantity(movie?.budget)}</Text>
            </View>

        </>

    )
}

const styles = StyleSheet.create({
    containerInfo: {
        marginHorizontal: 20,
        marginTop: 10
    },
    flexinfo: {
        display: 'flex',
        flexDirection: 'row',
        rowGap: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000'
    },
    genresContainer : {
        display : 'flex',
        flexDirection : "row",
        marginLeft : 5,

    } ,
    genresText : {
        color : '#000',
        marginLeft : 5
    },
    bufgetText :{
        fontWeight : 'bold'
    }
})
export default MovieInfo