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
import TrackerMap from './Component/Map/trackMap';
import Settings from './Component/Settings/setting';
import NewCircle from './Component/Settings/newCircle';
import Groups from './Component/Settings/groups';
import Join from './Component/Settings/GroupJoin'
import AdminRights from './Component/Settings/AdminRights';

class Routers extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyAf0Ijnx0Ri6op4jRbDaFA26Yb6i6_zzq4",
            authDomain: "gprs-tracker-28f2b.firebaseapp.com",
            databaseURL: "https://gprs-tracker-28f2b.firebaseio.com",
            projectId: "gprs-tracker-28f2b",
            storageBucket: "gprs-tracker-28f2b.appspot.com",
            messagingSenderId: "513537642472"
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
                        key='login'
                        component={Login}
                        title='Log In'
                        titleStyle={{ color: '#ffffff' }}
                        navigationBarStyle={{ backgroundColor: '#3d4cae' }}
                    />
                    <Scene
                        key='signup'
                        component={SignUp}
                        title='Sign Up'
                        titleStyle={{ color: '#ffffff' }}
                        navigationBarStyle={{ backgroundColor: '#3d4cae', }}
                    />
                     <Scene
                        key='maphome'
                        component={MapHome}
                        hideNavBar
                    />
                    <Scene
                        key='tracking'
                        component={TrackerMap}
                        title='Group Location'
                        titleStyle={{ color: '#ffffff' }}
                        navigationBarStyle={{ backgroundColor: '#3d4cae', }}
                    />
                    <Scene
                        key='settings'
                        component={Settings}
                        title='Settings'
                        titleStyle={{ color: '#ffffff' }}
                        navigationBarStyle={{ backgroundColor: '#3d4cae', }}
                    />
                    <Scene
                        key='groups'
                        component={Groups}
                        title='Groups'
                        titleStyle={{ color: '#ffffff' }}
                        navigationBarStyle={{ backgroundColor: '#3d4cae', }}
                    />
                    <Scene
                        key='groupJoin'
                        component={Join}
                        hideNavBar
                    />
                    <Scene 
                        key='adminright'
                        component={AdminRights}
                        hideNavBar
                    />
                    <Scene
                        key='circle'
                        component={NewCircle}
                        title='New Circle'
                        titleStyle={{ color: '#ffffff' }}
                        navigationBarStyle={{ backgroundColor: '#3d4cae', }}
                    />
                    <Scene
                        key='about'
                        component={About}
                        title='About'
                        titleStyle={{ color: '#ffffff' }}
                        navigationBarStyle={{ backgroundColor: '#3d4cae' }}
                    />
                </Scene>


            </Router>
        );
    }
}

export default Routers;
