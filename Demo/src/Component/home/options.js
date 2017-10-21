import React, { Component } from 'react';
import { View, Text, StyleSheet, BackAndroid, AsyncStorage } from 'react-native';
import { Button, Card, CardSection } from '../Common'
import { Actions } from 'react-native-router-flux';


class Options extends Component {
    constructor(props) {
        super(props);
        this.ButtonLogIn = this.ButtonLogIn.bind(this);
        this.about = this.about.bind(this);
        this.exit = this.exit.bind(this);

    }
    ButtonLogIn() {
        // console.log("Login here");
        var STORAGE_KEY = '@AsyncStorageExample:key';
        AsyncStorage.getItem(STORAGE_KEY).then((value) => {
            // console.log("result---1",value)
            
            if (value) {
            // console.log("result---2",value)
            
            //     // result = JSON.parse(result);
                Actions.maphome();                    
            } else {
                Actions.login();
                // console.log("result null",value)
            //     //     console.log("result empty",result)
            }
        })
    }
    about() {
        // console.log("About here");
        Actions.about();
    }
    exit() {
        // console.log("exit here");
        BackAndroid.exitApp();
    }
    render() {
        return (
            <View>
                <Card>
                    <CardSection>
                        <Button onPress={this.ButtonLogIn}>
                            <Text>LogIn</Text>
                        </Button>
                    </CardSection>
                    <CardSection>
                        <Button onPress={this.about}>
                            <Text>About</Text>
                        </Button>
                    </CardSection>
                    <CardSection>
                        <Button onPress={this.exit}>
                            <Text>Exit</Text>
                        </Button>
                    </CardSection>
                </Card>
            </View>
        );
    }
}

export default Options;