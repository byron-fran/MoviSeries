import 'react-native-gesture-handler';
import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import Navigation from './src/Navigation/Navigation';
import FadeScreen from './src/screens/FadeScreen';
const Stack = createNativeStackNavigator()

const App = () => {

  return (

      <NavigationContainer>
        <Navigation/>
        {/* <FadeScreen/> */}
      </NavigationContainer>

  )
}

export default App