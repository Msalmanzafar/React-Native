import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Card, CardSection } from '../Common'


class Options extends Component {
    constructor(props) {
        super(props);
        this.ButtonLogIn = this.ButtonLogIn.bind(this);
        this.doctor = this.doctor.bind(this);
        this.patient = this.patient.bind(this);
        this.about = this.about.bind(this);
        this.exit = this.exit.bind(this);

    }
    ButtonLogIn() {
        console.log("Login here");
    }
    doctor() {
        console.log("Doctor here");

    }
    patient() {
        console.log("Patient here");

    }
    about() {
        console.log("About here");

    }
    exit() {
        console.log("exit here");

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
                        <Button onPress={this.doctor}>
                            <Text>Doctor</Text>
                        </Button>
                    </CardSection>
                    <CardSection>
                        <Button onPress={this.patient}>
                            <Text>Patient</Text>
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

export default Options