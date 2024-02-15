import 'react-native-gesture-handler';
import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import Navigation from './src/Navigation/Navigation';
import GradientProvider from './src/context/Gradientcontext';

const Stack = createNativeStackNavigator()

const App = () => {

  return (
    <GradientProvider>
      <NavigationContainer>
        <Navigation />
        
      </NavigationContainer>
    </GradientProvider>


  )
}

export default App