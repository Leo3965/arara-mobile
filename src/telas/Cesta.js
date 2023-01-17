import React from 'react';
import { StyleSheet, Image, Dimensions, Text, View } from 'react-native';

//import topo from '../../assets/topo.png';
import topo from '../../assets/arara_topo4.png';
import logo from "../../assets/arara_logo.jfif";

const width = Dimensions.get('screen').width;

export default function Cesta() {
  return <>
    <View style={estilos.container}>
      <Image source={topo} style={estilos.topo} />
    </View>
    <Text style={estilos.titulo}>Detalhe da cesta</Text>

    <View style={estilos.cesta}>
      <Text style={estilos.nome}>Cesta de Araras</Text>
      <View style={estilos.fazenda}>
        <Image source={logo} style={estilos.imagemFazenda} />
        <Text style={estilos.nomeFazenda}>Squad 2</Text>
      </View>
      <Text style={estilos.descricao}>Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua Squad</Text>
      <Text style={estilos.preco}>R$ 40,00</Text>
    </View>
  </>
}

const estilos = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  topo: {
    width: "100%",
    height: 300,
    width: 300
  },
  titulo: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 30,
    lineHeight: 30,
    color: "green",
    fontWeight: "bold",
    padding: 16,
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  nome: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontFamily: "MontserratBold",
  },
  fazenda: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  imagemFazenda: {
    width: 32,
    height: 32,
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    fontFamily: "MontserratRegular",
  },
  descricao: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
});
