import React from "react";
import { Text, View, Image, TouchableOpacity, ActivityIndicator, TouchableHighlightProps } from "react-native";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import { temas } from "../../global/temas";
import { style } from "./styles";

type Props = { 
    color: string;
}

export function Ball({...rest}: Props) {
    return(
        <View style={[style.ball,{borderColor: rest.color ? rest.color : "gray"}]}>

        </View>

    )
}

