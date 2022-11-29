import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Screen, Navigator } = createBottomTabNavigator();

import { ScreenA } from '../Screens/ScreenA';
import { ScreenB } from '../Screens/ScreenB';

export function TabRoutes() {
    return(
        <Navigator>
            <Screen 
                name='ScreenA'
                component={ScreenA}
            />

            <Screen 
                name='ScreenB'
                component={ScreenB}
            />
        </Navigator>
    )
}