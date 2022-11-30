import React, { useState } from 'react';
import { View, Text, Image, FlatList, ScrollView, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Popular } from '../../database/api.popular';

import { API_IMG } from '@env';

const Item = ({ poster, onPress }) => (

  <TouchableOpacity onPress={onPress} style={styles.item}>

        <Image 
          source={{uri: `${API_IMG + poster}`}}
          style={styles.itemPhoto}
          resizeMode="cover"
        />

    </TouchableOpacity>
  
)

export function PopularMovie() {

    const DATA = Popular()

    const [selectedId, setSelectedId] = useState(null);

    const navigation = useNavigation()

    const renderItem = ({ item }) => (

      <Item 
        poster={item.poster_path}
        onPress={() => {
          setSelectedId(item.id); 
          navigation.navigate('ScreenC', { ID: item.id });
        }}
      />

  );

  return (
    <>
      
      <ScrollView style={styles.container}>

        <View style={styles.titleContainer}>

          <Text style={styles.title}>Popular</Text>

        </View>

        <SafeAreaView style={styles.imageBox}>

          <FlatList 
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
            horizontal
          />

        </SafeAreaView>

      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#1f1f1f'
  },
  titleContainer: {
      margin: 10,
      marginTop: 40,
      marginBottom: 10,
  },
  title: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold'
  },
  item: {
      margin: 10,
  },
  itemPhoto: {
      width: 200,
      height: 300
  },
  imageBox: {
      marginTop: 10,
      marginBottom: 5
  }
});