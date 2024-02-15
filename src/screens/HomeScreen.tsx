import { View, Text, Button, Dimensions, FlatList, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import useMovies from '../hooks/useMovies';
import Carousel from 'react-native-snap-carousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MovieCard from '../components/MovieCard';
import MovieSliceHorizontal from '../components/MovieSliceHorizontal';
import BackGroundGradient from './BackgroundGradient';
import ImageColors from 'react-native-image-colors'
import { AxiosError } from 'axios';
import { getColors } from '../helpers/getColors';

const { width: windowWidth } = Dimensions.get('window');

const HomeScreen = () => {
    const Navigate = useNavigation();
    const { nowPlaying, popular, topRated, upcoming } = useMovies();

    // Solo para dispositivos IOS
    const { top } = useSafeAreaInsets()

    const getImageColors = async ( index : number) => {
       const movie = nowPlaying[index];
       const uri = `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`;
       const {primary,secondary} = await getColors(uri);
       console.log({primary, secondary})
    }

    return (
        <BackGroundGradient>



            <ScrollView>
                <View style={{ marginTop: top + 20, flex: 1 }}>
                    <View style={{ height: 440 }}>
                        <Carousel
                            data={nowPlaying}
                            renderItem={({ item }: any) => <MovieCard movie={item} />}
                            itemWidth={300}
                            sliderWidth={windowWidth}
                            onSnapToItem={(index) => getImageColors(index)}/>
                    </View>

                    <MovieSliceHorizontal movies={popular} title='Popular' />
                    <MovieSliceHorizontal movies={topRated} title='Top rated' />
                    <MovieSliceHorizontal movies={upcoming} title='Upcoming' />
                </View>
            </ScrollView>
        </BackGroundGradient>
    )
}

export default HomeScreen