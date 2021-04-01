import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import React, {useState} from 'react';
import { StyleSheet, View, Alert } from 'react-native';

import { Navbar } from './src/components/Navbar'
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';

async function loadApplication() {
  await Font.loadAsync({
    'poppins-black': require('./assets/fonts/Poppins-Black.ttf'),
    'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
  })
}

export default function App() {
  const [isReady, setIsReady] = useState(false)
  const [todoId, setTodoId] = useState(null)
  const [todos, setTodos] = useState([
    {id:'1', title: 'Adelina my ❤'},
  ])

  if (!isReady) {
    return (
      <AppLoading 
        startAsync={loadApplication} 
        onError={err => console.log(err)}
        onFinish={() => setIsReady(true)} 
      />
    )
  }

  const addTodo = (title) => {
    setTodos(prev => [
      ...prev, 
      {
        id: Date.now().toString(),
        title: title
      }
    ])
  }

  const removeTodo = id => {
    const todo = todos.find(t => t.id === id)
    Alert.alert(
      "Deleting element",
      `Are you sure you want delete "${todo.title}"?`,
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "Delete",
          style: 'destructive',
          onPress: () => {
            setTodoId(null)
            setTodos(prev => prev.filter(todo => todo.id !== id))
          } 
        }
      ],
      { cancelable: false }
    );
  }

  const updateTodo = (id, title) => {
    setTodos(old => old.map(todo => {
      if (todo.id === id) {
        todo.title = title
      }
      return todo
    }))
  }

  let content = (
    <MainScreen  todos={todos} addTodo={addTodo} removeTodo={removeTodo} openTodo={setTodoId} />
  )

  if (todoId) {
    const selectedTodo = todos.find(todo => todo.id === todoId)
    content = 
      <TodoScreen 
        onRemove={removeTodo} 
        goBack={() => setTodoId(null)} todo={selectedTodo}
        onSave={updateTodo} 
      />
  }

  return (
    <View>
      <StatusBar style="dark" />
      <Navbar title='Todo App'></Navbar>
      <View style={styles.container}>
        { content }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
});
 