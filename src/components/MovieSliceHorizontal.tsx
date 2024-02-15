import { View, Text, FlatList, StyleSheet } from 'react-native'
import { Movie } from '../interfaces/MovieInterface'

import MovieCard from './MovieCard'

interface MovieSliceProps {
    title? : string,
    movies : Movie[]
}
const MovieSliceHorizontal  = ({ title, movies} : MovieSliceProps) => {

    return (
        <View style={{ height: 260 }}>
            {title  && <Text style={styles.title}>{title}</Text>}

               <FlatList
                        data={movies}
                        renderItem={({ item }: any) => (<MovieCard width={140} height={200} movie={item} />)}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}

                    />
        </View>

    )}

const styles = StyleSheet.create({
    title : {
        fontWeight : 'bold',
        fontSize : 30,
        color : '#fff',
        marginLeft : 10,
        marginBottom : 10
    }
})    
export default MovieSliceHorizontal