import React,{Component} from 'react';

import { View } from 'react-native';
import AboutComp from './AboutComp';

const styles={
    about:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7bdcb5',
    }
}

class AboutUs extends Component{
    render(){
        return(
            <View style={styles.about}>
                <AboutComp/>
            </View>
        );
    }
}

export default AboutUs;