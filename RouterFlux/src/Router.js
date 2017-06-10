import React,{Component} from 'react';

import {Actions,Router,Scene} from 'react-native-router-flux';
import LoginCompo from './Component/Auth/Login';
import Home from './Component/Home/home';
import NeweStores from './Component/CreateStore/newStores'

const styles={
    nav:{
        backgroundColor: '#4caf50',
    },
    authNav:{
        backgroundColor: '#000000',
        
    }
}

class Routers extends Component{
    render(){
        return(
            <Router sceneStyle={{ paddingTop: 50 }} >
                <Scene key='Auth'>
                    <Scene 
                        key='Login' 
                        component={LoginCompo} 
                        title='Please Login'
                        titleStyle={{color: 'white'}}
                        navigationBarStyle={styles.authNav}
                    />
                </Scene>
                <Scene key='main'>
                    <Scene key='homes' component={Home} 
                        onRight={()=> Actions.newStore()}
                        rightTitle='Add'
                        title='Inventory Store'
                        titleStyle={{color: 'white'}}
                        navigationBarStyle={styles.nav}
                    />
                    <Scene key='newStore' component={NeweStores} title='Create Store' />
                </Scene>
            </Router>
        )
    }
}
export default Routers;
