import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { Header, Button, Card, CardSection } from '../Common'
import Options from './options'
// import Logos from '../images/geoturist.png'


const styles = {
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
            <View >
                <Header headerText='Tourist Guide' /> 
                {/* <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={Logos} />
                </View> */}
                <Options />
            </View>
        );
    }
}

export default MyHome;