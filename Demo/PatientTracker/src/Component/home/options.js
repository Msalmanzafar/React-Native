import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Card, CardSection } from '../Common'


class Options extends Component {
    constructor(props) {
        super(props);
        this.ButtonLogIn = this.ButtonLogIn.bind(this);
        // this.DoctorPanel = this.DoctorPanel.bind(this);

    }
    ButtonLogIn() {
        console.log("Login here");
    }
    // Doctor() {
    //     console.log("DoctorPanel here");

    // }
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
                        <Button >
                            <Text>Doctor</Text>
                        </Button>
                    </CardSection>
                    <CardSection>
                        <Button >
                            <Text>Patient</Text>
                        </Button>
                    </CardSection>
                    <CardSection>
                        <Button >
                            <Text>About</Text>
                        </Button>
                    </CardSection>
                    <CardSection>
                        <Button >
                            <Text>Exit</Text>
                        </Button>
                    </CardSection>
                </Card>
            </View>
        );
    }
}

export default Options