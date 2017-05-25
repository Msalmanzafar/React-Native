import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from '../Common';
import { SignInAction, LogOutAction } from '../../Actions/AuthAction';
import { connect } from 'react-redux';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.ButtonLogIn = this.ButtonLogIn.bind(this);
        this.ButtonLogOut = this.ButtonLogOut.bind(this);
    }
    state = {
        email: '',
        password: '',
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
    ButtonLogOut() {
        this.props.LogOutAction();
    }
    render() {
        const {
            auth,
            userEmail
        } = this.props;


        return (
            <Card>
                {(auth === false) ? (
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
                        < CardSection >
                            <Button onPress={this.ButtonLogIn}>
                                Log In
                            </Button>
                        </CardSection>
                    </Card>
                ) : (
                        <Card>
                            <CardSection>
                                <Button onPress={this.ButtonLogOut}>
                                    Log Out
                                </Button>
                            </CardSection>
                            <CardSection>
                                <Text>{this.props.userEmail.email}</Text>
                            </CardSection>
                        </Card>
                    )}

            </Card>
        );
    }
}
// const styles = {
//     errorStyle: {
//         fontSize: 20,
//         alignSelf: 'center',
//         color: 'red',
//     }
// }

const mapStateToProps = (state) => {
    return {
        auth: state.AuthReducer.authLogOut,
        userEmail: state.AuthReducer.authSignIn,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        SignInAction: (userLogin) => {
            dispatch(SignInAction(userLogin));
        },
        LogOutAction: () => {
            dispatch(LogOutAction());
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

// export default LoginForm;