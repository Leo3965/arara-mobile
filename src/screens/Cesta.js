import React from "react";
import {Dimensions, Image, StyleSheet, Text, View} from "react-native";
import topo from "../../assets/topo.png";
import logo from "../../assets/logo.png";

const dimension = Dimensions.get('screen');
export default function Cesta() {
    return (
        <>
            <Image style={styles.topo} source={topo}/>
            <Text style={styles.titulo}>Detalhe da cesta</Text>

            <View style={styles.cesta}>
                <Text style={styles.nome}>Cesta de verduras</Text>
                <View style={styles.fazenda}>
                    <Image style={styles.imagemFazenda} source={logo}/>
                    <Text style={styles.nomeFazenda}>Jenny Jack Farm</Text>
                </View>
                <Text style={styles.descricao}>
                    Uma cesta com produtos selecionados cuidadosamente
                    da fazendo direto para sua cozinha
                </Text>
                <Text style={styles.preco}>R$ 40,00</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    topo: {
        fontStyle: "Montserrat",
        width: "100%",
        height: (578 / 768 * dimension.width),
    },
    titulo: {
        position: "absolute",
        textAlign: "center",
        width: "100%",
        marginTop: "20%",
        fontSize: 16,
        lineHeight: 26,
        color: "#FFFFFF",
        fontWeight: "bold",
        padding: 16
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontFamily: "bold"
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12
    },
    imagemFazenda: {
        width: 32,
        height: 32
    },
    nomeFazenda: {
        marginLeft: 12,
        fontSize: 16,
        lineHeight: 26,
        fontFamily: "regular"
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
});