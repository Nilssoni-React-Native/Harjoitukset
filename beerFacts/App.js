import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const URL = 'https://random-data-api.com/api/v2/beers'

export default function App() {

  const [brand, setBrand] = useState('')
  const [name, setName] = useState('')
  const [style, setStyle] = useState('')
  const [hop, setHop] = useState('')
  const [alcohol, setAlcohol] = useState('')

  const fetchBeer = () => {
    fetch(URL)
      .then(response => response.json())
      .then((json) => {
        setBrand(json.brand)
        setName(json.name)
        setStyle(json.style)
        setHop(json.hop)
        setAlcohol(json.alcohol)
      }).catch((error) => {
        console.log(error)
      });
  };

  useEffect(() => {
    fetchBeer();
  }, [])
  

  return (
    <View style={styles.container}>
      <Text>Random beer fact</Text>
      <Text>Brand: {brand}</Text>
      <Text>Name: {name}</Text>
      <Text>Style: {style}</Text>
      <Text>Hop: {hop}</Text>
      <Text>Alcohol: {alcohol}</Text>
      <Button title='Get New Beer' onPress={fetchBeer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
