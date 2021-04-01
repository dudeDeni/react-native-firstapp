import React from 'react'
import { StyleSheet, View } from 'react-native'
import { THEME } from '../../theme'

export const AppCard = props => (
    <View style={ {...styles.default, ...props.style } }>{props.children}</View>
)

const styles = StyleSheet.create({
    default:{
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: THEME.GREY_COLOR,
        shadowRadius: 5,
        shadowOpacity: 3,
        shadowOffset: { width: 1, height: 1},
        elevation: 8,
        backgroundColor: '#fff',
        borderRadius: 10,
    }
})