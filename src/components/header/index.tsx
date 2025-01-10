import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { temas } from '../../global/temas';
type HeaderProps = {
  nome: string;
  imagem: string;
};

const Header = ({ nome, imagem }: HeaderProps) => {
  return (
    <LinearGradient
      colors={[temas.cores.primaria, temas.cores.secundaria]}
      style={styles.headerContainer}
    >
      <View style={styles.profileContainer}>
        <Image source={{ uri: imagem }} style={styles.profileImage} />
        <Text style={styles.profileName}>Olá, {nome}!</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 150,
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Para sombra no Android
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: '#fff',
    marginRight: 15,
  },
  profileName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;
