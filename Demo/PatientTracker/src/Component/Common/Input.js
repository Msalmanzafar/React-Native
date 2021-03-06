import React, { Component } from 'react';
import { View, Text, TextInput } from "react-native";

const Input = ({ label, value,keyboardType, onChangeText, placeholder, secureTextEntry }) => {
    return (
        <View style={styles.contaner}>
            <Text style={styles.labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                style={styles.inputStyle}
                value={value}
                keyboardType={keyboardType}
                onChangeText={onChangeText}
                underlineColorAndroid='transparent'
            />
        </View>
    );
}

const styles = {
    inputStyle: {
        color: '#000',
        // paddingRight: 5,
        // paddingLeft: 3,
        padding: 3,
        fontSize: 16,
        // lineheight: 23,
        // backgroundColor: 'white',
        flex: 5,

    },
    labelStyle: {
        fontSize: 16,
        paddingLeft: 5,
        flex: 1,
    },
    contaner: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ddd',
        borderBottomWidth: 1,
    }
}
export { Input };