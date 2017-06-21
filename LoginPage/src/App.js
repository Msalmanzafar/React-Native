import React from 'react';

import {View,Text,StyleSheet,Image} from 'react-native';
import Login from './Component/Auth/Login';
import Logos from './images/logo.png'
class MyApp extends React.PureComponent{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Text style={styles.name}>Inventory Store</Text>
                    <Image style={styles.logo} source={Logos}/>
                    {/*<Text style={styles.login}>Log In</Text>*/}
                </View>
                <Login />
            </View>
        );
    }
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#00bcd4'
    },
    name:{
        color:'white', 
        fontSize:28,
        paddingBottom: 20,
        
    },
    login:{
        color:'white', 
        fontSize:20,
        opacity: 0.7
    },
    logoContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        marginBottom: 10
    },
    logo:{
        width: 100,
        height: 100
    }
})
export default MyApp;