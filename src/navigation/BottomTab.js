import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "../screen/HomeScreen";
import InsertarPacientes from "../screen/InsertarPacientes";
import InsertarRegistros from "../screen/InsertarRegistros";

const Tab= createBottomTabNavigator();

export const BottomTab = () =>{

return(
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
        <Tab.Screen name="Registros" component={InsertarRegistros}></Tab.Screen>
        <Tab.Screen name="Pacientes" component={InsertarPacientes}></Tab.Screen>

    </Tab.Navigator>
)

}