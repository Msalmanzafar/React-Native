import React, { Component } from 'react';
// import {Header} from './Components/Common';
// import { Text } from 'react-native';
import * as firebase from 'firebase';

import { Router, Scene, Actions } from 'react-native-router-flux';
import MyHome from './Component/home/home';
import Login from './Component/login/login'
import SignUp from './Component/login/signup'
import About from './Component/about/about'
import MapHome from './Component/Map/mapHome';

class Routers extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyBhQyKvqvTYJLJQj5BpZTVPfm6jClHWPyw",
            authDomain: "touristguide-aa676.firebaseapp.com",
            databaseURL: "https://touristguide-aa676.firebaseio.com",
            projectId: "touristguide-aa676",
            storageBucket: "touristguide-aa676.appspot.com",
            messagingSenderId: "301170801907"
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
                        key='maphome'
                        component={MapHome}
                        hideNavBar
                    />
                    {/*<Scene
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

                    /> */}
                    <Scene
                        key='about'
                        component={About}
                        title='About'
                        titleStyle={{ color: '#ffffff' }}
                        navigationBarStyle={{ backgroundColor: '#32bea6' }}
                    />
                </Scene>


            </Router>
        );
    }
}

export default Routers;
