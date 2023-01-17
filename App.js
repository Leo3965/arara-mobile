import React from "react";
import {SafeAreaView, StatusBar, View} from 'react-native';
import Cesta from "./src/screens/Cesta";
import {Montserrat_400Regular, Montserrat_700Bold, useFonts} from "@expo-google-fonts/montserrat";

export default function App() {
    const [fontCarregada] = useFonts({
        "regular": Montserrat_400Regular,
        "bold": Montserrat_700Bold
    });

    if (!fontCarregada) {
        return (<View/>)
    }

    return (
        <SafeAreaView>
            <StatusBar/>
            <Cesta/>
        </SafeAreaView>
    );
}
