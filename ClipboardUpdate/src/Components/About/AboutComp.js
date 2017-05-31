import React,{Component} from 'react';

import { Text } from 'react-native';
import { Button, Card, MainCard, CardSection, HeadingBar, Input, Spinner, EndCardSection } from '../Common';



class AboutComp extends Component{
    render(){
        return(
            <MainCard>
                <Card>
                    <Text>
                        This main new App
                    </Text>
                </Card>
            </MainCard>
        );
    }
}

export default AboutComp;