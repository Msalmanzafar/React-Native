import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { CardSection } from '../../Common';
import { Container, Spinner, Icon } from 'native-base'
import { Actions } from 'react-native-router-flux';


class Links extends Component {
    Google(){
        Actions.google();
    }
    linkedin(){
       Actions.likedin();
    }
    facebook(){
       Actions.facebook();
    }
    render() {
        return (
            <Container style={styles.container}>
                <TouchableOpacity onPress={this.Google.bind(this)}>
                    <Text style={styles.welcome}>
                        <Icon name='logo-google' style={{ fontSize: 60,color: '#4ab623' }} />
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.linkedin.bind(this)}>
                    <Text style={styles.welcome}>
                        <Icon name='logo-linkedin' style={{ fontSize: 60,color: '#1059a2' }} />
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.facebook.bind(this)}>
                    <Text style={styles.welcome}>
                        <Icon name='logo-facebook' style={{ fontSize: 60,color: '#1a6fc4' }} />
                    </Text>
                </ TouchableOpacity>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    welcome: {
        textAlign: 'center',
        margin: 10,
        color: 'black'
    },

});
export default Links;