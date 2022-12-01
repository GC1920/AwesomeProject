import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button, ImageBackground, ScrollView, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Entypo } from '@expo/vector-icons';

import { useRoute } from '@react-navigation/native';
import { Details } from '../database/api.iden';
import { PostGeneratedToken } from '../database/api.request';
import { Arrow } from './utils/highlights.header'

import { API_URL, API_REQ, API_KEY, API_IMG } from '@env';

function MarkAsFavorite() {

  const SESSION = PostGeneratedToken()

  const [DATA, setData] = useState(null)

  useEffect(() => {
    fetch(`${API_REQ}account/${SESSION}/favorite/movies?api_key=${API_KEY}`)
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error));
  })

  return DATA;
}

export function ScreenC() {

  const route = useRoute();

  const navigation = useNavigation()

  const DATA = Details({ID: route.params.ID});

  const Img = {uri: `${API_IMG + DATA.poster_path}`}

  console.log(DATA)

  return (

    <>
      <ScrollView>
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

          <SafeAreaView style={styles.fixToText}>

            <TouchableOpacity style={styles.leftButton}>
            <Entypo name="controller-play" size={20} color="black" />
              <Text>Assista</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { 
                MarkAsFavorite
              }} style={styles.rightButtom}>

              <Entypo name="star" size={14} color="white" />
              <Text style={styles.label}>Minha Lista</Text>

            </TouchableOpacity>

          </SafeAreaView>

        </View>

      </ScrollView>
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
    backgroundColor: '#000', 
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
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 80,
    marginTop: 12,
    marginBottom: 12
  },
  leftButton: {
    backgroundColor: '#fff',
    maxWidth: "48%",
    fontWeight: 'bold',
    textTransform: 'uppercase',
    paddingHorizontal: 12,
    borderRadius: 4,
    paddingVertical: 6,
    flexDirection: 'row',
  },
  rightButtom: {
    fontSize: 32,
    maxWidth: "48%",
    textTransform: 'uppercase',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 6,
    borderColor: '#fff',
    borderWidth: 1,
    flexDirection: 'row',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#fff',
  }
})