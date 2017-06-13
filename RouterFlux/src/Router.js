import React from 'react';

import {Actions,Router,Scene} from 'react-native-router-flux';
import LoginCompo from './Component/Auth/Login';
import NewStores from './Component/NewStores/newStores';
import Home from './Component/HomePage/Home'

const styles={
    nav:{
        backgroundColor: '#00bcd4',
    },
    authNav:{
        backgroundColor: '#00bcd4',
    },
    newstore:{
        backgroundColor: '#fbc02d',
        
    }
}

class Routers extends React.PureComponent{

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
                    <Scene 
                        key='homes' 
                        component={Home} 
                        navigationBarStyle={styles.nav}
                        titleStyle={{color: 'white'}}
                        onRight={()=> Actions.newStore()}
                        rightTitle='Add'
                        title='Inventory Store'
                    />
                    
                    <Scene 
                        key='newStore' 
                        component={NewStores} 
                        title='Create Store' 
                        titleStyle={{color: 'white'}}
                        navigationBarStyle={styles.newstore}
                        
                    />
                </Scene>
            </Router>
        )
    }
}
export default Routers;
