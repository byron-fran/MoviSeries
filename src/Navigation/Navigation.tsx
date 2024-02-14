import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';


const Stack = createNativeStackNavigator();

const Navigation = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name='homeScreen' component={HomeScreen}/>
            <Stack.Screen name='detailScreen' component={DetailScreen}/>
        </Stack.Navigator>

    )}

export default Navigation