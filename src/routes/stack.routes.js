import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator } = createNativeStackNavigator();

import { ScreenA } from "../Screens/ScreenA";
import { ScreenB } from "../Screens/ScreenB";
import { ScreenC } from "../Screens/ScreenC";

export function HomeStackRoute() {
    return(
        <Navigator>
            <Screen 
                name='ScreenA'
                component={ScreenA}
                options={{
                    title: 'Arroz',
                    headerTitleAlign: 'center'
                }}
            />

            <Screen 
                name='ScreenC'
                component={ScreenC}
                options={{
                    title: 'Cardume',
                    headerTitleAlign: 'center'
                }}
            />
        </Navigator>
    )
}

export function MyListStackRoute() {
    return(
        <Navigator>
            <Screen 
                name='ScreenB'
                component={ScreenB}
                options={{
                    title: 'Batata',
                    headerTitleAlign: 'center'
                }}
            />
        </Navigator>
    )
}