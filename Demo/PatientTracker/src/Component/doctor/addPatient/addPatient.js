import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Keyboard } from 'react-native';
import { Button, Card, CardSection, Input, Spinner, Header } from '../../Common';
import { Actions } from 'react-native-router-flux';

class AddPatients extends React.PureComponent {
    state = {
        Name: '',
        FatherName: '',

    };


    render() {
        return (
            <View>
                <Card >
                    {/* <Header headerText='Add Patient' /> */}
                    <CardSection>
                        <Input
                            placeholder='Name'
                            label='Name'
                            keyboardType={'text'}
                            value={this.state.Name}
                            onChangeText={Name => this.setState({ Name })}
                        />
                    </CardSection>
                </Card>
            </View>

        );
    }
}
const styles = {
    errorStyle: {
        fontSize: 16,
        alignSelf: 'center',
        color: 'red',
        margin: 12
    }
}
export default AddPatients;