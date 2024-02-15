import { useContext, useEffect } from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'
import { LinearGradient } from 'react-native-linear-gradient'
import { GradientContext } from '../context/Gradientcontext'
import Usefade from '../hooks/useFade'


interface Props {
    children: JSX.Element | JSX.Element[]
}

const BackGroundGradient = ({ children }: Props) => {
    const { colors, prevColors,changePrevColors,  } = useContext(GradientContext);
    const {fadeIn, fadeOut} = Usefade();


    useEffect(() => {
      fadeIn(() => {
        changePrevColors(colors);
        fadeOut()
      })

    }, [colors])
    return (
        <View style={{ flex: 1, }}>
            <LinearGradient colors={[prevColors.primary, prevColors.secundary]} start={{
                x: 0.3,
                y: 0.4
            }}
                end={{
                    x: 0.8,
                    y: 0.8
                }}
                style={{...StyleSheet.absoluteFillObject}}
            />
       

            <Animated.View style={{ ...StyleSheet.absoluteFillObject }}>
                <LinearGradient colors={[colors.primary, colors.secundary]} start={{
                    x: 0.3,
                    y: 0.4
                }}
                    end={{
                        x: 0.8,
                        y: 0.8
                    }}
                    style={StyleSheet.absoluteFillObject}
                />
            </Animated.View>
            {children}
        </View>

    )
}

export default BackGroundGradient