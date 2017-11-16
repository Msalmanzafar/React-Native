import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Routers from './Reoute';
import {Card,Container,Content} from 'native-base'

export default class App extends Component {
	componentWillMount() {
		console.disableYellowBox = true
	}
  render() {
    return (
      <Container>
        <Routers />
      </Container>
    );
  }
}

