import React from 'react';
import { View, Text } from 'react-native';
import { Arrow } from './utils/highlights.header';

import { API_IMG } from '@env';

import { RequestFavorites } from '../database/api.favorites';

export function ScreenB() {

  const DATA = RequestFavorites()

  const Img = {uri: `${API_IMG + DATA.poster_path}`}

  console.log(DATA)

  return (
    <>
      <Arrow />
      <View style={{ flex: 1, backgroundColor: 'blue', justifyContent: 'center' }}>
        <Text style={{ textAlign: 'center', color: '#fff' }}>{DATA.title}</Text>
      </View></>
  );
}