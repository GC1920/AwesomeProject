import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export function ScreenA() {

    const navigation = useNavigation()

    function openScreen() {
        navigation.navigate('ScreenB')
    }


  return (
    <View style={{flex: 1, backgroundColor: 'red', justifyContent: 'center'}}>

        <Button 
            title='Tela B'
            onPress={openScreen}
        />

    </View>
  );
}