import React, { useRef, useState, useEffect } from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions, 
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import { temas } from '@/global/temas';
import { LinearGradient } from 'expo-linear-gradient';
import couple from '../../assets/images/couple.jpg';
import cycle from '../../assets/images/cycle.png';
import yoga from '../../assets/images/yoga.png';
import walk from '../../assets/images/walk.png';
import play from '../../assets/images/play.png';
import star from '../../assets/images/Star.png';
import book from '../../assets/images/Book.png';


const VideoPlay = () => (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <View
          style={{
            borderRadius: 15,
            marginHorizontal: 12,
            shadowOffset: { width: -5, height: 3 },
            shadowColor: 'grey',
            shadowOpacity: 0.5,
            shadowRadius: 3,
            backgroundColor: temas.cores.bgCard,
          }}>
          <View style={{ borderRadius: 10, overflow: 'hidden' }}>
            <ImageBackground
              source={couple}
              style={{
                height: 150,
                width: 300,
              }}>
              <LinearGradient
                locations={[0, 1.0]}
                colors={['rgba(0,0,0,0.00)', 'rgba(0,0,0,0.60)']}
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                }}></LinearGradient>
            </ImageBackground>
            <Text
              style={{
                position: 'absolute',
                bottom: 5,
                left: 10,
                fontFamily: 'Poppins-Regular',
                color: temas.cores.textoPrimario,
              }}>
              Transformação
            </Text>
            <View
              style={{
                position: 'absolute',
                backgroundColor: temas.cores.textoBranco,
                padding: 5,
                right: 10,
                top: 10,
                borderRadius: 5,
              }}>
              <Image source={star} style={{ height: 10, width: 10 }} />
            </View>
          </View>
          <View
            style={{
              backgroundColor: temas.cores.bgCard,
              padding: 10,
              borderRadius: 15,
            }}>
            <View
              style={{
                position: 'absolute',
                backgroundColor: temas.cores.primaria,
                padding: 10,
                right: 25,
                top: -15,
                borderRadius: 15,
                zIndex: 3,
              }}>
              <Image source={play} style={{ height: 10, width: 10 }} />
            </View>
            <Text style={{ fontFamily: 'Poppins-Regular', color: temas.cores.textoPrimario }}>
              Treino de Bulking- 2 Horas
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, color: temas.cores.textoSecundario }}>
                <Image source={book} style={{ height: 15, width: 15 }} />
                {'   Iniciante'}
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 12,
                  color: temas.cores.primaria,
                }}>
                45 Min
              </Text>
            </View>
          </View>
        </View>
      )}
      horizontal
    />
  );
  
  const data = [
    {
      name: 'Ciclismo',
      status: 85,
      image: cycle,
      lightColor: '#f8e4d9',
      color: '#fcf1ea',
      darkColor: '#fac5a4',
    },
    {
      name: 'Caminhada',
      status: 25,
      image: walk,
      lightColor: '#d7f0f7',
      color: '#e8f7fc',
      darkColor: '#aceafc',
    },
    {
      name: 'Yoga',
      status: 85,
      image: yoga,
      lightColor: '#dad5fe',
      color: '#e7e3ff',
      darkColor: '#8860a2',
    },
    //substituir para uma data dinamica, puxar os dados do banco nome da tabela
  ];
  
  
export default VideoPlay;