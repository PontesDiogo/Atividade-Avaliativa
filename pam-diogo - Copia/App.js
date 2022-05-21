// Interface inicial feita por Adrian Felipe Jacinto e Diogo Garcia Pontes 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image , View } from 'react-native';

import Img from './assets/Lua.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={Img}/>

    
    <View style={styles.boxtexto} >
    <Text style={styles.titulo}>Lua</Text>
    <Text style={styles.texto}>A lua é o único satélite natural do <Text style={styles.especial}>planeta Terra</Text>, a distância que os divide é aproximadamente 384.405km.</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },

  img: {
    width: 100,
    height: 100,
    marginBottom: 50
  },

  boxtexto: {
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 20,
    borderStyle: 'dotted',
    paddingVertical: 10,
    paddingHorizontal: 20
  },

  titulo: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },

  texto: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center'
  },

  especial: {
    fontStyle: 'italic',
    fontWeight: 'bold'
  }
});