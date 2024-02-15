import { View, Text, StyleSheet, FlatList } from 'react-native'
import { MovieDetail as Movie } from '../interfaces/MovieDetail'
import { CastElement } from '../interfaces/CastInterface'
import Icon from 'react-native-vector-icons/Ionicons'
import { formatQuantity } from '../helpers/currency'
import CastItem from './CastItem'


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
                    <Text> <Icon name="star-outline" color='#fff' /> </Text>
                    <Text style={{color : '#fff'}}>
                        {movie.vote_average.toFixed(2)}
                    </Text>
                    <View style={styles.genresContainer}>
                        {movie.genres.map((genre) => (
                            <Text key={genre.id} style={styles.genresText}>{genre.name}{' '}</Text>
                        ))}
                    </View>
                </View>
                <Text style={styles.title}>History</Text>
                <Text style={{color : '#fff'}}>{movie.overview}</Text>
                <Text style={styles.bufgetText}>Budget: {formatQuantity(movie?.budget)}</Text>
            </View>

            <View style={styles.containerInfo}>
                {/* Actors */}
                <Text style={styles.title}>Actors</Text>

                <FlatList
              
                    data={cast}
                    renderItem={({ item }) => <CastItem actor={item} />
                    }
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
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
        color: '#fff'
    },
    genresContainer: {
        display: 'flex',
        flexDirection: "row",
        marginLeft: 5,

    },
    genresText: {
        color: '#fff',
        marginLeft: 5
    },
    bufgetText: {
        fontWeight: 'bold',
        color : '#fff'
    }
})
export default MovieInfo