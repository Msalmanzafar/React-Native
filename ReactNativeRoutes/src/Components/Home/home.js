import React,{Component} from 'react';
import { View } from 'react-native';
import HomeComp from './homeComp';

const styles={
    about:{
        flex:1,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#7bdcb5',
    }
}

class Home extends Component{
    render(){
        return(
            <View style={styles.about}>
                <HomeComp/>
            </View>
        );
    }
}

export default Home;