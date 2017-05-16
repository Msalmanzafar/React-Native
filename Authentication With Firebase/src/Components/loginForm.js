import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './Common';
import firebase from 'firebase';


class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false,
    };
    ButtonLogIn() {
        // console.log("working---------------")
        let email = this.state.email;
        let password = this.state.password;

        this.setState({ error: '', loading: true })
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(this.onLoginFailed.bind(this))
            // .then((user) => {
            //     // console.log("user", user.email);
            //     // alert("thanks", user.email);
            //     // this.onLoginSuccess.bind(this);
            // })
            // .catch((errors) => {
            //     // firebase.auth().createUserWithEmailAndPassword(email,password)
            //     // .catch(()=>{
            //     this.onLoginFailed.bind(this);
            //     // this.setState({ error: errors.message })
            // })
        // });
    }
    onLoginSuccess(){
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: '',
        });
    }
    onLoginFailed(){
        this.setState({error: 'Authentication Failed.!',loading: false});
    }
    RenderButton() {
        if (this.state.loading) {
            return <Spinner size='large' />
        }
        return (
            <Button onPress={this.ButtonLogIn.bind(this)}>
                Log In
            </Button>
        )
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder='user@gmail.com'
                        label='Email:'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder='password'
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
        );
    }
}
const styles = {
    errorStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
    }
}
export default LoginForm;