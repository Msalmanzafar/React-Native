// import React, {Component} from 'react';

import {View,Text} from 'react-native';


// class NeweStores extends Component{
//     render(){
//         return(
//             <View>
//                 <Text>Make New Store</Text>
//             </View>
//         );
        
//     }
// }

// export default NeweStores;

import React, { Component } from 'react';
import { Container, Content, Tab, Tabs,Header,TabHeading,Icon } from 'native-base';
// import Tab1 from './tabOne';
// import Tab2 from './tabTwo';

const Tab1 = () =>{
    return(
        <View>
            <Text>Tab1 working</Text>
        </View>
    )
};

const Tab2 = () =>{
    return(
        <View>
            <Text>Tab2 working</Text>
        </View>
    )
};

const Tab3 = () =>{
    return(
        <View>
            <Text>Tab3 working</Text>
        </View>
    )
};

 class NeweStores extends Component {
    render() {
        return (
            <Container>
            
            <Tabs>
                <Tab heading="Tab1">
                    <Tab1 />
                </Tab>
                <Tab heading="Tab2">
                    <Tab2 />
                </Tab>
                <Tab heading="Tab3">
                    <Tab3 />
                </Tab>
            </Tabs>
            </Container>
        );
    }
}
export default NeweStores;