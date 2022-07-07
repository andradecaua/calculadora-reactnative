import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Teclado from './Componentes/Teclado'

export default function App() {
  return (
    <View style={styleMain.container}>
      <StatusBar/>
      <Teclado/>
    </View>
  );
}


const styleMain = StyleSheet.create({
  container: {
    display: 'flex',
    width: "100%",
    height: "100%",
    alignContent: "center",
    justifyContent: "flex-end",
    alignItems: "center",
  }
})