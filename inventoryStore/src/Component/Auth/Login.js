import React from 'react';

import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Content, Button } from 'native-base';
import { SignInAction } from '../../Actions/AuthAction';
import { connect } from 'react-redux';
class Login extends React.PureComponent {
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
        console.log("user authentication", userLogin);
        this.props.SignInAction(userLogin);
    }
    render() {
        const {
            auth,
            // loader,
            // errorMessage
        } = this.props;
        return (
            <View style={styles.form}>
                        <Content style={styles.round}>
                            <TextInput
                                placeholder='Email'
                                placeholderTextColor='#808080'
                                style={styles.input}
                                onSubmitEditing={() => this.passwordInput.focus()}
                                keyboardType='email-address'
                                autoCapitalize='none'
                                autoCorrect={false}
                                value={this.state.email}
                                onChangeText={email => this.setState({ email })}
                            />
                        </Content>
                        <Content style={styles.round}>
                            <TextInput
                                placeholder='Password'
                                placeholderTextColor='#808080'
                                style={styles.input}
                                secureTextEntry
                                ref={(input) => this.passwordInput = input}
                                value={this.state.password}
                                onChangeText={password => this.setState({ password })}
                            />
                        </Content>
                        <Content style={styles.button}>
                            <Button block rounded onPress={this.ButtonLogIn}>
                                <Text style={styles.buttonText}>LOGIN</Text>
                            </Button>
                        </Content>
               
            </View>
        );
    }
}
const styles = StyleSheet.create({
    input: {
        color: 'black',
        fontSize: 18,
        width: 280,
        paddingHorizontal: 4
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 310,
        // marginTop: 10,
        marginBottom: 30,

    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    round: {
        borderBottomWidth: 1,
        borderColor: '#d9d9d9',
        position: 'relative',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 50,
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 10,
        shadowColor: '#e6e6e6',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 1,
    },
    form: {
        justifyContent: 'center',
        alignItems: 'center',

    }
});
const mapStateToProps = (state) => {
    return {
        auth: state.AuthReducer.authLogOut,
        // userEmail: state.AuthReducer.authSignIn,
        // loader: state.AuthReducer.loader,
        // errorMessage: state.AuthReducer.authErrors,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        SignInAction: (userLogin) => {
            dispatch(SignInAction(userLogin));
        },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);