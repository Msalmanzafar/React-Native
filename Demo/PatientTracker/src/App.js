import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './Store/store';
import Router from './Router';



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b3d2e5',
    flex: 1,
    marginTop: -50
  },
  // welcome: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 10,
  // },
  // instructions: {
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5,
  // },
});
class MyApp extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Router />
        </View>
      </Provider>
    );
  }
}


export default MyApp;