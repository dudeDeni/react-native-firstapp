import React , {useState} from 'react'
import { AntDesign } from '@expo/vector-icons'
import { View, StyleSheet, TextInput, Keyboard, Alert } from 'react-native'
import { THEME } from '../theme'

export const AddTodo = ({ onSubmit }) => {

    const [value, setValue] = useState('')
    
    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value)
            setValue('')
            Keyboard.dismiss()
        } else {
            Alert.alert('Empty entry')
        }
        
    }
    
    return (
        <View style={styles.block}>
            <TextInput 
                style={styles.input}
                onChangeText={text => setValue(text)}
                value={value}
                placeholder="Enter name of task..."
                autoCorrect={false}
                autoCapitalize='none'
                keyboardType='default'
            />
            <AntDesign.Button onPress={pressHandler} name="pluscircleo" size={15} color="white">
                Add
            </AntDesign.Button>
            {/*<Button title='Add' onPress={pressHandler} />*/}
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
    },
    input: {
        width: '70%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR,
    }
})