import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

const { Screen, Navigator } = createMaterialBottomTabNavigator();

import { HomeStackRoute, MyListStackRoute } from './stack.routes';

import { useNavigation } from '@react-navigation/native';

export function TabRoutes() {

    const navigation = useNavigation()

    return(
        <Navigator
            activeColor="#fff"
            inactiveColor="#666666"
            barStyle={{ backgroundColor: '#000' }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Início') {
                    iconName = focused
                    ? 'ios-home'
                    : 'ios-home-outline';
                
                    } else if (route.name === 'Minha Lista') {
                    iconName = focused 
                    ? 'ios-star' 
                    : 'star-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Screen 
                name='Início'
                component={HomeStackRoute}
                listeners={{
                    tabPress: () => {
                        navigation.navigate('ScreenA')
                    }
                }}
            />

            <Screen 
                name='Minha Lista'
                component={MyListStackRoute}
            />
        </Navigator>
    )
}