import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Header } from './utils/home.header';

export function ScreenA() {

    const navigation = useNavigation()

    function openScreen() {

        navigation.navigate('ScreenC');

    }


  return (
    <>
      <Header />
      
      <ScrollView>

        <View>

          <Text>Press the button!</Text>

        </View>

        <Button
          title='Go to C screen'
          onPress={openScreen} 
        />

      </ScrollView>
    </>
  );
}