import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Screen, Navigator } = createBottomTabNavigator();

import { HomeStackRoute, MyListStackRoute } from './stack.routes';

export function TabRoutes() {
    return(
        <Navigator>
            <Screen 
                name='Home'
                component={HomeStackRoute}
            />

            <Screen 
                name='My List'
                component={MyListStackRoute}
            />
        </Navigator>
    )
}