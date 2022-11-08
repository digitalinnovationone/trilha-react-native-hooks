import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, Button, View, Alert } from 'react-native';

export default function App() {
  const [count , setCount] =  useState(0)
  
  useEffect(()=>{
    if(count === 0){
      Alert.alert("Carrinho", "Seu carrinho está vazio")
    }else{
      console.log("ainda tem items")
    }
  },[count])


  const incrementCount = () =>{
    setCount((prevState)=> prevState +1)
  }

  const decrementCount = () =>{
      setCount((prevState) => prevState -1)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.big}>{count}</Text>

      <View style={styles.inline}>
        <Button title='REMOVER' onPress={decrementCount} ></Button>
        <Button title='ADICIONAR' onPress={incrementCount} ></Button>
      </View>

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
  big:{
    fontSize:40
  },
  inline:{
    width: "50%",
    flexDirection:'row',
    justifyContent: 'center'
  }
});
