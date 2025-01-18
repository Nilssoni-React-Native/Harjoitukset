import { useState } from 'react';
import { StyleSheet, View, Alert, Text, Button } from 'react-native';

export default function App() {
  const [ok, setOk] = useState(false);

  const showAlert = () => {
    Alert.alert(
      'President Howard T. Ackerman',
      'Are you ready to send the commies back home to their mommies?',
    [
      {
        text: "Ok",
        onPress: () => setOk(true)
      },
      {
        text: "Cancel",
        onPress: () => setOk(false)
      }
    ]
    );
  }

  return (
    <View style={styles.container}>
     <Button title={'Open Dialog'} onPress={showAlert}></Button>
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
