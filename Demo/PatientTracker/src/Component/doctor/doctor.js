import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Card, CardSection,Header } from '../Common'
// import {Button} from 'native-basse'

class Doctor extends Component {
    
    render() {
        return (
            <View>
                {/* <Header headerText='Doctor'/> */}
                <Card>
                    <CardSection>
                        <Button danger>
                            <Text>Add Patient</Text>
                        </Button>
                    </CardSection>
                    <CardSection>
                        <Button onPress={this.ButtonLogIn}>
                            <Text>Patient Details</Text>
                        </Button>
                    </CardSection>
                    <CardSection>
                        <Button onPress={this.ButtonLogIn}>
                            <Text>Profile</Text>
                        </Button>
                    </CardSection>
                </Card>
            </View>
        );
    }
}

export default Doctor;