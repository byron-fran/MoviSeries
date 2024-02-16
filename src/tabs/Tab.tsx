import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Navigation from '../Navigation/Navigation';
import { View, Text, StyleSheet, } from 'react-native';
import FavoritesScreen from '../screens/FavoritesScreen';
import Icon from 'react-native-vector-icons/Ionicons'

const Tab = createMaterialBottomTabNavigator();

export function MyTabs() {
   

    return (
            <Tab.Navigator initialRouteName='Home' style={{
               backgroundColor : 'transparent'
            }}>
                <Tab.Screen
                    name="Home"
                    
                    component={Navigation}
                    options={{
                        tabBarIcon: (props) => {
                            return (
                                <Icon size={25} name='home-outline' />
                            )
                        }
                    }}

                />
                <Tab.Screen name="favo" options={{
                    tabBarIcon: (props) => {
                        props.color = 'yellow';
                        props.focused = true
                        return (
                            <View>
                                <Text>
                                    <Icon name='star-outline' size={25} color={`${props.color}`} />
                                </Text>

                            </View>
                        )
                    },

                    //tabBarColor : '',
                    //title  : '',
                    //tabBarBadge : 4,
                    tabBarLabel: 'Favorites'
                }} component={FavoritesScreen} />

            </Tab.Navigator>
      
    );
}