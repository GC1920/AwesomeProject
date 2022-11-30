import React from 'react';
import { View, Text } from 'react-native';

import { useRoute } from '@react-navigation/native';
import { Details } from '../database/api.iden';

export function ScreenC() {

  const route = useRoute();

  const DATA = Details({ID: route.params.ID});

  console.log(DATA)

  return (
    <View style={{flex: 1, backgroundColor: 'green', justifyContent: 'center'}}>

      <Text style={{textAlign: 'center', color: '#fff'}}>

        Sucess!

      </Text>

    </View>
  );
}