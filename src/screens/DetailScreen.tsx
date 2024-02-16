import { View, Text, Image, Dimensions, StyleSheet, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../Navigation/Navigation'
import UseMovieDetail from '../hooks/useMovieDetail'
import MovieInfo from '../components/MovieInfo';
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient';
import { useEffect, useState } from 'react';
import { getColors } from '../helpers/getColors';
import { ColorsBG } from '../context/Gradientcontext';
const heightScreen = Dimensions.get('screen').height;

interface DetailScreenProps extends StackScreenProps<RootStackParams, 'detailScreen'> { }

const DetailScreen = ({ navigation, route }: DetailScreenProps) => {
    const [bgColors, setBgColors] = useState<ColorsBG>({
        primary : 'transparent',
        secundary : 'transparent'
    });

    const movie = route.params
    const uri = `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`;
    const { cast, movieFull, isLoading } = UseMovieDetail(movie.id);

    useEffect(() => {
        const getBgDetail = async () => {
           const {primary,secundary} = await getColors(uri);
           setBgColors({primary, secundary})
        };   
        getBgDetail()
    }, [])
    
    return (

        <LinearGradient colors={[ bgColors?.primary, bgColors?.secundary ]}
           start={{x : 0.7, y : 0.9}
          }
          end={{x : 1, y: 0.6}}
          style={{...StyleSheet.absoluteFillObject}}

        >
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
                        <ActivityIndicator size={40} color='#2E86C1' style={{ marginTop: 10 }} />
                    ) : <MovieInfo movie={movieFull!} cast={cast} />}


                </View>
                <View style={styles.btnBack} >
                    <TouchableOpacity onPress={() => navigation.pop()}>
                        <Icon name='arrow-back-outline' size={70} color='white' />
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </LinearGradient>


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
    infoContainer: {

    },
    btnBack: {
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        top: 5,
        left: 5
    }
})
export default DetailScreen