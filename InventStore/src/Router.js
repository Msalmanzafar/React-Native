import React from 'react';
import { Scene, Router } from 'react-native-router-flux'
import Authentication from './Component/Auth/auth';
import Home from './Component/Home/home';

const styles = {
    homePage:{
        backgroundColor: '#00bcd4',
    },
    titleHome:{
        color: '#000',
        // fontSize: 16,

    }
}
class Routers extends React.PureComponent {
    render() {
        return (
            <Router sceneStyle={{ paddingTop: 50 }}>
                <Scene key='main'>
                    <Scene
                        key='homes'
                        component={Home}
                        navigationBarStyle={styles.homePage}
                        titleStyle={styles.titleHome}
                        title='Inventory Store'
                    />
                </Scene>
                <Scene key='Auth'>
                    <Scene
                        key='Login'
                        component={Authentication}
                        hideNavBar
                    />
                </Scene>
                {/*<Scene key='main'>
                    <Scene
                        key='homes'
                        component={Home}
                        hideNavBar
                    />
                </Scene>*/}
            </Router>
        );
    }
}

export default Routers;