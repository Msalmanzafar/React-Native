import React,{Component} from 'react';
import {View} from 'react-native';
import LoginForm from './loginForm';
// import {Header} from '../Common'


const styles={
    login:{
        flex:1,
        justifyContent: 'center',
        backgroundColor: '#000000'
    }
}
class LoginCompo extends Component{
    render(){
        return(
            <View style={styles.login}>
                <LoginForm/>
            </View>
        )
    }
}

export default LoginCompo;