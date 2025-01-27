import React, { useRef, useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useNavigation, NavigationProp } from "@react-navigation/native";
import Header from '@/components/header';
import { temas } from '@/global/temas';
import Banner from '@/components/Banner';
import HighlightedFlatList from '@/components/HighlightedFlatList';
import VideoPlay from '@/components/VideoPlay';

const Home = () => {
  const navigation = useNavigation<NavigationProp<any>>();


  return (
    <>
      <ScrollView>

        <SafeAreaView style={appStyles.container}>
          <View style={appStyles.screen}>
            <Header nome="Rodrigo Gonçalves" imagem="https://via.placeholder.com/150" />
            <Banner />
          </View>
          <View style={{ marginHorizontal: '3%' }}>
            <Text style={appStyles.label}>Suas Atividades</Text>
            {/* Substituímos a View com Cards pela FlatList personalizada */}
            <View style={{ height: 250, marginVertical: 10 }}>
              <HighlightedFlatList />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Text style={appStyles.label}>Vídeos Fitness</Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  opacity: 0.5,
                  fontSize: 12,
                  color: temas.cores.textoSecundario,
                }}>
                Ver Todos
              </Text>
            </View>
            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
              <VideoPlay />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
      {/* <BottomTab /> */}
    </>
  );
};

const appStyles = StyleSheet.create({
  container: {
    // marginTop: 35,
    flex: 1,
    backgroundColor: temas.cores.bgScreen,
    minHeight: '100%',
  },
  screen: {
    marginBottom: 10,
  },
  label: { fontFamily: 'Poppins-Medium', fontSize: 20, marginVertical: 10, color: temas.cores.textoPrimario },

});

export default Home;


