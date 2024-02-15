import { View, Text , Animated, Button} from 'react-native'
import { useRef } from 'react'

const Usefade = () => {

    const opacity = useRef( new Animated.Value(0)).current;
    
    const fadeIn = () => {
        Animated.timing(
            opacity , {
                toValue : 1,
                useNativeDriver : true,
                duration : 1000
            }
        ).start()
    }

    const fadeOut = () => {
        Animated.timing(
            opacity, {
                toValue : 0,
                useNativeDriver : true,
                duration : 1000
            }
        ).start()
    }


    return{
        opacity,
        fadeIn, 
        fadeOut
    }

}

export default Usefade