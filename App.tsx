import React from 'react';
import { SafeAreaView, StyleSheet, View, Vibration, TouchableOpacity, TextInput, Text, Alert } from 'react-native';
import Home from './src/views/home';

function App(): React.JSX.Element {
  const enviar = () => {
    try {
      Vibration.vibrate();
      Alert.alert('Presionado');
    }
    catch (error) {
      console.log(error);
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <Home />
      <View style={styles.form}>
        <TextInput style={styles.txt}
          placeholder='Correo electronico' />
        <TextInput style={styles.txt}
          placeholder='Contraseña' />
        <TouchableOpacity style={styles.btn}
          onPress={enviar}>
          <Text style={{ textAlign: 'center', color: '#FFF', fontWeight: 'bold' }}>Registrarme</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(7,26,93,255)',
  },
  form: {
    padding: 20,
    backgroundColor: '#F1F1F1',
    flex: 1,
    gap: 20,
  },
  txt: {
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    borderColor: '#FFF',
  },
  btn: {
    backgroundColor: '#000',
    padding: 20,
    borderRadius: 30
  }


});

export default App;
