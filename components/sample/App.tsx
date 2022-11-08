import React,{useState, useEffect} from 'react'
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0)


  return (
    <View style={styles.container}>
      
      <Image source={{uri: 'https://www.pcworld.com/wp-content/uploads/2021/09/hi-cortana-100263863-orig-5.jpg'}}/>

      <TextInput style={styles.inputer}></TextInput>
      <Text style={styles.small}>Whats Your Name ?</Text>
      <Text style={styles.big}>Hello User !</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    color:'white'
  },
  small:{
    fontSize:20,
    color:'white'
  },
  big:{
    fontSize:38,
    color:'#27CCFA'
  },
  inputer:{
    borderWidth: 4,
    borderRadius: 3,
    fontSize: 30,
    borderColor: '#18536F',
    backgroundColor: '#35ACD7',
    width: '80%',
    padding: 4,
    color:'black',
    textAlign:'center'
  }
});
