import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Keyboard } from 'react-native';
import { Button, Card, CardSection, Spinner, Header } from '../Common';
// import * as firebase from 'firebase';
import { ButtonSignUpAction } from '../../Action/auth-action'
import { connect } from 'react-redux';
import { Container, Content, Item, Form, Label, Input } from 'native-base'


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
            loader
        } = this.props;

        return (
            <Container>
                <Content>
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
                    <Text style={styles.errorStyle}>
                        {(ErrorMessage) ? (
                            <Text style={styles.errorStyle}>
                                {this.props.ErrorMessage}
                            </Text>

                        ) : (
                                <Text></Text>
                            )}
                    </Text>
                    <CardSection>
                        {(!this.props.loader) ? (
                            <Button onPress={this.ButtonSignUp.bind(this)} >
                                Sign Up
                                        </Button>
                        ) : (
                                <Spinner size='large' />

                            )}
                    </CardSection>
                </Card>
                </Content>
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