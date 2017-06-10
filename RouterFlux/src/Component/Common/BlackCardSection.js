import React, { Component } from 'react';
import { View } from "react-native";


const BlackCardSection = ({children})=>{
    return(
        <View style={Styles.CardStyles}>
            {children}
        </View>
    );
}

const Styles={
    CardStyles:{
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#000000',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#000000',
        position: 'relative'
    }
}
export {BlackCardSection};