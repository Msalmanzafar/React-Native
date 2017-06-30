import React from 'react';
import {View,StyleSheet} from 'react-native';
import Authentication from './Component/Auth/auth';
class MyApp extends React.PureComponent{
    render(){
        return(
            <View style={styles.container}>
                <Authentication/>
            </View>
        )
    }
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#00bcd4'
    }
})
export default MyApp;