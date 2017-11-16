import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Routers from './Reoute';
import {Card,Container,Content} from 'native-base'

export default class App extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Routers />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      // flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
  },
    // welcome: {
    //   fontSize: 20,
    //   textAlign: 'center',
    //   margin: 10,
    // },
  //   instructions: {
  //     textAlign: 'center',
  //     color: '#333333',
  //     marginBottom: 5,
  //   },
});