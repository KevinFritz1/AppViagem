import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Viagem = () => {
  const navigation = useNavigation();

  const handleSaibaMais = () => {
    // Você pode passar informações específicas da viagem como parâmetros
    // Exemplo: navigation.navigate('TelaViagemDetalhe', { viagemId: 1 });
    navigation.navigate('TelaViagemDetalhe');
  };

  return (
    <View style={estilos.container}>
      <View style={estilos.viagem}>
        <Image source={require('./img/praia.jpg')} style={estilos.imagem} />
        <View style={estilos.containerTexto}>
          <Text style={estilos.local}>Praia Paradisíaca</Text>
          <Text>Data de entrada: 01/01/2023</Text>
          <Text>Data de saída: 10/01/2023</Text>
          <Text>Valor: R$ 2000,00</Text>
          <TouchableOpacity onPress={handleSaibaMais}>
            <Text style={estilos.saibaMais}>Saiba Mais</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={estilos.viagem}>
        <Image
          source={require('./img/montanhas.jpg')}
          style={estilos.imagem}
        />
        <View style={estilos.containerTexto}>
          <Text style={estilos.local}>Montanhas Serenas</Text>
          <Text>Data de entrada: 15/02/2023</Text>
          <Text>Data de saída: 25/02/2023</Text>
          <Text>Valor: R$ 1500,00</Text>
          <TouchableOpacity onPress={handleSaibaMais}>
            <Text style={estilos.saibaMais}>Saiba Mais</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={estilos.viagem}>
        <Image
          source={require('./img/cidade.jpg')}
          style={estilos.imagem}
        />
        <View style={estilos.containerTexto}>
          <Text style={estilos.local}>Cidade Histórica</Text>
          <Text>Data de entrada: 05/03/2023</Text>
          <Text>Data de saída: 15/03/2023</Text>
          <Text>Valor: R$ 1800,00</Text>
          <TouchableOpacity onPress={handleSaibaMais}>
            <Text style={estilos.saibaMais}>Saiba Mais</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 20,
  },
  viagem: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    margin: 10,
    padding: 15,
    alignItems: 'center',
    marginBottom: 30,
  },
  containerTexto: {
    marginTop: 10,
  },
  local: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imagem: {
    width: 280,
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  saibaMais: {
    color: 'blue',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});

export default Viagem;
