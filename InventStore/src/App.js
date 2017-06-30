import React from 'react';
import { View, StyleSheet } from 'react-native';
import Authentication from './Component/Auth/auth';
import { Provider } from 'react-redux';
import store from './Store/store';
import * as firebase from 'firebase';
// import Routers from './Router';

class MyApp extends React.PureComponent {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <Authentication />
                </View>
            </Provider>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00bcd4'
    }
})
export default MyApp;