import React from 'react';
import {
    Image,
    View,
    Text,
    TouchableWithoutFeedback,
    Animated,
    Dimensions,
} from 'react-native';
import { temas } from '@/global/temas';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/core';
const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.6; // Largura do item principal
const ITEM_SPACING = (width - ITEM_WIDTH) / 20; // Espaçamento entre os ite
interface CardData {
    id: string;
    name: string;
    status: number;
    lightColor: string;
    color: string;
    darkColor: string;
}

const Card = ({ data, scale }: { data: CardData; scale: Animated.AnimatedInterpolation<number> }) => {
    const isAddCard = data.name === 'Adicionar'; // Verifica se o card é de adição
    const navigation = useNavigation<NavigationProp<any>>(); // Hook para navegação

    const handleAdcCard = () => {
        console.log('Adicionando Card');
        navigation.navigate('AddActivity');
    };

    return (
        <Animated.View
            style={{
                transform: [{ scale }],
                height: 180,
                width: ITEM_WIDTH,
                padding: 10,
                alignSelf: 'center',
                backgroundColor: isAddCard ? '#D3D3D3' : data.color, // Se for o card de adição, usa a cor cinza
                justifyContent: 'center', // Centra o conteúdo no card
                marginHorizontal: 2,
                borderRadius: 10,
                shadowColor: 'lightgrey',
                shadowOffset: { width: -5, height: 5 },
                shadowOpacity: 0.5,
                shadowRadius: 2,
            }}
        >
            {isAddCard ? (
                // Adiciona a funcionalidade de toque no card de adição
                <TouchableWithoutFeedback onPress={handleAdcCard}>
                    <View>
                        <Image source={require('../../assets/images/Plus.png')} style={{ height: 40, width: 40, alignSelf: 'center' }} />
                    </View>
                </TouchableWithoutFeedback>
            ) : (
                <>
                    {/* Exemplo de ícone fixo, você pode substituir por um ícone dinâmico se necessário */}
                    <Image source={require('../../assets/images/cycle.png')} style={{ height: 25, width: 25 }} />
                    <View style={{ alignSelf: 'center', margin: 5 }}>
                        <Progress.Circle
                            size={50}
                            progress={data.status / 100} // Usa o status dinâmico da API
                            showsText
                            unfilledColor="#ededed"
                            borderColor="#ededed"
                            color={temas.cores.primaria}
                            direction="counter-clockwise"
                            fill="white"
                            strokeCap="round"
                            thickness={5}
                            textStyle={{
                                fontSize: 16,
                                fontFamily: 'Poppins-Bold',
                                fontWeight: 'bold',
                                color: temas.cores.primaria,
                            }}
                        />
                    </View>
                    <View>
                        <Text style={{ fontSize: 10, fontFamily: 'Poppins-Light', color: temas.cores.quasePreto }}>{'Dia     1'}</Text>
                        <Text style={{ fontSize: 10, fontFamily: 'Poppins-Light', color: temas.cores.quasePreto }}>{'Tempo   20 min'}</Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Text style={{ fontFamily: 'Poppins-Regular', color: temas.cores.quasePreto }}>{data.name}</Text> {/* Nome da atividade dinâmico */}
                        <View
                            style={{
                                backgroundColor: data.lightColor, // Cor clara dinâmica
                                padding: 2,
                                borderRadius: 10,
                            }}
                        >
                            <Image
                                source={require('../../assets/images/next.png')}
                                style={{
                                    height: 12,
                                    width: 12,
                                    resizeMode: 'contain',
                                }}
                            />
                        </View>
                    </View>
                </>
            )}
        </Animated.View>
    );
};

export default Card;