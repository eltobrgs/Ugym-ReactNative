// import React, { createContext, useContext, useEffect } from "react";
// import { Alert, Dimensions, Text, View, TouchableOpacity, StyleSheet } from "react-native";
// import { Modalize } from "react-native-modalize";
// import {AntDesign, MaterialIcons} from "@expo/vector-icons";
// import { Input } from "../components/Input";

// export const authContextList = createContext({});


// export const AuthProvider_list = (props: any):any => {
//     const modalizeRef = React.useRef<Modalize>(null);

//     const onOpen = () => {
//         modalizeRef.current?.open();
//     };

//     // useEffect(() => {
//     //     onOpen();
//     // }, []);

//     const _container = () => {
//         return (
//             <View style={style.container}>
//                 <View style={style.header}>
//                     <TouchableOpacity>
//                         <MaterialIcons name="close" style={{fontSize: 30}}/>
//                     </TouchableOpacity>
//                     <Text style={style.title}>Criar Tarefa</Text>
//                     <TouchableOpacity>
//                         <AntDesign name="check" style={{fontSize: 30}}/>
//                     </TouchableOpacity>
//                 </View>
//                 <View style={style.content}>
//                     <Input
//                     title="Título:"
//                     labelStyle={{fontSize: 12}}

//                     />
//                     <Input
//                     title="Descrição:"
//                     labelStyle={{fontSize: 12}}
//                     height={100}
//                     multiline={true}
//                     numberOfLines={6}

//                     />

//                     <View style={{width:'40%'}}>
//                         <Input
//                         title="Tempo Limite:"
//                         placeholder="Horas"
//                         labelStyle={{fontSize: 12}}
//                         keyboardType="numeric"
//                         />
//                     </View>
                
//                     <View style={style.containerFlag}>
//                         <Text style={style.label}>Flags:</Text>
//                         <View style={{}}></View>
//                     </View>
//                 </View>
//             </View>
//         )
//       };
      

//     return (
//         <authContextList.Provider value={{onOpen}}>
//             {props.children}
//             <Modalize 
//             ref={modalizeRef}
//             childrenStyle={{height: Dimensions.get('window').height / 1.5}}
//             adjustToContentHeight={true}
//             >
//                 {_container()}
//             </Modalize>
//         </authContextList.Provider>
//     );
// };

// export const useAuth = () => useContext(authContextList);


// export const style = StyleSheet.create({
//     container:{
//         width: '100%',
//     },

//     header:{
//         width: '100%',
//         height: 40,
//         paddingHorizontal: 40,
//         flexDirection: 'row',
//         marginTop: 20,
//         justifyContent: 'space-between',
//         alignItems: 'center',
//     },

//     title:{
//         fontSize: 20,
//         fontWeight: 'bold',

//     },
//     content:{
//         width: '100%',
//         paddingHorizontal: 40,
//         marginTop: 20,
//     },
//     containerFlag:{
//         width: '100%',
//         padding: 20,
//     },
//     label:{

//     }

// });

import React, { createContext, useContext, useRef, useEffect } from "react";
import { Dimensions, Text, View, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Modalize } from "react-native-modalize";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

export const authContextList = createContext({});

export const AuthProvider_list = (props: any): any => {
  const modalizeRef = useRef<Modalize>(null);

  // Abre automaticamente quando o componente é montado
  useEffect(() => {
    modalizeRef.current?.open();
  }, []);

  // Lista de exercícios
  const _exerciseList = () => {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Exercícios do Dia</Text>
          <TouchableOpacity>
            <AntDesign name="pluscircle" style={styles.addIcon} />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.content}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Exercício 1: Flexões</Text>
            <Text style={styles.cardDescription}>
              Complete 3 séries de 15 repetições. Lembre-se de manter a postura correta.
            </Text>
            <Text style={styles.cardTime}>Tempo Sugerido: 10 min</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Exercício 2: Abdominais</Text>
            <Text style={styles.cardDescription}>
              Faça 4 séries de 20 repetições, focando na respiração.
            </Text>
            <Text style={styles.cardTime}>Tempo Sugerido: 15 min</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Exercício 3: Corrida</Text>
            <Text style={styles.cardDescription}>
              Corra 2km na intensidade moderada, mantendo o ritmo constante.
            </Text>
            <Text style={styles.cardTime}>Tempo Sugerido: 20 min</Text>
          </View>
        </ScrollView>
      </View>
    );
  };

  return (
    <authContextList.Provider value={{}}>
      {props.children}
      <Modalize
        ref={modalizeRef}
        adjustToContentHeight={true}
        disableScrollIfPossible={false} // Permite scroll interno
        onOverlayPress={() => {}} // Remove ação de fechar ao clicar fora
        closeOnOverlayTap={false} // Remove ação de fechamento
        panGestureEnabled={false} // Remove a opção de deslizar para fechar
      >
        {_exerciseList()}
      </Modalize>
    </authContextList.Provider>
  );
};

export const useAuth = () => useContext(authContextList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  addIcon: {
    fontSize: 28,
    color: "#4CAF50",
  },
  content: {
    flex: 1,
  },
  card: {
    backgroundColor: "#FFF",
    padding: 20,
    marginBottom: 15,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
  },
  cardTime: {
    fontSize: 12,
    color: "#999",
    fontStyle: "italic",
  },
});
