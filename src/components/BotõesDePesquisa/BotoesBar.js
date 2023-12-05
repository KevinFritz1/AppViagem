import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Viagem from '../Viagens/Viagem';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Conteudo = ({ tipo }) => {
  const renderizarConteudo = () => {
    switch (tipo) {
      case 'Voos':
        return <Viagem />;
      case 'Hotéis':
        return <Text>Hotéis</Text>;
      case 'Pacotes':
        return <Text>Pacotes</Text>;
      case 'Guia':
        return <Text>Guia</Text>;
      default:
        return <Viagem />;
    }
  };

  return (
    <View style={estilos.conteudoContainer}>
      {renderizarConteudo()}
    </View>
  );
};

const BotoesBar = ({ onOptionPress }) => {
  const lidarComPressaoOpcao = (tipo) => {
    onOptionPress(tipo);
  };

  return (
    <View style={estilos.container}>
      <TouchableOpacity onPress={() => lidarComPressaoOpcao('Voos')} style={estilos.botaoOpcao}>
        <Ionicons name="md-airplane" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => lidarComPressaoOpcao('Hotéis')} style={estilos.botaoOpcao}>
        <Ionicons name="md-bed" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => lidarComPressaoOpcao('Pacotes')} style={estilos.botaoOpcao}>
        <Ionicons name="md-globe" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => lidarComPressaoOpcao('Guia')} style={estilos.botaoOpcao}>
        <Ionicons name="md-information-circle" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  const [tipoConteudo, setTipoConteudo] = useState('');

  const lidarComPressaoOpcao = (tipo) => {
    setTipoConteudo(tipo);
  };

  return (
    <View style={estilos.appContainer}>
      <BotoesBar onOptionPress={lidarComPressaoOpcao} />
      <Conteudo tipo={tipoConteudo} />
    </View>
  );
};

const estilos = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: 'space-around',
    width: '100%',
    height: 70, 
  },
  botaoOpcao: {
    padding: 20,
    backgroundColor: 'lightgray',
    borderRadius: 10,
    alignItems: 'center',
  },
  textoOpcao: {
    fontSize: 20,
  },
  conteudoContainer: {
    alignItems: 'center',
  },
});

export default App;
