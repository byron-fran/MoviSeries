import { View, ActivityIndicator, Dimensions, FlatList, ScrollView } from 'react-native'
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
import { GradientContext } from '../context/Gradientcontext';
import { useContext, useEffect } from 'react';
const { width: windowWidth } = Dimensions.get('window');

const HomeScreen = () => {
    const Navigate = useNavigation();
    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
    const { changeColors } = useContext(GradientContext)
    // Solo para dispositivos IOS
    const { top } = useSafeAreaInsets()

    const getImageColors = async (index: number) => {
        const movie = nowPlaying[index];
        const uri = `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`;
        const { primary, secundary } = await getColors(uri);
        changeColors({ primary, secundary })
    };

    useEffect(() => {
        if (nowPlaying.length > 0) {
            getImageColors(0)
        }
    }, [nowPlaying]);


    return (
        <>
            {isLoading ? 
            <View style={{flex : 1, alignItems : 'center', justifyContent : 'center'}}>
                <ActivityIndicator size={60} />
            </View> : (
            <BackGroundGradient>
                <ScrollView>
                    <View style={{ marginTop: top + 20, flex: 1 }}>
                        <View style={{ height: 440 }}>
                            <Carousel
                                data={nowPlaying}
                                renderItem={({ item }: any) => <MovieCard movie={item} />}
                                itemWidth={300}
                                sliderWidth={windowWidth}
                                onSnapToItem={(index) => getImageColors(index)} />
                        </View>
                        <MovieSliceHorizontal movies={popular} title='Popular' />
                        <MovieSliceHorizontal movies={topRated} title='Top rated' />
                        <MovieSliceHorizontal movies={upcoming} title='Upcoming' />
                    </View>
                </ScrollView>
            </BackGroundGradient>
            )}

        </>
    )
}

export default HomeScreen