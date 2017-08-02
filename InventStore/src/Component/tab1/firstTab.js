import React from 'react';
// import {View,Text,StyleSheet} from 'react-native';
import { Container, Content,Card,CardItem,Body,Text } from 'native-base';

class Tab1 extends React.PureComponent {
    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem header>
                            <Text>NativeBase</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>        
                                //Your text here
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem footer>
                            <Text>GeekyAnts</Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
};

export default Tab1;
