import React, { Component } from 'react';
import { View } from "react-native";


const CardSection = ({children})=>{
    return(
        <View style={Styles.CardStyles}>
            {children}
        </View>
    );
}

const Styles={
    CardStyles:{
        // borderBottomWidth: 1,
        padding: 5,
        // backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#d9d9d9',
        position: 'relative'
    }
}
export {CardSection};