import React from "react";
import { View, StyleSheet, Image } from 'react-native';

import logo from '../../../../assets/logo.png';
import Texto from "../../../components/Texto";


export default function Detalhes() {
  return (
    <>
      <Texto style={ estilos.nome }>Cesta de Verduras</Texto>
      <View style={ estilos.fazenda }>
        <Image source={ logo } style={ estilos.imagemFazenda } />
        <Texto style={ estilos.nomeFazenda }>Jenny Jack Farm</Texto>
      </View>
      <Texto style={ estilos.descricao }>Uma cesa com produtos selecionados cuidadosamente da fazenda direto para sua cozinha.</Texto>
      <Texto style={ estilos.preco }>R$ 40,00</Texto>
    </>
  )
}
const estilos = StyleSheet.create({
  nome: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
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
},
descricao: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
},
preco: {
    color: "#2A9f85",
    fontWeight: "bold",
    lineHeight: 26,
    lineHeight: 42,
    marginTop: 8,
}
})