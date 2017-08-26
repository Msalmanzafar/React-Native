import React, { Component } from 'react';
import { Text, TouchableOpacity } from "react-native";

const Button = ({ children,onPress,onSubmitEditing }) => {
    return (
        <TouchableOpacity onPress={onPress} onSubmitEditing={onSubmitEditing} style={styles.TouchableOpacity}>
            <Text style={styles.Button}>
                {children}
            </Text>
        </TouchableOpacity >
    );
}

const styles = {
    Button: {
        textAlign: 'center',
        color: '#00bcd4',
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10,
    },
    TouchableOpacity: {
        marginTop: 3,
        marginBottom: 3,
        flex: 1,
        // alignSlef: 'stretch',
        backgroundColor: '#ffff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#00bcd4',
        marginLeft: 5,
        marginRight: 5,
        position: 'relative'
        
    }
}
export { Button };