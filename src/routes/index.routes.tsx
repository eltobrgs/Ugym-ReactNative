import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/login";
import BottonRoutes from "./bottom.routes";
import Cadastro from "../pages/cadastro";
import PreferencesScreen from "../pages/PreferencesScreen";
import { temas } from "../global/temas";

export default function Routes() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName="BottonRoutes"
            screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: temas.cores.darkgray, // darkgray
            },
            }}

        >
            <Stack.Screen
            name="BottonRoutes"
            component={BottonRoutes} />

            <Stack.Screen
            name="Login"
            component={Login} />


            <Stack.Screen
            name="Cadastro"
            component={Cadastro} />

            <Stack.Screen
            name="PreferencesScreen"
            component={PreferencesScreen} />


        </Stack.Navigator>
    );
}