import React from 'react';
import { StyleSheet, View,Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './Store/store';
import Router from './Router';



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b3d2e5',
    flex: 1,
    marginTop:-50
  }
});
class MyApp extends React.PureComponent {
  render() {
    return (
      // <View style={styles.container}>
      //    <Text>Real App</Text>
      // </View>
      <Provider store={store}>
        <View style={styles.container}>
          <Router />
        </View>
      </Provider>
    );
  }
}


export default MyApp;