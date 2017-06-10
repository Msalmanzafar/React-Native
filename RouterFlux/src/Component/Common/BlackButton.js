import React, { Component } from 'react';
import { Text, TouchableOpacity } from "react-native";

const BlackButton = ({ children,onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.TouchableOpacity}>
            <Text style={styles.Button}>
                {children}
            </Text>
        </TouchableOpacity >
    );
}

const styles = {
    Button: {
        textAlign: 'center',
        color: '#ffffff',
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
        backgroundColor: '#000000',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'white',
        marginLeft: 5,
        marginRight: 5,
        position: 'relative'
        
    }
}
export { BlackButton };