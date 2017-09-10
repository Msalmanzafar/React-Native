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
            apiKey: "AIzaSyDU4bwm9vWFpx-skkNrL7g_oNFy4pmiISc",
            authDomain: "medico-4.firebaseapp.com",
            databaseURL: "https://medico-4.firebaseio.com",
            projectId: "medico-4",
            storageBucket: "medico-4.appspot.com",
            messagingSenderId: "936742386442"
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
                        titleStyle={{ color: '#ffffff' }}
                        navigationBarStyle={{ backgroundColor: '#32bea6', }}
                    />
                    <Scene
                        key='doctor'
                        component={Doctor}
                        hideNavBar
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
                        titleStyle={{ color: '#ffffff' }}
                        title='Patient Details'
                        navigationBarStyle={{ backgroundColor: '#32bea6' }}

                    />
                    <Scene
                        key='searchbydates'
                        component={SearchByDates}
                        titleStyle={{ color: '#ffffff' }}
                        title='Search By Date'
                        navigationBarStyle={{ backgroundColor: '#32bea6' }}

                    />
                    <Scene
                        key='searchbynames'
                        component={SearchByNames}
                        titleStyle={{ color: '#ffffff' }}
                        title='Search By Name'
                        navigationBarStyle={{ backgroundColor: '#32bea6' }}

                    />
                    <Scene
                        key='about'
                        component={About}
                        title='About'
                        titleStyle={{ color: '#ffffff' }}
                        navigationBarStyle={{ backgroundColor: '#32bea6' }}
                    />
                </Scene>

                {/* <Scene key='main'>
                    <Scene 
                        onRight={()=> Actions.newStore()}
                        rightTitle='Add'
                        key="aboutUs" 
                        component={Home} 
                        hideNavBar 
                    />
                    <Scene key='newStore' component={NewStore} hideNavBar/>
                </Scene> */}

            </Router>
        );
    }
}

export default Routers;
