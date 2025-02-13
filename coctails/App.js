import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useRef ,useState } from 'react';
import useAbortableFetch from './hooks/useAbortableFetch';
import { ScrollView } from 'react-native';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

export default function App() {
  const [phrase, setPhrase] = useState('')

  const urlRef = useRef()
  const { data, error, loading } = useAbortableFetch(urlRef.current)
  
  const searchCoctails = (text) => {
    setPhrase(text)
    const address = URL + text
    urlRef.current = address
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchbox}>
        <Text style={styles.heading}>Coctails</Text>
        <TextInput 
          style={styles.field}
          placeholder='Enter Name...'
          value={phrase}
          onChangeText={text => searchCoctails(text)}
        />
      </View>
      <ScrollView>
      {
        (data !== null) && data.drinks !== null &&
          data.drinks.map(drink => (
            <Text key={drink.strDrink}>{drink.strDrink}</Text>
          ))
      }
      </ScrollView>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    margin: 8,
  },
  heading: {
    fontSize: 40,
    marginTop: 16,
    marginBottom: 16,
  },
  field: {
    marginTop: 8,
    marginBottom: 16,
  }
});
