import React, { Component } from 'react';
import { View } from "react-native";


const HeadingBar = ({ children }) => {
    return (
        <View style={Styles.CardStyles}>
            {children}
        </View>
    );
}

const Styles = {
    CardStyles: {
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#00bcd4',
        borderBottomWidth: 0,
        shadowColor: '#d9d9d9',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 3,
        padding: 6,
        backgroundColor: '#00bcd4',
    }
}
export { HeadingBar };