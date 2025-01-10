import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../../components/header';
import ExerciseCard from '../../components/ExerciseCard';
import { temas } from '../../global/temas';

// Definindo o tipo para os dias da semana
type Day = 'segunda' | 'terça' | 'quarta' | 'quinta' | 'sexta' | 'sábado' | 'domingo';

// Dados dos exercícios por dia da semana
const dailyWorkouts: Record<Day, { id: string; titulo: string; detalhes: string; imagem: string; tipo: string; }[]> = {
    segunda: [
        { id: '1', titulo: 'Puxada Frontal', detalhes: '3 séries x 12 repetições', imagem: 'https://via.placeholder.com/150', tipo: 'Costas' },
        { id: '2', titulo: 'Remada Curvada', detalhes: '3 séries x 12 repetições', imagem: 'https://via.placeholder.com/150', tipo: 'Costas' },
    ],
    terça: [
        { id: '3', titulo: 'Rosca Direta', detalhes: '3 séries x 12 repetições', imagem: 'https://via.placeholder.com/150', tipo: 'Bíceps' },
        { id: '4', titulo: 'Rosca Martelo', detalhes: '3 séries x 12 repetições', imagem: 'https://via.placeholder.com/150', tipo: 'Bíceps' },
    ],
    quarta: [
        { id: '5', titulo: 'Tríceps Pulley', detalhes: '3 séries x 12 repetições', imagem: 'https://via.placeholder.com/150', tipo: 'Tríceps' },
        { id: '6', titulo: 'Tríceps Coice', detalhes: '3 séries x 12 repetições', imagem: 'https://via.placeholder.com/150', tipo: 'Tríceps' },
    ],
    quinta: [
        { id: '7', titulo: 'Desenvolvimento com Halteres', detalhes: '3 séries x 12 repetições', imagem: 'https://via.placeholder.com/150', tipo: 'Ombros' },
        { id: '8', titulo: 'Elevação Lateral', detalhes: '3 séries x 12 repetições', imagem: 'https://via.placeholder.com/150', tipo: 'Ombros' },
    ],
    sexta: [
        { id: '9', titulo: 'Agachamento Livre', detalhes: '3 séries x 12 repetições', imagem: 'https://via.placeholder.com/150', tipo: 'Pernas' },
        { id: '10', titulo: 'Leg Press', detalhes: '3 séries x 12 repetições', imagem: 'https://via.placeholder.com/150', tipo: 'Pernas' },
    ],
    sábado: [
        { id: '11', titulo: 'Corrida', detalhes: '30 minutos', imagem: 'https://via.placeholder.com/150', tipo: 'Cardio' },
        { id: '12', titulo: 'Bicicleta', detalhes: '30 minutos', imagem: 'https://via.placeholder.com/150', tipo: 'Cardio' },
    ],
    domingo: [
        { id: '13', titulo: 'Descanso', detalhes: '', imagem: 'https://via.placeholder.com/150', tipo: 'Descanso' },
    ],
};

const HomeScreen = () => {
    const [selectedDay, setSelectedDay] = useState<Day>('segunda'); // Estado para o dia selecionado

    return (
        <View style={styles.container}>
            <Header nome="Rodrigo Gonçalves" imagem="https://via.placeholder.com/150" />
            {/* Dias da semana */}
            <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsContainer}>
                    {Object.keys(dailyWorkouts).map((day) => (
                        <TouchableOpacity
                            key={day}
                            style={[styles.tab, selectedDay === day && styles.activeTab]}
                            onPress={() => setSelectedDay(day as Day)}
                        >
                            <Text style={[styles.tabText, selectedDay === day && styles.activeTabText]}>
                                {day.toUpperCase()}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <View style={{ marginTop: 20 }}>
                    {/* Exercícios */}
                    <Text style={styles.sectionTitle}>Exercícios de {selectedDay.toUpperCase()}</Text>
                    <FlatList
                        data={dailyWorkouts[selectedDay]}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <ExerciseCard tipo={item.tipo} titulo={item.titulo} detalhes={item.detalhes} imagem={item.imagem} />
                        )}
                        style={styles.exerciseList}
                        contentContainerStyle={{ paddingBottom: 20 }}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: temas.cores.bgScreen,
    },
    tabsContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        paddingHorizontal: 10,
    },
    tab: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        backgroundColor: temas.cores.bgCard,
        marginHorizontal: 5,
        height: 40,
    },
    activeTab: {
        backgroundColor: temas.cores.primaria,
    },
    tabText: {
        color: temas.cores.textoBranco,
        fontSize: 14,
        fontWeight: 'bold',
    },
    activeTabText: {
        color: temas.cores.textoBranco,
    },
    sectionTitle: {
        color: temas.cores.textoPrimario,
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
    },
    exerciseList: {
        paddingHorizontal: 10,
    },
});

export default HomeScreen;
