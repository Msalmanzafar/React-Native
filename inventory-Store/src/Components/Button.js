import React, { Component } from 'react';
import { Text, TouchableOpacity } from "react-native";

const Button = ( {onPress} ) => {
    return (
        <TouchableOpacity onPress={onPress} style={Styles.TouchableOpacity}>
            <Text style={Styles.Button}>Click Me</Text>
        </TouchableOpacity >
    );
}

const Styles = {
    Button:{
        textAlign: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    },
    TouchableOpacity: {
        marginTop: 8,
        marginBottom: 8,
        flex: 1,
        // alignSlef: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
    }
}
export default Button;