import React from 'react';
import {StyleSheet,View} from 'react-native';
import Router from './Router'



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b3d2e5',
    flex: 1,

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
class MyApp extends React.PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <Router />
            </View>
        );
    }
}


export default MyApp;