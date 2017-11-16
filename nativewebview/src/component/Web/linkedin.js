import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, WebView } from 'react-native'
import { Container, Spinner } from 'native-base'


class LinkedIn extends Component {

    render() {
        return (
            <Container style={styles.container}>
                <WebView
                    source={{ uri: 'https://www.linkedin.com/' }}
                    style={{ marginTop: 5 }}
                />
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'white',
    },
    //     welcome: {
    //         textAlign: 'center',
    //         margin: 10,
    //         color: 'black'
    //     },

});
export default LinkedIn;