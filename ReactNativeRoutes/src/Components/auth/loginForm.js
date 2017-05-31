import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, MainCard, CardSection, HeadingBar, Input, Spinner, EndCardSection } from '../Common';

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
        console.log("user authentication", userLogin);
    }
    ButtonLogOut() {
        console.log("LogOut Click");

    }
    render() {

        return (
            <MainCard>

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

                    <EndCardSection >
                        <Button onPress={this.ButtonLogIn}>
                            Log In
                        </Button>
                    </EndCardSection>
                </Card>

            </MainCard>
        );
    }
}


export default LogInForm;