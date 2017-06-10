import React, { Component } from 'react';
// import {Header} from './Components/Common';
// import { Text } from 'react-native';

import { Router, Scene,Actions } from 'react-native-router-flux';
import Login from './Components/auth/login'
import Home from './Components/Home/home'
import NewStore from './Components/CreateStore/newStore' 


class Routers extends Component {
    render() {
        return (
            <Router sceneStyle={{ paddingTop: 50 }}>
                <Scene key='Auth'>
                    <Scene key="login" component={Login} hideNavBar />
                </Scene>
                <Scene key='main'>
                    <Scene 
                        onRight={()=> Actions.newStore()}
                        rightTitle='Add'
                        key="aboutUs" 
                        component={Home} 
                        hideNavBar 
                    />
                    <Scene key='newStore' component={NewStore} hideNavBar/>
                </Scene>

            </Router>
        );
    }
}

export default Routers;
