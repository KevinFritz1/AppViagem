import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CadastroView = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [numeroCelular, setNumeroCelular] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const handleCadastro = () => {
    if (senha !== confirmarSenha) {
      setMensagemErro('As senhas não coincidem');
      Alert.alert('Erro', 'As senhas não coincidem');
      return;
    }

    setMensagemErro('');

    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Senha:', senha);
    console.log('Confirmar Senha:', confirmarSenha);
    console.log('Número do Celular:', numeroCelular);
    console.log('Data de Nascimento:', dataNascimento);

  };

  return (
    <View style={styles.container}>
      <Icon name="account-plus" size={100} color="black" style={styles.icone} />
      <Text style={styles.titulo}>Cadastre-se</Text>
      <TextInput
        label="Nome Completo"
        value={nome}
        onChangeText={(text) => setNome(text)}
        style={styles.entrada}
      />
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
      <TextInput
        label="Confirmar Senha"
        value={confirmarSenha}
        onChangeText={(text) => setConfirmarSenha(text)}
        secureTextEntry
        style={styles.entrada}
      />
      <TextInput
        label="Número do Celular"
        value={numeroCelular}
        onChangeText={(text) => setNumeroCelular(text)}
        style={styles.entrada}
        keyboardType="numeric"
      />
      <TextInput
        label="Data de Nascimento"
        value={dataNascimento}
        onChangeText={(text) => setDataNascimento(text)}
        style={styles.entrada}
        keyboardType="numeric"
        placeholder="DD/MM/AAAA"
      />
      <Text style={styles.mensagemErro}>{mensagemErro}</Text>
      <Button mode="contained" onPress={handleCadastro} style={styles.botao}>
        <Text style={styles.tituloBotao}>Cadastrar</Text>
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
  icone: {
    marginBottom: 16,
  },
  tituloBotao: {
    color: 'white',
  },
  mensagemErro: {
    color: 'red',
    marginBottom: 16,
  },
});

export default CadastroView;
