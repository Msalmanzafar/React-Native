import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Card, CardSection,Header } from '../Common'
import { LogOutAction } from '../../Action/auth-action'
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';


class Doctor extends Component {

    AddPatient(){
        Actions.addpatient();
    }
    logOut(){
        this.props.LogOutAction()
    }
    render() {
        return (
            <View>
                 <Header headerText='Medico'/> 
                <Card>
                    <CardSection>
                        <Button onPress={this.AddPatient.bind(this)} >
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
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Doctor);
// export default Doctor;