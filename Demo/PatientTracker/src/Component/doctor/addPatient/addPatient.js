import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Keyboard, AsyncStorage, Alert } from 'react-native';
import { Button, Card, CardSection, Spinner, Header } from '../../Common';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Item, Form, Label, Input } from 'native-base'
import myDB from '../../AsynStorage/DataStorage'
var myDBInstance = new myDB();


class AddPatients extends React.PureComponent {
    state = {
        PName: '',
        FatherName: '',
        Phone: '',
        Email: '',
        City: '',
        Address: '',
        Age: '',
        DateOfBirth: '',
        Gender: '',
        OPD: '',


    };
    addPatients() {
        let PName = this.state.PName;
        let FatherName = this.state.FatherName;
        let Phone = this.state.Phone;
        let Email = this.state.Email;
        let City = this.state.City;
        let Address = this.state.Address;
        let Age = this.state.Age;
        let DateOfBirth = this.state.DateOfBirth;
        let Gender = this.state.Gender;
        let OPD = this.state.OPD;

        let PatientInfo = {
            PName: PName,
            FatherName: FatherName,
            Phone: Phone,
            Email: Email,
            City: City,
            Address: Address,
            Age: Age,
            DateOfBirth: DateOfBirth,
            Gender: Gender,
            OPD: OPD
        }

        let data = JSON.stringify(PatientInfo);
        myDBInstance.setTheItem(data.PName, data, function () {
            Alert.alert('Save', data + ' was saved!');
        }.bind(this));
    }

    render() {
        return (
            <Container >
                <Content>
                    <Form>
                        <Item stackedLabel last>
                            <Label>Patient Name</Label>
                            <Input
                                value={this.state.PName}
                                onChangeText={PName => this.setState({ PName })}
                            />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Father Name</Label>
                            <Input
                                value={this.state.FatherName}
                                onChangeText={FatherName => this.setState({ FatherName })}
                            />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Phone Number</Label>
                            <Input
                                value={this.state.Phone}
                                onChangeText={Phone => this.setState({ Phone })}
                            />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Email</Label>
                            <Input
                                value={this.state.Email}
                                onChangeText={Email => this.setState({ Email })}
                            />
                        </Item>
                        <Item stackedLabel last>
                            <Label>City</Label>
                            <Input
                                value={this.state.City}
                                onChangeText={City => this.setState({ City })}
                            />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Address</Label>
                            <Input
                                value={this.state.Address}
                                onChangeText={Address => this.setState({ Address })}
                            />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Age</Label>
                            <Input
                                value={this.state.Age}
                                onChangeText={Age => this.setState({ Age })}
                            />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Date of Birth</Label>
                            <Input
                                value={this.state.DateOfBirth}
                                onChangeText={DateOfBirth => this.setState({ DateOfBirth })}
                            />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Gender</Label>
                            <Input
                                value={this.state.Gender}
                                onChangeText={Gender => this.setState({ Gender })}
                            />
                        </Item>
                        <Item stackedLabel last>
                            <Label>OPD</Label>
                            <Input
                                value={this.state.OPD}
                                onChangeText={OPD => this.setState({ OPD })}
                            />
                        </Item>
                    </Form>
                </Content>
                <CardSection>
                    <Button onPress={this.addPatients.bind(this)}>
                        <Text>Add Patient</Text>
                    </Button>
                </CardSection>
            </Container>

        );
    }
}

export default AddPatients;