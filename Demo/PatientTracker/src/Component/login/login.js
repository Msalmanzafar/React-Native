import React, { Component } from 'react';
import { Text, View, Alert, TouchableOpacity, Keyboard } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from '../Common';
import { ButtonLogInAction } from '../../Action/auth-action';
import Doctor from '../doctor/doctor';

import { connect } from 'react-redux';

class Login extends React.PureComponent {
    state = {
        email: '',
        password: '',
        // error: '',
        // loading: false,
    };
    SignUp() {
        Actions.signup();
    }
    ButtonLogIn() {
        // console.log("working---------------")
        let email = this.state.email;
        let password = this.state.password;

        let userSignIn = {
            email: email,
            password: password
        }
        this.props.ButtonLogInAction(userSignIn);

    };




    render() {
        const {
            ErrorMessage,
            auth,
            loader
        } = this.props;
        
        return (
            <View>
                {(auth) ? (
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
                                    label='Password:'
                                    keyboardType={'numeric'}
                                    value={this.state.password}
                                    onChangeText={password => this.setState({ password })}
                                />
                            </CardSection>

                            {(ErrorMessage) ? (
                                <Text style={styles.errorStyle}>
                                    {this.props.ErrorMessage}
                                </Text>

                            ) : (
                                    <Text></Text>
                                )}
                            <CardSection>
                                {(!this.props.loader) ? (
                                    <Button onPress={this.ButtonLogIn.bind(this)} >
                                        Sign Up
                                        </Button>
                                ) : (
                                        <Spinner size='large' />

                                    )}
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
                    </View>

                ) : (
                        <Doctor />
                    )}

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
        auth: state.AuthReducer.loading,
        ErrorMessage: state.AuthReducer.ErrorMess,
        loader: state.AuthReducer.loading,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        ButtonLogInAction: (userSignIn) => {
            dispatch(ButtonLogInAction(userSignIn));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default Login;