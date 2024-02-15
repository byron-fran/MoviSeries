import { View, Text, Image, Dimensions, StyleSheet, ScrollView, VirtualizedList } from 'react-native'
import { ScreenStackProps } from 'react-native-screens'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../Navigation/Navigation'


const heightScreen = Dimensions.get('screen').height
interface DetailScreenProps extends StackScreenProps<RootStackParams, 'detailScreen'> { }

const DetailScreen = ({ navigation, route }: DetailScreenProps) => {

    const movie = route.params
    const uri = `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`
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
                <Text style={styles.title}>{movie.title}</Text>
                <Text>{movie.original_title}</Text>
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
    title : {}
})
export default DetailScreen