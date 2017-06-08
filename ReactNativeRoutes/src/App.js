
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './Store/store';
import * as firebase from 'firebase';
import Routers from './Router';


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
                <Routers/>
            </Provider>
        );
    }
}

export default App;

