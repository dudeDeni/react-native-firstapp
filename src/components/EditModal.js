import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react'
import { StyleSheet, View, TextInput, Button, Modal, Alert } from 'react-native'
import {THEME} from '../theme'
import { AppButton } from './ui/AppButton';

export const EditModal = ({ visible, onCancel, value, onSave }) => {

    const [title, setTitle] = useState(value)

    const saveHandler = () => {
        if (title.trim().length < 3) {
            Alert.alert('Error!', `Minimum length must be 3 symbols. You entered ${title.trim().length} what is equal to your IQ.`)
        } else {
            onSave(title)
        }
    }

    return (
        <Modal visible={visible} animationType= 'fade' transparent= {false}>
            <View style={styles.wrap}>
                <StatusBar style="dark" />
                <TextInput 
                    value={title}
                    onChangeText={setTitle}
                    style={styles.input} 
                    placeholder='Enter new name' 
                    autoCapitalize='none' 
                    autoCorrect={false}
                    maxLength={64}
                />
                <View style={styles.buttons}>
                    <AppButton onPress={onCancel} color={THEME.RED_COLOR}>Cancel</AppButton>
                    <AppButton onPress={saveHandler}>Save</AppButton>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    wrap:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        padding: 10,
        borderColor: THEME.MAIN_COLOR,
        borderWidth: 2,
        borderRadius: 10,
        width: '80%',
    },
    buttons: {
        width: '100%',
        marginTop: 7,
        flexDirection: 'row',
        justifyContent: 'space-around'

    }
})