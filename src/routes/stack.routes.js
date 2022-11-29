import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator } = createNativeStackNavigator();

import { ScreenA } from "../Screens/ScreenA";
import { ScreenB } from "../Screens/ScreenB";

export function StackRoutes() {
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