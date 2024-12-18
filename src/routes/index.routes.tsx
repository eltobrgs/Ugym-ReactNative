import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/login";
import BottonRoutes from "./bottom.routes";
import Cadastro from "../pages/cadastro";
export default function Routes() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: "#F5F5F5"
                }
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




        </Stack.Navigator>
    );
}