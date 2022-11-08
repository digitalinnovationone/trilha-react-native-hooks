import React, {useReducer} from 'react'
import { StyleSheet, Text, Button, View, Alert } from 'react-native';

const reducer = (
    state: {counter: number;} , 
    action: {type: string;}) =>{

  switch(action.type){
    case 'increment':
      return {
        counter: state.counter + 1
      }
    case 'decrement':
      return {
        counter: state.counter -1
      }
    case 'cancelamento':
      return {
        counter: 0
      }
    default:
      return state
  }
}


export default function App() {
  const [state , dispatch] = useReducer(reducer, {counter: 0})


  const incrementCount = () =>{
   dispatch({type:'increment'})
  }

  const decrementCount = () =>{
    dispatch({type:'decrement'})
  }

  return (
    <View style={styles.container}>
      <Text style={styles.big}>{state.counter}</Text>
      Input
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
