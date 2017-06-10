import React,{Component} from 'react';
import { View } from 'react-native';
import LoginForm from './loginForm'
import {Header} from './Components/Common';


const styles={
    login:{
        flex:1,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#7bdcb5',
    }
}

class Login extends Component{
    render(){
        return(
            <View style={styles.login}>
                {/*<Header headerText='Inventory'/>*/}
                <LoginForm/>
            </View>
        );
    }
}

export default Login;