import React, { Component } from 'react';
import { View } from "react-native";


const Card = ({children})=>{
    return(
        <View style={Styles.CardStyles}>
            {children}
        </View>
    );
}

const Styles={
    CardStyles:{
        // borderWidth: 1,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        // borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#0693e3',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 10,        
        padding: 6,
        backgroundColor: '#ffff'
    }
}
export {Card};