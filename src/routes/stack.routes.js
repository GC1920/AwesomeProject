import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator } = createNativeStackNavigator();

import { ScreenA } from "../Screens/ScreenA";
import { ScreenB } from "../Screens/ScreenB";
import { ScreenC } from "../Screens/ScreenC";

export function HomeStackRoute() {

    const config = {
        animation: 'spring',
        config: {
          stiffness: 1000,
          damping: 500,
          mass: 3,
          overshootClamping: true,
          restDisplacementThreshold: 0.01,
          restSpeedThreshold: 0.01,
        },
      };
    
    return(
        <Navigator>
            <Screen
                name='ScreenA'
                component={ScreenA}
                options={{
                    headerShown: false
                }}
            />

            <Screen 
                name='ScreenC'
                component={ScreenC}
                options={{
                    headerShown: false,
                    transitionSpec: {
                        open: config,
                        close: config,
                    },
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
                    headerShown: false
                }}
            />
        </Navigator>
    )
}
