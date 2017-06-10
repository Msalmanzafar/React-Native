import React, { Component } from 'react';
import { View, Text, TextInput } from "react-native";

const Input = ({ label, value, onChangeText, placeholder,secureTextEntry }) => {
    return (
        <View style={styles.contaner}>
            <Text style={styles.labelStyle}>{label}</Text>
            <TextInput
                placeholderTextColor="white"
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                style={styles.inputStyle}
                value={value}
                onChangeText={onChangeText}
                underlineColorAndroid='white'
            />
        </View>
    );
}

const styles = {
    inputStyle: {
        color: '#ffffff',
        paddingRight: 5,
        paddingLeft: 3,
        fontSize: 16,
        // lineheight: 23,
        // backgroundColor: 'white',
        flex: 2.5,
       
    },
    labelStyle: {
        fontSize: 16,
        paddingLeft: 5,
        flex: 1,
        color: '#ffffff',
    },
    contaner: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
}
export { Input };