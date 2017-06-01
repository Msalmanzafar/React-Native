import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner, EndCardSection } from '../Common';
import { SignInAction, LogOutAction } from '../../Actions/AuthAction';
import { connect } from 'react-redux';

const styles = {
    errorStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
    }
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
        // LogOutAction: () => {
        //     dispatch(LogOutAction());
        // }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

// export default LoginForm;