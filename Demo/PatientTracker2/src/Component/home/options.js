import React, { Component } from 'react';
import { View, Text, StyleSheet,BackAndroid } from 'react-native';
import { Button, Card, CardSection } from '../Common'
import { Actions } from 'react-native-router-flux';


class Options extends Component {
    constructor(props) {
        super(props);
        this.ButtonLogIn = this.ButtonLogIn.bind(this);
        this.about = this.about.bind(this);
        this.exit = this.exit.bind(this);

    }
    ButtonLogIn() {
        // console.log("Login here");
        Actions.login();
    }
    about() {
        // console.log("About here");
        Actions.about();
    }
    exit() {
        // console.log("exit here");
        BackAndroid.exitApp();
    }
    render() {
        return (
            <View>
                <Card>
                    <CardSection>
                        <Button onPress={this.ButtonLogIn}>
                            <Text>LogIn</Text>
                        </Button>
                    </CardSection>
                    <CardSection>
                        <Button onPress={this.about}>
                            <Text>About</Text>
                        </Button>
                    </CardSection>
                    <CardSection>
                        <Button onPress={this.exit}>
                            <Text>Exit</Text>
                        </Button>
                    </CardSection>
                </Card>
            </View>
        );
    }
}

export default Options;