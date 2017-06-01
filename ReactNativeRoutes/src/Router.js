import React, { Component } from 'react';
// import {Header} from './Components/Common';
import { Text } from 'react-native';

import { Router, Scene } from 'react-native-router-flux';
import Login from './Components/auth/loginForm'
import AboutUs from './Components/About/aboutUs'

// const styles = {
//     tabbar: {
//         backgroundColor: '#7bdcb5'
//     }
// }

// Simple component to render something in place of icon
// const TabIcon = ({ selected, title }) => {
//   return (
//     <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
//   );
// }

class Routers extends Component {
    render() {
        return (
            <Router sceneStyle={{ paddingTop: 50 }}>
                <Scene key='Auth'>
                    <Scene key="login" component={Login} title="Please Login" />
                </Scene>
                <Scene key='main'>
                    <Scene key="aboutUs" component={AboutUs} title="About-Us" />
                </Scene>

            </Router>
        );
    }
}

export default Routers;



 /*<Scene key='root'>
                    <Scene
                        key='tabbar'
                        tabs={true}
                        style={styles.tabbar}
                    >
                        <Scene key='Working' title='About' icon={TabIcon}>
                            <Scene
                                key="Header"
                                component={LogInForm}
                                title='Login'
                                initial
                                
                            />
                            <Scene
                                key='about'
                                component={AboutUs}
                                title="About"
                                
                            />
                        </Scene>
                    </Scene>

                </Scene>*/