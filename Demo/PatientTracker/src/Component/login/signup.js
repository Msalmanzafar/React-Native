import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Keyboard } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from '../Common';
// import * as firebase from 'firebase';
import { ButtonSignUpAction } from '../../Action/auth-action'
import { connect } from 'react-redux';


class SignUp extends React.PureComponent {
    state = {
        email: '',
        password: '',
    };
    ButtonSignUp() {
        // console.log("working---------------")
        let email1 = this.state.email;
        let password1 = this.state.password;

        // this.setState({ error: '', loading: true });
        let userSignUp = {
            email: email1,
            password: password1,
        }
        this.props.ButtonSignUpAction(userSignUp);

    };



    render() {
        const {
            ErrorMessage,
        } = this.props;
        let RenderButton = () => {
            if (this.props.loader) {
                return <Spinner size='large' />
            }
            return (
                <Button onPress={this.ButtonSignUp.bind(this)} onSubmitEditing={Keyboard.dismiss()}>
                    Sign Up
                </Button>
            )
        }
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
                        {this.props.ErrorMessage}
                    </Text>
                    <CardSection>
                        {this.props.RenderButton}
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

const mapStateToProps = (state) => {
    return {
        auth: state.AuthReducer,
        ErrorMessage: state.AuthReducer.ErrorMess,
        loader: state.AuthReducer.loading,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        ButtonSignUpAction: (userSignUp) => {
            dispatch(ButtonSignUpAction(userSignUp));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);