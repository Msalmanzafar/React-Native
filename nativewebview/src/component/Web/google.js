import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, WebView } from 'react-native'
import { Container, Spinner } from 'native-base'


class Google extends Component {

    render() {
        return (
            <Container style={styles.container}>
                <WebView
                    source={{ uri: 'https://www.google.com.pk' }}
                    style={{ marginTop: 5 }}
                />
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
export default Google;