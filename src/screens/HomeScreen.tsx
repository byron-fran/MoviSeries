import { View, Text, Button, Dimensions, FlatList, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import useMovies from '../hooks/useMovies';
import Carousel from 'react-native-snap-carousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MovieCard from '../components/MovieCard';
import MovieSliceHorizontal from '../components/MovieSliceHorizontal';


const { width: windowWidth } = Dimensions.get('window')
const HomeScreen = () => {
    const Navigate = useNavigation();
    const { nowPlaying, popular, topRated, upcoming } = useMovies();

    // Solo para dispositivos IOS
    const { top } = useSafeAreaInsets()

    return (
        <ScrollView>
            <View style={{ marginTop: top + 20, flex: 1 }}>
                <View style={{ height: 440 }}>
                    <Carousel
                        data={nowPlaying}
                        renderItem={({ item }: any) => <MovieCard movie={item} />}
                        itemWidth={300}
                        sliderWidth={windowWidth}
                    />
                </View>

                <MovieSliceHorizontal movies={popular} title='Popular'/>
                <MovieSliceHorizontal movies={topRated} title='Top rated'/>
                <MovieSliceHorizontal movies={upcoming} title='Upcoming'/>
            </View>
        </ScrollView>

    )
}

export default HomeScreen