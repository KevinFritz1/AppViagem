import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import PesquisaBar from '../../components/BarraDePesquisa/PesquisaBar';
import BotoesBar from '../../components/BotõesDePesquisa/BotoesBar';
import InferiorBar from '../../components/BarraInferior/InferiorBar';
import { TouchableOpacity } from 'react-native';

const HomeView = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <PesquisaBar />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <BotoesBar />
      </ScrollView>
      <InferiorBar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 45,
    paddingLeft: 30,
    paddingRight: 36,
    justifyContent: 'flex-start',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 10,
  },
  btn: {
    backgroundColor: 'red',
    color: 'white',
    padding: 15,
    alignSelf: 'center',
    marginTop: 40,
  },
});

export default HomeView;
