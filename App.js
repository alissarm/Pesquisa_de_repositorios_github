import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import React, { useState, useEffect} from 'react';
import axios from 'axios';


const App = ({}) => {
  const [repositorio, setRepositorio] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/alissarm/repos');
        setRepositorio(response.data);
        setBusca(false);
      } catch (error) {
        console.error('Ocorreu um erro', error);
      }
    };


    fetchData();
  },[]);
 
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Busca de repositórios no github</Text>
      <FlatList
      data = {repositorio}
      keyExtractor= {(item) => item.id.toString()}
      renderItem={({item}) => (
      <Text>{item.name}</Text>)}/>
    </View>
   
  );
}


export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color: '#7f6fa6',
    fontSize: 30,
    marginTop: 30,
  },
});
