import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from './src/Components/NavBar'
import AlbumsList from './src/Components/albumsList'


export default class App extends React.Component {
  render() {
    return (
      <View>
        <NavBar />
        <AlbumsList/>
      </View>
    );
  }
}


