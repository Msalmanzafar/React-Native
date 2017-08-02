import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { Header, Button, Card, CardSection } from '../Common'
import Options from './options'
import Logos from '../images/medical.png'


const styles = {
    header: {
        backgroundColor: '#b71c1c',

    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 310,
        // marginTop: 10,
        marginBottom: 30,

    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        marginTop: 15,
        marginBottom: 0
    },
    logo: {
        width: 100,
        height: 100
    }
}
class MyHome extends Component {
    render() {
        return (
            <View>
                <Header headerText='Medico' />
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={Logos} />
                </View>
                <Options />


            </View>
        );
    }
}

export default MyHome;