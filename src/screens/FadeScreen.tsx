import { View, Text , Animated, Button} from 'react-native'
import { useRef } from 'react'
import Usefade from '../hooks/useFade'
const FadeScreen = () => {

    const {opacity, fadeIn, fadeOut} = Usefade();

    return (
        <View style={{ 
            flex : 1,
            backgroundColor : 'red',
            justifyContent :  'center',
            alignItems : 'center'
        }}>
           <Animated.View style={{
                width : 150,
                height : 150,
                backgroundColor : '#cbde51',
                opacity 
           }}/>
           <Button title='Fade In' onPress={fadeIn}/>
           <Button title='fade out' onPress={fadeOut}/>
        </View>


    )}

export default FadeScreen