import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header,Button } from './Components/Common';
import LoginForm from './Components/loginForm'

class SignUp extends Component {
    state = {
        logedIn: null,
    }
    componentWillMount() {
        firebase.initializeApp(
            {
                apiKey: "AIzaSyArVpiyJ0wPxATriQBnPzvbCqjIBVWSppc",
                authDomain: "sky-auth.firebaseapp.com",
                databaseURL: "https://sky-auth.firebaseio.com",
                projectId: "sky-auth",
                storageBucket: "sky-auth.appspot.com",
                messagingSenderId: "936918632809"
            }
        );
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ logedIn: true });
            }
            else {
                this.setState({ logedIn: false });
            }
        });
    }

    AuthRenderContent() {
        if (this.state.logedIn) {
            return (
                <Button>Log Out</Button>                
            );
        } else {
            return(
                <LoginForm />
            ) ;
        }
    }
    render() {
        return (
            <View>
                <Header headerText="Inventory Store" />
                {this.AuthRenderContent()}
            </View>
        );
    }
}

export default SignUp;