import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Button } from 'react-native-paper';

const BarraInferior = ({ onSelect, navigation }) => {
  return (
    <View style={estilos.barraInferior}>
      <TouchableOpacity onPress={() => onSelect('Explorar')} style={estilos.itemBarraInferior}>
        <FontAwesome5 name="search" size={20} color="black" />
        <Text style={estilos.textoBarraInferior}>Explorar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onSelect('Favoritos')} style={estilos.itemBarraInferior}>
        <FontAwesome5 name="heart" size={20} color="black" />
        <Text style={estilos.textoBarraInferior}>Favoritos</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onSelect('Viagens')} style={estilos.itemBarraInferior}>
        <FontAwesome5 name="plane" size={20} color="black" />
        <Text style={estilos.textoBarraInferior}>Viagens</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onSelect('Mensagens')} style={estilos.itemBarraInferior}>
        <FontAwesome5 name="comment" size={20} color="black" />
        <Text style={estilos.textoBarraInferior}>Mensagens</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('TelaLogin')} style={estilos.itemBarraInferior}>
      <FontAwesome5 name="user" size={20} color="black" />
        <Text style={estilos.textoBarraInferior}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const estilos = StyleSheet.create({
  barraInferior: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    marginTop: 20,
  },
  itemBarraInferior: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  textoBarraInferior: {
    marginTop: 5,
    fontSize: 12,
  },
});

export default BarraInferior;
