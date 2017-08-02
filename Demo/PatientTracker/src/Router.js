import React, { Component } from 'react';
// import {Header} from './Components/Common';
// import { Text } from 'react-native';

import { Router, Scene,Actions } from 'react-native-router-flux';
import MyHome from './Component/home/home'

class Routers extends Component {
    render() {
        return (
            <Router sceneStyle={{ paddingTop: 50 }}>
                <Scene key='main'>
                    <Scene key="home" component={MyHome} hideNavBar />
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
