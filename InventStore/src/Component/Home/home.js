// import React from 'react';
// import {View,StyleSheet,Text} from 'react-native';
// import {} from 'native-base'
// class Home extends React.PureComponent{
//     render(){
//         return(
//             <View style={styles.container}>
//                 <Text>Now Get Home</Text>
//             </View>
//         )
//     }
// }
// const styles= StyleSheet.create({
//     container:{
//         flex:1,
//         backgroundColor: '#00bcd4'
//     }
// })
// export default Home;


import { View, Text,StyleSheet } from 'react-native';
import React from 'react';
import { Container, Content, Tab, Tabs, Header, TabHeading, Icon } from 'native-base';
import Tab1 from '../tab1/firstTab'
import Tab2 from '../tab2/secondTab'
import Tab3 from '../tab3/thirdTab'


class Home extends React.PureComponent {
    render() {
        return (
                
            <Container >

                <Tabs >
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
export default Home;