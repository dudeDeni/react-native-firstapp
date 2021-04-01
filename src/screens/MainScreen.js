import React from 'react'
import {StyleSheet, View, FlatList, Image } from 'react-native'
import {AddTodo} from '../components/AddTodo'
import {Todo} from '../components/Todo'


export const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => {
    let content = (
        <FlatList 
            keyExtractor={item => item.id.toString()}
            data={todos}
            renderItem={({item}) => <Todo todo={item}  onRemove={removeTodo} onOpen={openTodo} />}
        />
    )

    if (todos.length === 0) {
        content =
        <View style={styles.imageWrap} >
            <Image style={styles.image} source={require('../../assets/no-items.png')} />
        </View>
    }

    return (
        <View>
            <AddTodo onSubmit={addTodo} />           
            {content}
        </View>
    )
}

const styles = StyleSheet.create({
    imageWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 500,
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: 'contain'
    }
})