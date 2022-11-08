import React, {useReducer, useState} from 'react'
import { StyleSheet, Text, Button, View, TextInput } from 'react-native';

const listener = (state: any, action: any) =>{
  switch (action.type) {
    case 'add-new-task':
      return{
        tasks:[...state.tasks, {name:action.inputValue, isDone:false}]
      }
    default:
      return state
  }
}

export default function App() {
  const [state, dispatch] = useReducer(listener, {tasks:[]})
  const [inputValue, setInputValue] = useState("")

  const handleAddTask = () =>{
   dispatch({type:"add-new-task", inputValue})
  }

  return (
    <View style={styles.container}>

      <View style={styles.inline}>
        <TextInput 
          style={styles.enter}
          value={inputValue}
          onChangeText={(text)=> setInputValue(text)}
        ></TextInput>
        <Button title='ADICIONAR TAREFA' onPress={handleAddTask} ></Button>
      </View>

      {state.tasks.map((task:any) => <Text>{task.name}</Text>)}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4939BA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  enter:{
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: '#5450D6',
    width:'80%',
    color:'white'  
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
