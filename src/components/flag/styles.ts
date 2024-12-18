import { StyleSheet, Dimensions } from "react-native";
import { temas } from "../../global/temas";


export const style = StyleSheet.create({
    container: {
        width: 90,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: temas.cores.primaria,
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    caption: {
        color: '#FFF'
    }
})