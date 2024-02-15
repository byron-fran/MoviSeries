import { View, Text , Animated, Button} from 'react-native'
import { useRef } from 'react'

const Usefade = () => {

    const opacity = useRef( new Animated.Value(0)).current;

    const fadeIn = (callback? : Function) => {
        Animated.timing(
            opacity , {
                toValue : 1,
                useNativeDriver : true,
                duration : 2000
            }
        ).start(callback ? callback(): null)
    }

    const fadeOut = () => {
        Animated.timing(
            opacity, {
                toValue : 0,
                useNativeDriver : true,
                duration : 2000
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