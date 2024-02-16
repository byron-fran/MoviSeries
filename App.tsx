import 'react-native-gesture-handler';
import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import Navigation from './src/Navigation/Navigation';
import GradientProvider from './src/context/Gradientcontext';
import { MyTabs } from './src/tabs/Tab';
import MoviesProvider from './src/context/MoviesContext';

const Stack = createNativeStackNavigator()

const App = () => {

  return (
    <GradientProvider>
      <MoviesProvider>
        <NavigationContainer>
          {/* <Navigation /> */}
          <MyTabs />
        </NavigationContainer>
      </MoviesProvider>
    </GradientProvider>


  )
}

export default App