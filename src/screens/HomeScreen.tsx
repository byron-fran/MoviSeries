import { View, Text, Button, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import useMovies from '../hooks/useMovies';
import Carousel from 'react-native-snap-carousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MovieCard from '../components/MovieCard';


const { width: windowWidth } = Dimensions.get('window')
const HomeScreen = () => {
    const Navigate = useNavigation();
    const { movies } = useMovies();

    // Solo para dispositivos IOS
    const { top } = useSafeAreaInsets()

    return (
        <View style={{ marginTop: top + 20, flex: 1 }}>
            <View style={{height : 440}}>
                <Carousel
                    data={movies}
                    renderItem={({ item }: any) => <MovieCard movie={item} />}
                    itemWidth={300}
                    sliderWidth={windowWidth}
                />
            </View>


        </View>

    )
}

export default HomeScreen