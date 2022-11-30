import React from 'react';
import { View, Text } from 'react-native';
import { Arrow } from './utils/highlights.header';

export function ScreenB() {

  return (
    <>
      <Arrow />
      <View style={{ flex: 1, backgroundColor: 'blue', justifyContent: 'center' }}>
        <Text style={{ textAlign: 'center', color: '#fff' }}>Hello B!</Text>
      </View></>
  );
}