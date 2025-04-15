import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


interface AppProps {}


const App: React.FC<AppProps> = () => {
 return (
  <View style={styles.container}>
   <Text style={styles.text}>Hello, React Native!</Text>
  </View>
 );
};


const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
 },
 text: {
  fontSize: 20,
  fontWeight: 'bold',
 },
});


export default App;