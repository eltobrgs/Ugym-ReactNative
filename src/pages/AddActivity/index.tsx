import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Input } from '../../components/Input';
import { Button } from '../../components/button'; // Botão reutilizável
import { temas } from '../../global/temas';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { renderVariable } from "../../global/variables";
import AsyncStorage from '@react-native-async-storage/async-storage';

const colorOptions = [
    { label: 'Cor 1 - #f8e4d9 (Bege Claro)', value: '#f8e4d9' },
    { label: 'Cor 2 - #fcf1ea (Rosa Claro)', value: '#fcf1ea' },
    { label: 'Cor 3 - #fac5a4 (Laranja Claro)', value: '#fac5a4' },
    { label: 'Cor 4 - #c4e5e2 (Verde Água Claro)', value: '#c4e5e2' },
    { label: 'Cor 5 - #d4afc9 (Rosa Médio)', value: '#d4afc9' },
    { label: 'Cor 6 - #f9f9f9 (Branco)', value: '#f9f9f9' },
    { label: 'Cor 7 - #e0f7fa (Azul Claro)', value: '#e0f7fa' },
    { label: 'Cor 8 - #ffeb3b (Amarelo)', value: '#ffeb3b' },
    { label: 'Cor 9 - #ff5722 (Laranja)', value: '#ff5722' },
    { label: 'Cor 10 - #4caf50 (Verde)', value: '#4caf50' },
    { label: 'Cor 11 - #9c27b0 (Roxo)', value: '#9c27b0' },
    { label: 'Cor 12 - #3f51b5 (Azul)', value: '#3f51b5' },
];

const AddActivityScreen = () => {
    const navigation = useNavigation<NavigationProp<any>>();

    const [activityName, setActivityName] = useState('');
    const [status, setStatus] = useState('');
    const [lightColor, setLightColor] = useState(colorOptions[0].value);
    const [color, setColor] = useState(colorOptions[1].value);
    const [darkColor, setDarkColor] = useState(colorOptions[2].value);
    const [loading, setLoading] = useState(false);

    const saveActivity = async () => {
        setLoading(true); // Inicia o estado de carregamento
        try {
            const token = await AsyncStorage.getItem("userToken");  // Alterado para "userToken"
            if (!token) {
                throw new Error("Token de autenticação não encontrado.");
            }
    
            const response = await fetch(`${renderVariable}/atividades`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    activityName,
                    status: parseInt(status, 10),
                    lightColor,
                    color,
                    darkColor,
                }),
            });
    
            // Verifica se a resposta foi bem-sucedida (status 2xx)
            if (!response.ok) {
                const errorMessage = await response.text();  // Tenta obter o texto da resposta, caso não seja JSON
                throw new Error(`Erro ao salvar a atividade: ${response.status} - ${errorMessage}`);
            }
    
            // Caso a resposta seja bem-sucedida, tenta analisar o JSON
            const data = await response.json();
    
            console.log("Atividade salva com sucesso:", data.activity);
            alert("Atividade salva com sucesso!");
            navigation.navigate("Home"); // cheque os nomes das telas nos arquivos de navegação ( routes> bottom.routes.tsx, routes> index.routes.tsx)
        } catch (error) {
            console.error("Erro ao salvar a atividade:", error);
            Alert.alert("Erro", "Não foi possível salvar a atividade.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.boxTop}>
                <Text style={styles.title}>Adicionar Nova Atividade</Text>
            </View>

            <View style={styles.boxMid}>
                <Input
                    value={activityName}
                    onChangeText={setActivityName}
                    title="NOME DA ATIVIDADE"
                    placeholder="Ex: Ciclismo"
                />
                <Input
                    value={status}
                    onChangeText={setStatus}
                    title="STATUS"
                    placeholder="Ex: 85"
                    keyboardType="numeric"
                />
                <Text style={styles.inputLabel}>COR CLARA</Text>
                <View style={[styles.pickerContainer, { backgroundColor: lightColor }]}>
                    <Picker
                        selectedValue={lightColor}
                        onValueChange={(itemValue) => setLightColor(itemValue)}
                        style={styles.picker}
                    >
                        {colorOptions.map((color) => (
                            <Picker.Item label={color.label} value={color.value} key={color.value} />
                        ))}
                    </Picker>
                </View>

                <Text style={styles.inputLabel}>COR MÉDIA</Text>
                <View style={[styles.pickerContainer, { backgroundColor: color }]}>
                    <Picker
                        selectedValue={color}
                        onValueChange={(itemValue) => setColor(itemValue)}
                        style={styles.picker}
                    >
                        {colorOptions.map((color) => (
                            <Picker.Item label={color.label} value={color.value} key={color.value} />
                        ))}
                    </Picker>
                </View>

                <Text style={styles.inputLabel}>COR ESCURA</Text>
                <View style={[styles.pickerContainer, { backgroundColor: darkColor }]}>
                    <Picker
                        selectedValue={darkColor}
                        onValueChange={(itemValue) => setDarkColor(itemValue)}
                        style={styles.picker}
                    >
                        {colorOptions.map((color) => (
                            <Picker.Item label={color.label} value={color.value} key={color.value} />
                        ))}
                    </Picker>
                </View>
            </View>

            <View style={styles.boxBotton}>
                <Button
                    text="SALVAR ATIVIDADE"
                    loading={loading}
                    onPress={saveActivity}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: temas.cores.bgScreen,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    boxTop: {
        marginBottom: 20,
        alignItems: 'center',
    },
    boxMid: {
        width: '100%',
    },
    boxBotton: {
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: temas.cores.primaria,
    },
    inputLabel: {
        marginLeft: 5,
        marginTop: 20,
        fontSize: 16,
        fontWeight: 'bold',
        color: temas.cores.primaria,
        marginBottom: 5,
    },
    pickerContainer: {
        borderColor: temas.cores.primaria,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
    },
    picker: {
        height: 50,
        width: '100%',
    },
});

export default AddActivityScreen;
