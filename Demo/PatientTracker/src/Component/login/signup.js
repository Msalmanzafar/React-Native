import React, { Component } from 'react';
import { Text, View, Alert, TouchableOpacity,Keyboard } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from '../Common';
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

class SignUp extends React.PureComponent {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false,
    };
    ButtonSignUp() {
        // console.log("working---------------")
        let email1 = this.state.email;
        let password1 = this.state.password;
        
        this.setState({ error: '', loading: true });
        firebase.auth().createUserWithEmailAndPassword(email1, password1)
            // .then(this.onLoginSuccess.bind(this))
            // .catch(this.onLoginFailed.bind(this))
            .then((user) => {
                // console.log("user", user.email);
                // Alert.alert(
                //     'Medico',
                //     'Thanks for SignUp',
                //     [
                //         { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                //         { text: 'OK', onPress: () => console.log('OK Pressed') },
                //     ],
                //     { cancelable: false }
                // )
                this.onLoginSuccess.bind(this);
                this.setState({ loading: false });
                Actions.login();
            })
            .catch((errors) => {
                this.onLoginFailed.bind(this);
                this.setState({ error: errors.message })
                this.setState({ loading: false });

            })
    };

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: '',
        });
    }
    onLoginFailed() {
        this.setState({ error: 'Authentication Failed.!', loading: false });
    }
    RenderButton() {
        if (this.state.loading) {
            return <Spinner size='large' />
        }
        return (
            <Button onPress={this.ButtonSignUp.bind(this)} onSubmitEditing={Keyboard.dismiss()}>
                Sign Up
            </Button>
        )
    }

    render() {
        return (
            <View>
                <Card >
                    <CardSection>
                        <Input
                            placeholder='user@gmail.com'
                            label='Email:'
                            keyboardType={'email-address'}
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            secureTextEntry
                            placeholder='password'
                            keyboardType={'numeric'}
                            label='Password:'
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                        />
                    </CardSection>
                    <Text style={styles.errorStyle}>
                        {this.state.error}
                    </Text>
                    <CardSection>
                        {this.RenderButton()}
                    </CardSection>
                </Card>
            </View>

        );
    }
}
const styles = {
    errorStyle: {
        fontSize: 16,
        alignSelf: 'center',
        color: 'red',
        margin: 12
    }
}
export default SignUp;