import React, { Component } from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import Welcome from './component/Welcome/welcome';
import Links from './component/Links/links';
import Google from './component/Web/google';
import LinkedIn from './component/Web/linkedin';
import Facebook from './component/Web/facebook';


class Routers extends Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene
                        key="welcome"
                        component={Welcome}
                        hideNavBar
                    />
                    <Scene
                        key="links"
                        component={Links}
                        title='Links'
                        titleStyle={{color: 'white'}}
                        navigationBarStyle={{backgroundColor: '#03a9f4'}}
                    />
                     <Scene
                        key="google"
                        component={Google}
                        title='Google'
                        titleStyle={{color: 'white'}}
                        navigationBarStyle={{backgroundColor: '#03a9f4'}}
                    />
                    <Scene
                        key="likedin"
                        component={LinkedIn}
                        title='Linkedin'
                        titleStyle={{color: 'white'}}
                        navigationBarStyle={{backgroundColor: '#03a9f4'}}
                    />
                    <Scene
                        key="facebook"
                        component={Facebook}
                        title='Facebook'
                        titleStyle={{color: 'white'}}
                        navigationBarStyle={{backgroundColor: '#03a9f4'}}
                    />
                </Stack>
            </Router>
        );
    }
};

export default Routers;