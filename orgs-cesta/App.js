import React from 'react';
import { StatusBar, SafeAreaView, StyleSheet, View } from 'react-native';

import Cesta from './src/telas/Cesta.jsx';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar/>
      <Cesta />
    </SafeAreaView>
  );
}

