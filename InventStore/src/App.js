import React from 'react';
import { View, StyleSheet } from 'react-native';
// import Authentication from './Component/Auth/auth';
import { Provider } from 'react-redux';
import store from './Store/store';
import * as firebase from 'firebase';
import Routers from './Router';

firebase.initializeApp({
    apiKey: "AIzaSyArVpiyJ0wPxATriQBnPzvbCqjIBVWSppc",
    authDomain: "sky-auth.firebaseapp.com",
    databaseURL: "https://sky-auth.firebaseio.com",
    projectId: "sky-auth",
    storageBucket: "sky-auth.appspot.com",
    messagingSenderId: "936918632809"
});

class MyApp extends React.PureComponent {
    
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <Routers />
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