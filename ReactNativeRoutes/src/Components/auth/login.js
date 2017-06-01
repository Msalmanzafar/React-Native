import React,{Component} from 'react';
import { View } from 'react-native';
import LoginForm from './loginForm'

const styles={
    login:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7bdcb5',
    }
}

class Login extends Component{
    render(){
        return(
            <View style={styles.login}>
                <LoginForm/>
            </View>
        );
    }
}

export default Login;