import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './Components/Common';
import { Provider } from 'react-redux';
import store from './Store/store';
import LoginForm from './Components/Auth/loginForm'
import * as firebase from 'firebase';



class App extends Component {

    componentWillMount() {
        firebase.initializeApp( {
            apiKey: "AIzaSyArVpiyJ0wPxATriQBnPzvbCqjIBVWSppc",
            authDomain: "sky-auth.firebaseapp.com",
            databaseURL: "https://sky-auth.firebaseio.com",
            projectId: "sky-auth",
            storageBucket: "sky-auth.appspot.com",
            messagingSenderId: "936918632809"
        });
    }

    render() {
        return (
            <Provider store={store}>
                <View >
                    <Header headerText="Authentication" />
                    <LoginForm />
                </View>
            </Provider>
        );
    }
}

export default App;