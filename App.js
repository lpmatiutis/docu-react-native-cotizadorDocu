import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, StatusBar, YellowBox} from 'react-native';
import Form from './src/components/Form';
import colors from './src/utils/colors';

YellowBox.ignoreWarnings(["Picker has been extract"])

export default function App(){
  return(
    <View>
    <StatusBar barStyle="light-content"></StatusBar>
    <SafeAreaView style={styles.safeArea}>
        <Text style={styles.titleApp}>Cotizador de Prestamos Docu</Text>
        <Form></Form>
    </SafeAreaView>
    <View>
        <Text>Resultado</Text>
    </View>

    <View>
      <Text>Footer</Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
  },
  titleApp: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 15
  }
});