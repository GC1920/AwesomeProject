import React from 'react';
import { View, Text, Image, ImageBackground, ScrollView, SafeAreaView, StyleSheet } from 'react-native';

import { useRoute } from '@react-navigation/native';
import { Details } from '../database/api.iden';
import { Arrow } from './utils/highlights.header'

import { API_IMG } from '@env';

export function ScreenC() {

  const route = useRoute();

  const DATA = Details({ID: route.params.ID});

  const Img = {uri: `${API_IMG + DATA.poster_path}`}

  console.log(DATA)

  return (

    <>
      <View style={styles.container}>

      <ImageBackground source={Img} blurRadius={6} resizeMode="cover" style={styles.backImg}>

        <Arrow />

        <Image source={Img} style={styles.img}  />

        <Text style={styles.title}>

          {DATA.title}

        </Text>

        <Text style={styles.overview}>

          {DATA.overview}

        </Text>

      </ImageBackground>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  backImg: {
    flex: 1,
    justifyContent: "center"
  },

  container: {
    flex: 1, 
    backgroundColor: '#1f1f1f', 
    justifyContent: 'center'
  },
  img: {
    width: 400, 
    height: 400, 
    resizeMode: 'contain'
  },
  title: {
    textAlign: 'center', 
    color: '#fff', 
    fontSize: 28, 
    fontWeight: 'bold',
    margin: 12
  },
  overview: {
    color: '#fff', 
    fontSize: 20,
    margin: 12
  }
})