import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Keyboard, AsyncStorage,Alert } from 'react-native';
import { Button, Card, CardSection, Spinner, Header } from '../../Common';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Item, Form, Label, Input } from 'native-base'

import {NewPatientAdd} from '../../../Action/PatientDetails'
import { connect } from 'react-redux';




class AddPatients extends React.PureComponent {
    state = {
        PName: '',
        FatherName: '',
        Age: '',
        Dates: '',
        TREATMENT: '',
        OPD: '',


    };
    addPatients() {
        let PName = this.state.PName;
        let FatherName = this.state.FatherName;
        let Age = this.state.Age;
        let Dates = this.state.Dates;
        let TREATMENT = this.state.TREATMENT;
        let OPD = this.state.OPD;

        let PatientInfo = {
            PName: PName,
            FatherName: FatherName,
            Age: Age,
            Date: Dates,
            TREATMENT: TREATMENT,
            OPD: OPD
        };
        this.props.NewPatientAdd(PatientInfo);
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
                            <Label>Age</Label>
                            <Input
                                value={this.state.Age}
                                onChangeText={Age => this.setState({ Age })}
                            />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Date</Label>
                            <Input
                                value={this.state.Dates}
                                onChangeText={Dates => this.setState({ Dates })}
                            />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Treatment</Label>
                            <Input
                                value={this.state.TREATMENT}
                                onChangeText={TREATMENT => this.setState({ TREATMENT })}
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
const mapStateToProps = (state) => {
    return {
        auth: state.AuthReducer,
        // ErrorMessage: state.AuthReducer.ErrorMess,
        // loader: state.AuthReducer.loading,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        NewPatientAdd: (PatientInfo) => {
            dispatch(NewPatientAdd(PatientInfo));
        },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(AddPatients);
// export default AddPatients;

