import React from 'react';
import { View, Text } from 'react-native';

export function ScreenC() {
  return (
    <View style={{flex: 1, backgroundColor: 'green', justifyContent: 'center'}}>
      <Text style={{textAlign: 'center', color: '#fff'}}>C Screen!</Text>
    </View>
  );
}