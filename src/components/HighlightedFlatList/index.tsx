import React, { useRef, useState, useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Animated,
    Alert,
    Dimensions,
} from 'react-native';
import { temas } from '@/global/temas';
import Card from '@/components/Card';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { renderVariable } from "../../global/variables";

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.6; // Largura do item principal
const ITEM_SPACING = (width - ITEM_WIDTH) / 20; // Espaçamento entre os itens

const HighlightedFlatList = () => {
    const scrollX = useRef(new Animated.Value(0)).current;
    interface Activity {
        id: string;
        name: string;
        status: number;
        lightColor: string;
        color: string;
        darkColor: string;
    }

    const [activities, setActivities] = useState<Activity[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchActivities = async () => {
            try {
                const token = await AsyncStorage.getItem('userToken');
                if (!token) {
                    throw new Error("Token de autenticação não encontrado.");
                }

                const response = await fetch(`${renderVariable}/atividades`, {
                    method: 'GET',
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error(`Erro ao buscar atividades: ${response.status}`);
                }

                const data = await response.json();
                setActivities(data.activities); // Atualiza o estado com as atividades
            } catch (error) {
                console.error("Erro ao buscar atividades:", error);
                Alert.alert("Erro", "Não foi possível carregar as atividades.");
            } finally {
                setLoading(false);
            }
        };

        fetchActivities();
    }, []);

    // Mapeia as atividades para o formato esperado pelo Card
    const extendedData = activities.map(activity => ({
        id: activity.id,
        name: activity.name,
        status: activity.status,
        lightColor: activity.lightColor,
        color: activity.color,
        darkColor: activity.darkColor,
    }));

    // Adiciona o card de "Adicionar" ao final da lista
    extendedData.push({ 
        id: 'add', 
        name: 'Adicionar', 
        status: 0, 
        lightColor: '#D3D3D3', 
        color: '#E0E0E0', 
        darkColor: '#A9A9A9' 
    });

    return (
        <View style={{ flex: 1, backgroundColor: temas.cores.bgScreen, justifyContent: 'center' }}>
            {loading ? (
                <Text>Carregando...</Text>
            ) : (
                <Animated.FlatList
                    data={extendedData}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: ITEM_SPACING }}
                    snapToInterval={ITEM_WIDTH}
                    decelerationRate="fast"
                    bounces={false}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: true }
                    )}
                    scrollEventThrottle={16}
                    renderItem={({ item, index }) => {
                        const inputRange = [
                            (index - 1) * ITEM_WIDTH,
                            index * ITEM_WIDTH,
                            (index + 1) * ITEM_WIDTH,
                        ];

                        const scale = scrollX.interpolate({
                            inputRange,
                            outputRange: [0.9, 1, 0.9],
                            extrapolate: 'clamp',
                        });

                        return (
                            <Card data={item} scale={scale} />
                        );
                    }}
                />
            )}
        </View>
    );
};

export default HighlightedFlatList;