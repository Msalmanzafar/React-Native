import React, { Component } from 'react';
import { Text, View, Alert, TouchableOpacity, Keyboard } from 'react-native';
import { Button, Card, CardSection, Spinner, Header } from '../Common';
import { ButtonLogInAction } from '../../Action/auth-action';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Item, Form, Label, Input } from 'native-base'
import MapHome from '../Map/mapHome'

import { connect } from 'react-redux';

class Login extends React.PureComponent {
    componentWillMount() {
        console.disableYellowBox = true
    }
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
    Cancel() {
        Actions.home();
    }
    render() {
        const {
            ErrorMessage,
            auth,
            loader
        } = this.props;

        return (
            <Container>
                {(!auth) ? (
                    <MapHome />
                ) : (
                        <Content>
                            <Header headerText='Log In' />
                            <Form>
                                <Item stackedLabel last>
                                    <Label>Email</Label>
                                    <Input
                                        keyboardType={'email-address'}
                                        value={this.state.email}
                                        onChangeText={email => this.setState({ email })}
                                    />
                                </Item>
                                <Item stackedLabel last>
                                    <Label>Password</Label>
                                    <Input
                                        secureTextEntry={true}
                                        keyboardType={'numeric'}
                                        value={this.state.password}
                                        onChangeText={password => this.setState({ password })}
                                    />
                                </Item>
                            </Form>

                            <Card >
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
                                            Log In
                                        </Button>
                                    ) : (
                                            <Spinner size='large' />
                                        )}
                                </CardSection>
                                <CardSection>
                                    <Button onPress={this.Cancel.bind(this)} >
                                        Cancel
                                    </Button>
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
                        </Content>
                    )}
            </Container>
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
        auth: state.AuthReducer.auth,
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