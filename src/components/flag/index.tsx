import React from "react";
import { Text, View, Image, TouchableOpacity, ActivityIndicator, TouchableHighlightProps } from "react-native";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import { temas } from "../../global/temas";
import { style } from "./styles";

type Props = {
    caption: string;
    color: string;
}

export function Flag({ ...rest }: Props) {
    return (
        <TouchableOpacity style={[style.container, { backgroundColor: rest?.color }]}>
            <Text style={{
                color: "white",
            }}>{rest.caption}</Text>
        </TouchableOpacity>

    )
}

