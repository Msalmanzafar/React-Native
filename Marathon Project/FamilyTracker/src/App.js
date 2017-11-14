import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './Store/store';
import Router from './Router';



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff176',
    flex: 1,
    marginTop: -50
  }
});
class MyApp extends React.PureComponent {
  componentWillMount() {
    console.disableYellowBox = true
  }
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