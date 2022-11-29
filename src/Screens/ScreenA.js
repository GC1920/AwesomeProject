import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export function ScreenA() {

    const navigation = useNavigation()

    function openScreen() {
        navigation.navigate('ScreenC')
    }


  return (
    <View style={{flex: 1, backgroundColor: 'red', justifyContent: 'center'}}>

        <Button 
            title='Go to C screen'
            onPress={openScreen}
        />

    </View>
  );
}