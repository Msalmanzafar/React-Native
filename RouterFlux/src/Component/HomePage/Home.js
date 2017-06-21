
import { View, Text } from 'react-native';
import React from 'react';
import { Container, Content, Tab, Tabs, Header, TabHeading, Icon } from 'native-base';
import HomeComp from './homeComp';
// import ScrollableTabView from 'react-native-scrollable-tab-view'

const Tab1 = () => {
    return (
        <View>
            <Text>Tab1 working</Text>
        </View>
    )
};

const Tab2 = () => {
    return (
        <View>
            <Text>Tab2 working</Text>
        </View>
    )
};

const Tab3 = () => {
    return (
        <View>
            <Text>Tab3 working</Text>
        </View>
    )
};

class Home extends React.PureComponent {
    render() {
        return (
                
            <Container >

                <Tabs >
                    <Tab heading="Home"  style={{backgroundColor: '#8ed1fc'}}>
                        <HomeComp />
                    </Tab>
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