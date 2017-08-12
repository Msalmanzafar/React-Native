import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
// import { Button, Card, CardSection, Header } from '../Common'
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

// import Logos from '../images/doctor.png'



class PatientDetails extends Component {

    render() {
        const{
            Detail
        }= this.props;
        console.log("details",Detail)
        return (
            <View>
                <Text>Patient Details</Text>
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        Detail: state.DetailsReducers.PatientsDetails,
        // ErrorMessage: state.AuthReducer.ErrorMess,
        // loader: state.AuthReducer.loading,
    };
}
export default connect(mapStateToProps)(PatientDetails);
// export default Doctor;