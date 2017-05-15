import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './Components/Common';
import LoginForm from './Components/loginForm'

class SignUp extends Component {
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
    }
    render() {
        return (
            <View>
                <Header headerText="Inventory Store" />
                {/*<Text>SignUp</Text>*/}
                <LoginForm/>
            </View>
        );
    }
}

export default SignUp;