import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginView = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const realizarLogin = () => {
    console.log('Email:', email);
    console.log('Senha:', senha);
  };

  const navegarParaCadastro = () => {
    navigation.navigate('TelaCadastro'); 
  };

  return (
    <View style={styles.container}>
      <Icon name="account-circle" size={100} color="black" style={styles.icone} />
      <Text style={styles.titulo}>Entre ou Cadastre-se</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.entrada}
      />
      <TextInput
        label="Senha"
        value={senha}
        onChangeText={(text) => setSenha(text)}
        secureTextEntry
        style={styles.entrada}
      />
      <Button mode="contained" onPress={realizarLogin} style={styles.botao}>
        <Text style={styles.tituloBotao}>Login</Text>
      </Button>
      <Button mode="contained" onPress={navegarParaCadastro} style={styles.botao2}>
        <Text style={styles.tituloBotao2}>Cadastrar</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black',
  },
  entrada: {
    width: '100%',
    marginBottom: 16,
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
  botao: {
    width: '100%',
    marginTop: 16,
    backgroundColor: 'black',
  },
  botao2: {
    width: '100%',
    marginTop: 16,
    backgroundColor: '#d3d3d3',
  },
  icone: {
    marginBottom: 16,
  },
  tituloBotao: {
    color: 'white',
  },
  tituloBotao2: {
    color: 'black',
  },
});

export default LoginView;
