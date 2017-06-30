import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import Authentication from './Component/Auth/auth';
class Home extends React.PureComponent{
    render(){
        return(
            <View style={styles.container}>
                <Text>Now Get Home</Text>
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
export default Home;