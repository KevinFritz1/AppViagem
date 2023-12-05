import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BarraPesquisa = ({ onPesquisa, onFiltroPress }) => {
  const [consulta, setConsulta] = useState('');

  const lidarComPesquisa = () => { 
    onPesquisa(consulta);
  };

  const lidarComPressaoFiltro = () => {
    onFiltroPress();
  };

  return (
    <View style={estilos.container}>
      <Ionicons name="md-search" size={24} color="black" />
      <TextInput
        style={estilos.entrada}
        placeholder="Pesquisar..."
        value={consulta}
        onChangeText={(texto) => setConsulta(texto)}
        onSubmitEditing={lidarComPesquisa}
      />
      <TouchableOpacity onPress={lidarComPressaoFiltro} style={estilos.botaoFiltro}>
        {/*texto que representa o botao de filtro*/}
        <Ionicons name="md-options" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 10,
    marginTop: 30, 
  },
  entrada: {
    flex: 1,
    marginLeft: 8,
    borderRadius: 10,
  },
  botaoFiltro: {
    marginLeft: 8,
  },
});

export default BarraPesquisa;
