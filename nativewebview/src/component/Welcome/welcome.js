import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { CardSection } from '../../Common';
import { Container, Content, Icon } from 'native-base'
import { Actions } from 'react-native-router-flux';
import * as Animatable from 'react-native-animatable';

class Welcome extends Component {
    Links() {
        Actions.links();
    }
    render() {
        return (
            <Container style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome Native Web View
                </Text>
                <TouchableOpacity onPress={this.Links.bind(this)}>
                    <Animatable.Text animation="pulse" easing="ease-in-quad" iterationCount="infinite" duration={1000}>
                        <Icon name='md-arrow-round-forward' style={{ fontSize: 60, color: 'white' }} />
                    </Animatable.Text>
                </TouchableOpacity>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#03a9f4',
    },
    welcome: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        color: 'white'
    },

});
export default Welcome;