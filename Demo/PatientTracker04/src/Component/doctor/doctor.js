import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button, Card, CardSection, Header } from '../Common'
import { LogOutAction } from '../../Action/auth-action'
import { PatientDetailsAction } from '../../Action/PatientDetails'
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import Logos from '../images/doctor.png'


const styles = {
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        marginTop: 15,
        marginBottom: 0
    },
    logo: {
        width: 100,
        height: 100
    }
}

class Doctor extends Component {

    AddPatient() {
        Actions.addpatient();
    }
    PDetails() {
       this.props.PatientDetailsAction();
        Actions.patientsDetails();
    }
    logOut() {
        this.props.LogOutAction()
    }
    render() {
        return (
            <View>
                <Header headerText='Medico' />
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={Logos} />
                </View>
                <Card>
                    <CardSection>
                        <Button onPress={this.AddPatient.bind(this)} >
                            <Text>Add Patient</Text>
                        </Button>
                    </CardSection>
                    <CardSection>
                        <Button onPress={this.PDetails.bind(this)}>
                            <Text>Patient Details</Text>
                        </Button>
                    </CardSection>
                    {/* <CardSection>
                        <Button onPress={this.ButtonLogIn}>
                            <Text>Profile</Text>
                        </Button>
                    </CardSection> */}
                    <CardSection>
                        <Button onPress={this.logOut.bind(this)}>
                            <Text>Log Out</Text>
                        </Button>
                    </CardSection>
                </Card>
            </View>
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
        LogOutAction: () => {
            dispatch(LogOutAction());
        },
        PatientDetailsAction: ()=>{
            dispatch(PatientDetailsAction())
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Doctor);
// export default Doctor;