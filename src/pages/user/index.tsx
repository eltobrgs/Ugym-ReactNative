import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { temas } from '../../global/temas';
import UserInfo from '../../components/UserInfo';
import { NavigationProp, useNavigation } from '@react-navigation/core';

const ProfileScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const userInfo = {
    nome: 'Rodrigo Gonçalves',
    email: 'rodrigo@email.com',
    telefone: '(11) 98765-4321',
    dataNascimento: '10/01/1995',
    genero: 'Masculino',
    objetivo: 'Ganhar massa muscular',
    experiencia: 'Intermediário',
    condiçaodesaude: 'Nenhuma',
  };

const editButton = () => {
    navigation.navigate('PreferencesScreen');
}

  return (
    <View style={styles.container}>
      {/* Header com a foto do perfil */}
      <LinearGradient
        colors={[temas.cores.primaria, temas.cores.secundaria]}
        style={styles.header}
      >
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.profileImage}
        />
        <Text style={styles.userName}>{userInfo.nome}</Text>
      </LinearGradient>

      {/* Detalhes do usuário */}
      <ScrollView contentContainerStyle={styles.detailsContainer}>
        <Text style={styles.sectionTitle}>Informações Pessoais</Text>
        <UserInfo label="Email" value={userInfo.email} />
        <UserInfo label="Telefone" value={userInfo.telefone} />
        <UserInfo label="Data de Nascimento" value={userInfo.dataNascimento} />
        <UserInfo label="Gênero" value={userInfo.genero} />

        <Text style={styles.sectionTitle}>Objetivos e Experiência</Text>
        <UserInfo label="Objetivo" value={userInfo.objetivo} />
        <UserInfo label="Condição de Saúde" value={userInfo.condiçaodesaude} />
        <UserInfo label="Experiência" value={userInfo.experiencia} />

        {/* Botão de edição */}
        <TouchableOpacity style={styles.editButton} onPress={editButton}>
          <Text style={styles.editButtonText}>Editar Perfil</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: temas.cores.bgScreen,
  },
  header: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
    marginBottom: 10,
  },
  userName: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  detailsContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: temas.cores.primaria,
    marginBottom: 10,
  },
  editButton: {
    marginTop: 30,
    backgroundColor: temas.cores.primaria,
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
