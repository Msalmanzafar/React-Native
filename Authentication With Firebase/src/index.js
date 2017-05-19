import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, CardSection, Button, Spinner } from './Components/Common';
import LoginForm from './Components/loginForm'



class SignUp extends Component {
    state = {
        logedIn: null,
    };
    componentWillMount() {
        firebase.initializeApp( {
            apiKey: "AIzaSyArVpiyJ0wPxATriQBnPzvbCqjIBVWSppc",
            authDomain: "sky-auth.firebaseapp.com",
            databaseURL: "https://sky-auth.firebaseio.com",
            projectId: "sky-auth",
            storageBucket: "sky-auth.appspot.com",
            messagingSenderId: "936918632809"
        });
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
        switch (this.state.logedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
                    </CardSection>
                );
            case false:
                return (
                    <LoginForm />
                );
            default:
                return (
                    <CardSection>
                        <Spinner size='large' />
                    </CardSection>
                );
        }

    }
    render() {
        console.log(this.state.logedIn, "user info")
        return (
            <View>
                <Header headerText="Inventory Store" />
                {this.AuthRenderContent()}
            </View>
        );
    }
}

export default SignUp;