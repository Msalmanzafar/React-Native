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
import AddPatients from './Component/doctor/addPatient/addPatient'

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
                        key='about'
                        component={About}
                        title='About'
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
