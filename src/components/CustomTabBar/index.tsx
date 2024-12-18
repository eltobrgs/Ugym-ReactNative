import React, { useContext } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { style } from "./styles";
import { AntDesign, Entypo, MaterialIcons, FontAwesome, FontAwesome6, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { temas } from "../../global/temas";
import { authContextList } from "../../context/authContext_list";
interface Props {
    state: any;
    navigation: any;
}

const CustomTabBar: React.FC<Props> = ({ state, navigation }) => {

    const { onOpen } = useContext<any>(authContextList);

    const goTo = (screenName: string) => {
        navigation.navigate(screenName);
    }


    return (
        <View style={style.tabArea}>

            <TouchableOpacity style={style.tabItem} onPress={() => goTo("List")}>
                <AntDesign
                    name="bars"
                    style={{ opacity: state.index === 0 ? 1 : 0.5, color: temas.cores.primaria, fontSize: 32 }}
                />

            </TouchableOpacity>


            <TouchableOpacity style={style.tabItemButton} onPress={() => onOpen && onOpen()}>
                <View style={{ width: "100%", left: 10, top: 4 }}>
                    <Entypo name="plus" style={{ fontSize: 35, color: "#fff" }} />
                </View>
                <View style={{ width: "100%", flexDirection: "row-reverse", right: 10, bottom: 10 }}>
                    <MaterialIcons name="edit" style={{ fontSize: 30, color: "#fff" }} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={style.tabItem} onPress={() => goTo("User")}>
                <FontAwesome
                    name="user"
                    style={{ opacity: state.index === 2 ? 1 : 0.2, color: temas.cores.primaria, fontSize: 32 }}
                />

            </TouchableOpacity>
        </View>
    );
};

export default CustomTabBar;