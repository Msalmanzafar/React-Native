import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Keyboard, AsyncStorage, Alert } from 'react-native';
import { Button, Card, CardSection, Spinner, Header } from '../../Common';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Item, Form, Label, Input } from 'native-base'

import { NewPatientAdd } from '../../../Action/PatientDetails'
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker';



class AddPatients extends React.PureComponent {
    componentWillMount() {
        console.disableYellowBox = true
    }
    state = {
        PName: '',
        FatherName: '',
        Age: '',
        date: "01-08-2017",
        TREATMENT: '',
        OPD: '',


    };
    addPatients() {
        let PName = this.state.PName;
        let FatherName = this.state.FatherName;
        let Age = this.state.Age;
        let date = this.state.date;
        let TREATMENT = this.state.TREATMENT;
        let OPD = this.state.OPD;

        let PatientInfo = {
            PName: PName,
            FatherName: FatherName,
            Age: Age,
            Date: date,
            TREATMENT: TREATMENT,
            OPD: OPD
        };
        this.props.NewPatientAdd(PatientInfo);
    }

    render() {
        const {
            loader,
            Error
        } = this.props;
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
                                keyboardType={'numeric'}
                                value={this.state.Age}
                                onChangeText={Age => this.setState({ Age })}
                            />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Date</Label>
                            <DatePicker
                                style={{ width: 300 }}
                                date={this.state.date}
                                mode="date"
                                placeholder="select date"
                                format="DD-MM-YYYY"
                                minDate="01-08-2017"
                                maxDate="01-06-2022"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        left: 0,
                                        top: 4,
                                        marginLeft: 0
                                    },
                                    dateInput: {
                                        marginLeft: 36
                                    }
                                }}
                                onDateChange={(date) => { this.setState({ date: date }) }}
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
                <View >
                    {(!Error) ? (
                        <Text></Text>
                    ) : (
                            <Text style={{ color: '#f44336', fontSize: 20, textAlign: 'center' }}>
                                {Error}
                            </Text>
                        )}
                </View>

                <CardSection>
                    {(!this.props.loader) ? (
                        <Button onPress={this.addPatients.bind(this)}>
                            <Text>Add Patient</Text>
                        </Button>
                    ) : (
                            <Spinner size='large' />
                        )}

                </CardSection>
            </Container>

        );
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.AuthReducer,
        loader: state.DetailsReducers.Load,
        Error: state.DetailsReducers.Error,
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

