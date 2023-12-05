import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ViagemDetalhe = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../components/Viagens/img/praia.jpg')}
        style={styles.imagemProduto}
      />
      <View style={styles.infoProduto}>
        <Text style={styles.nomeProduto}>Nome do Produto</Text>
        <Text style={styles.precoProduto}>R$ 99,99</Text>
        <Text style={styles.descricaoProduto}>
          Uma breve descrição do produto e suas características. Pode incluir
          informações importantes sobre o produto, como tamanho, cor, etc.
        </Text>
      </View>
      <TouchableOpacity style={styles.botaoComprar}>
        <Text style={styles.textoBotao}>Comprar Agora</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagemProduto: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  infoProduto: {
    alignItems: 'center',
    marginBottom: 16,
  },
  nomeProduto: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  precoProduto: {
    fontSize: 18,
    color: 'green',
    marginBottom: 8,
  },
  descricaoProduto: {
    textAlign: 'center',
    marginBottom: 16,
    color: '#666',
  },
  botaoComprar: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ViagemDetalhe;
