import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, MainCard, CardSection, HeadingBar, Input, Spinner, EndCardSection } from '../Common';
import { SignInAction, LogOutAction } from '../../Actions/AuthAction';
import { connect } from 'react-redux';
import HomePage from '../Home/home';

const styles = {
    errorStyle: {
        fontSize: 16,
        alignSelf: 'center',
        color: '#f44336',
    },
    FormHeading: {
        fontSize: 22,
        alignSelf: 'center',
        color: '#ffff',

    },
}

class LogInForm extends Component {
    constructor(props) {
        super(props);
        this.ButtonLogIn = this.ButtonLogIn.bind(this);
        this.ButtonLogOut = this.ButtonLogOut.bind(this);
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
    ButtonLogOut() {
        this.props.LogOutAction();
    }
    render() {
        const {
            auth,
            loader,
            errorMessage
        } = this.props;


        return (
            <MainCard>

                {(auth === false) ? (
                    <Card>
                        <HeadingBar >
                            <Text style={styles.FormHeading}>
                                Log In
                            </Text>
                        </HeadingBar>
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
                        {(loader === true) ? (
                            <EndCardSection>
                                <Spinner size='large' />
                            </EndCardSection>
                        ) : (
                                <EndCardSection >
                                    <Button onPress={this.ButtonLogIn}>
                                        Log In
                                    </Button>
                                </EndCardSection>
                            )}
                        {(errorMessage) ? (
                            <CardSection>
                                <Text style={styles.errorStyle}>
                                    {this.props.errorMessage}
                                </Text>
                            </CardSection>
                        ) : (
                                <Text>{this.state.errorMessages}</Text>
                            )}

                    </Card>
                ) : (
                        <Card>
                            <HomePage />
                        </Card>
                    )
                }

            </MainCard>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        auth: state.AuthReducer.authLogOut,
        userEmail: state.AuthReducer.authSignIn,
        loader: state.AuthReducer.loader,
        errorMessage: state.AuthReducer.authErrors,
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
export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);

// export default LoginForm;