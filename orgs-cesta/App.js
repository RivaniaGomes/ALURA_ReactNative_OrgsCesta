import React from "react";
import { StatusBar, SafeAreaView, View } from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";

import Cesta from "./src/telas/Cesta";
import mock from "./src/mocks/cesta";
import Home from "./src/telas/Home";

export default function App() {
  const [fonteCarregada] = useFonts({
    MontserratRehular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  if (!fonteCarregada) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Home />
      {/* <Cesta topo={mock}/> */}
      {/* ou */}
      {/* <Cesta topo={mock.topo} detalhes={mock.detalhes}/> */}
      {/* <Cesta {...mock} /> */}
    </SafeAreaView>
  );
}
