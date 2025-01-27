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
import { useNavigation, NavigationProp } from "@react-navigation/native";
import Header from '@/components/header';
import { temas } from '@/global/temas';
import { LinearGradient } from 'expo-linear-gradient';
import * as Progress from 'react-native-progress';
const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.6; // Largura do item principal
const ITEM_SPACING = (width - ITEM_WIDTH) / 20; // Espaçamento entre os itens

import headerImage from '../../assets/images/header.jpg';
import notification from '../../assets/images/Notification.png';
import banner from '../../assets/images/BG.png';
import fire from '../../assets/images/fire.png';
import model from '../../assets/images/model.png';
import couple from '../../assets/images/couple.jpg';
import cycle from '../../assets/images/cycle.png';
import yoga from '../../assets/images/yoga.png';
import walk from '../../assets/images/walk.png';
import next from '../../assets/images/next.png';
import play from '../../assets/images/play.png';
import star from '../../assets/images/Star.png';
import book from '../../assets/images/Book.png';
import home from '../../assets/images/Home.png';
import heart from '../../assets/images/H.png';
import calendar from '../../assets/images/Calender.png';
import profile from '../../assets/images/User.png';
import plus from '../../assets/images/Plus.png';

const Banner = () => (
    <>
        <View style={styles.bannertotal}>

            <ImageBackground style={styles.banner} source={banner}>
                <View style={styles.bannerContainer}>
                    <View style={styles.rowLabel}>
                        <View style={styles.fireContainer}>
                            <Image
                                source={fire}
                                resizeMode="contain"
                                style={styles.fireImage}
                            />
                        </View>
                        <Text style={styles.offer}>oferta limitada</Text>
                    </View>
                    <OfferText>30% de Desconto</OfferText>
                    <OfferText>Vendas Relâmpago</OfferText>
                </View>
            </ImageBackground>
        </View>
        <Image source={model} style={styles.model} resizeMode="contain" />

    </>
);

const OfferText = ({ children }: { children: React.ReactNode }) => (
    <Text style={styles.offerText}>{children}</Text>
);

const styles = StyleSheet.create({
    container: { flex: 1 },
    bannertotal: { flex: 1, width: "90%", justifyContent: 'center', alignItems: 'center', alignSelf: 'center' },
    header: {
        paddingHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: { paddingHorizontal: 10, flex: 1, justifyContent: 'center' },
    image: { height: '100%', width: '100%' },
    fireImage: { height: 40, width: 40, alignSelf: 'center', margin: 1 },
    banner: {
        marginTop: 50,
        padding: 30,
        resizeMode: 'contain',
        borderRadius: 20,
        overflow: 'hidden',
        flexDirection: 'row',
        backgroundColor: temas.cores.bgCard,
        width: '100%', // Adicione esta linha
    },
    bannerContainer: { flex: 1 },
    model: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        zIndex: 10,
        height: '50%',
        width: '50%',
        transform: [{ rotateY: '180deg' }],
    },
    imageContainer: {
        height: 50,
        width: 50,
        borderRadius: 25,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    offer: { color: temas.cores.textoPrimario, fontFamily: 'Poppins-Regular', fontSize: 12 },
    offerText: { color: temas.cores.textoSecundario, fontSize: 16, fontFamily: 'Poppins-Regular' },

    rowLabel: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    fireContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});


export default Banner;