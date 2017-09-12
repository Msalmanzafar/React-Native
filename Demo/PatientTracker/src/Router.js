import React, { Component } from 'react';
// import {Header} from './Components/Common';
// import { Text } from 'react-native';
import * as firebase from 'firebase';

import { Router, Scene, Actions } from 'react-native-router-flux';
import MyHome from './Component/home/home';
import Doctor from './Component/doctor/doctor';
import Login from './Component/login/login'
import SignUp from './Component/login/signup'
import About from './Component/about/about'
import AddPatients from './Component/doctor/addPatient/addPatient';
import PatientDetails from './Component/doctor/PDetails/patientsDetails'
import SearchByDates from './Component/doctor/Search/byDates'
import SearchByNames from './Component/doctor/Search/byNames'


class Routers extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyArVpiyJ0wPxATriQBnPzvbCqjIBVWSppc",
            authDomain: "sky-auth.firebaseapp.com",
            databaseURL: "https://sky-auth.firebaseio.com",
            projectId: "sky-auth",
            storageBucket: "sky-auth.appspot.com",
            messagingSenderId: "936918632809"
        });
    }
    render() {
        return (
            <Router sceneStyle={{ paddingTop: 50 }}>
                <Scene key='main'>
                    <Scene
                        key="home"
                        component={MyHome}
                        hideNavBar
                    />
                    <Scene
                        hideNavBar
                        key='login'
                        component={Login}
                        navigationBarStyle={{ backgroundColor: '#32bea6' }}
                    />
                    <Scene
                        key='signup'
                        component={SignUp}
                        title='Sign Up'
                        titleStyle={{color: '#ffffff' }}
                        navigationBarStyle={{ backgroundColor: '#32bea6', }}
                    />
                    <Scene
                        key='doctor'
                        component={Doctor}
                        title='Doctor'
                        navigationBarStyle={{ backgroundColor: '#32bea6' }}
                    />
                    <Scene
                        key='addpatient'
                        component={AddPatients}
                        title='Add Patient'
                        navigationBarStyle={{ backgroundColor: '#32bea6' }}
                    />
                    <Scene
                        key='patientsDetails'
                        component={PatientDetails}
                        titleStyle={{color: '#ffffff' }}
                        title='Patient Details'
                        navigationBarStyle={{ backgroundColor: '#32bea6' }}
                    />
                    <Scene
                        key='searchbynames'
                        component={SearchByNames}
                        titleStyle={{color: '#ffffff' }}
                        title='Search By Names'
                        navigationBarStyle={{ backgroundColor: '#32bea6' }}
                    />
                    <Scene
                        key='searchbydates'
                        component={SearchByDates}
                        titleStyle={{color: '#ffffff' }}
                        title='Search By Dates'
                        navigationBarStyle={{ backgroundColor: '#32bea6' }}
                    />
                    <Scene
                        key='about'
                        component={About}
                        title='About'
                        titleStyle={{color: '#ffffff' }}
                        navigationBarStyle={{ backgroundColor: '#32bea6' }}
                    />
                </Scene>

            </Router>
        );
    }
}

export default Routers;
