import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export function ScreenB() {

  return (
    <View style={{flex: 1, backgroundColor: 'blue', justifyContent: 'center'}}>
      <Text style={{textAlign: 'center', color: '#fff'}}>Hello B!</Text>
    </View>
  );
}