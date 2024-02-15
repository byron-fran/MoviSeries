import { View, Text,StyleSheet } from 'react-native'
import {LinearGradient} from 'react-native-linear-gradient'


interface Props {
    children : JSX.Element | JSX.Element[]
}

const BackGroundGradient = ({children} : Props) => {

    return (
        <View style={{flex : 1, backgroundColor : '#2881C9'}}>
            <LinearGradient colors={['red', 'blue', 'white']}start={{
                x : 0.3,
                y: 0.4
            }} 
            end={{
                x: 0.8,
                y : 0.8
            }}
            style={StyleSheet.absoluteFillObject}
            />
            {children}
        </View>

    )}

export default BackGroundGradient