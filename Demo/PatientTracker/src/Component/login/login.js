import React, { Component } from 'react';
import { Text, View, Alert, TouchableOpacity, Keyboard } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from '../Common';
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

class Login extends React.PureComponent {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false,
    };
    SignUp() {
        Actions.signup();
    }
    ButtonLogIn() {
        // console.log("working---------------")
        let email = this.state.email;
        let password = this.state.password;

        this.setState({ error: '', loading: true });
        firebase.auth().signInWithEmailAndPassword(email, password)
            // .then(this.onLoginSuccess.bind(this))
            // .catch(this.onLoginFailed.bind(this))
            .then((user) => {
                console.log("user", user.email);
                // Alert.alert(
                //     'Medico',
                //     'Thanks for Login',
                //     [
                //         { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                //         { text: 'OK', onPress: () => console.log('OK Pressed') },
                //     ],
                //     { cancelable: false }
                // )
                this.onLoginSuccess.bind(this);
                this.setState({ loading: false });
                Actions.doctor();

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
            <Button onPress={this.ButtonLogIn.bind(this)} onSubmitEditing={Keyboard.dismiss()}>
                Log In
            </Button>
        )
    }

    render() {
        return (
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
                        label='Password:'
                        keyboardType={'numeric'}
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
                <CardSection>
                    <Text style={{ marginLeft: 12 }}>Create new account..</Text>
                    <TouchableOpacity>
                        <Text
                            style={{ color: '#004dcf', }}
                            onPress={this.SignUp.bind(this)}
                        >SignUp
                                </Text>
                    </TouchableOpacity>
                </CardSection>
            </Card>

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
export default Login;