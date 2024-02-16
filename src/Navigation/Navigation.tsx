import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import { Movie } from '../interfaces/MovieInterface';
import SearchResultsScreen from '../screens/SearchResults';
import { ReactNode } from 'react';

export type RootStackParams ={
    homeScreen : undefined,
    detailScreen : Movie,
    searchResults : {name : string}

}
const Stack = createNativeStackNavigator<RootStackParams>();

const Navigation = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen options={{
                headerShown : false
            }} name='homeScreen' component={HomeScreen}/>
            <Stack.Screen options={ {
                headerShown : false,
                
            }} name='detailScreen' component={DetailScreen}/>
            <Stack.Screen name='searchResults' component={SearchResultsScreen} options={{
                headerShown :false
            }}/>
        </Stack.Navigator>
    

    )}

export default Navigation