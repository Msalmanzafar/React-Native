import React, { Component } from 'react';
import { Text } from 'react-native';
import { EndCardSection } from '../Common';
import { SignInAction, LogOutAction } from '../../Actions/AuthAction';
import { connect } from 'react-redux';
import { Container, Card, CardItem, Body, Content, Form, Item, Input, Label, Spinner, Button } from 'native-base';

const styles = {
    errorStyle: {
        fontSize: 18,
        alignSelf: 'center',
        color: 'red',
    },
    login: {
        color: 'white',
        fontSize: 20,

    },

}

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.ButtonLogIn = this.ButtonLogIn.bind(this);
        // this.ButtonLogOut = this.ButtonLogOut.bind(this);
    }
    state = {
        email: '',
        password: '',
        errorMessages: '',
    }

    ButtonLogIn() {
        let email = this.state.email;
        let password = this.state.password;
        let userLogin = {
            email: email,
            password: password,
        };
        // console.log("user authentication", userLogin);
        this.props.SignInAction(userLogin);
    }

    render() {
        const {
            auth,
            loader,
            errorMessage
        } = this.props;

        console.log("user authentication", auth);

        return (
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Email</Label>
                            <Input
                                value={this.state.email}
                                onChangeText={email => this.setState({ email })}
                                underlineColorAndroid='white'
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input
                                secureTextEntry
                                value={this.state.password}
                                onChangeText={password => this.setState({ password })}
                            />
                        </Item>
                        {(loader === true) ? (
                            <Content>
                                <Spinner color='green' />
                            </Content>
                        ) : (
                                <Content>
                                    <Button style={{ marginTop: 35 }} block success onPress={this.ButtonLogIn}>
                                        <Text style={styles.login}>
                                            Log In
                                        </Text>
                                    </Button>
                                </Content>
                            )}
                        {(errorMessage) ? (
                            <EndCardSection >
                                <Text style={styles.errorStyle}>
                                    {this.props.errorMessage}
                                </Text>
                            </EndCardSection>

                        ) : (
                                <Content>
                                    <Text>{this.state.errorMessages}</Text>
                                </Content>
                            )}
                    </Form>
                </Content>
            </Container>

        );
    }
}


const mapStateToProps = (state) => {
    return {
        auth: state.AuthReducer.authLogOut,
        // userEmail: state.AuthReducer.authSignIn,
        loader: state.AuthReducer.loader,
        errorMessage: state.AuthReducer.authErrors,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        SignInAction: (userLogin) => {
            dispatch(SignInAction(userLogin));
        },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

