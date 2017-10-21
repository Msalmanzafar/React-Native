import React, { Component } from 'react';
import * as firebase from 'firebase';

import { Router, Scene, Actions } from 'react-native-router-flux';
import Home from './component/home/home';


class Routers extends Component {
    componentWillMount() {
        firebase.initializeApp({
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
            <Router>
                <Scene key='main'>
                    <Scene
                        key="home"
                        component={Home}
                        hideNavBar
                    />
                </Scene>
            </Router>
        );
    }
}

export default Routers;
