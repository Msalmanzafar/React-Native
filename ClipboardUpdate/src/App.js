/*import React, { Component } from 'react';
// import {Header} from './Components/Common';
import { Text } from 'react-native';

import { Router, Scene } from 'react-native-router-flux';
import LogInForm from './Components/auth/loginForm'
import AboutUs from './Components/About/aboutUs'

const styles = {
    tabbar: {
        backgroundColor: '#7bdcb5'
    }
}

// Simple component to render something in place of icon
const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
}

class App extends Component {
    render() {
        return (
            <Router>
                <Scene key='root'>
                    <Scene
                        key='tabbar'
                        tabs={true}
                        style={styles.tabbar}
                    >
                        <Scene key='Working' title='About' icon={TabIcon}>
                            <Scene
                                key="Header"
                                component={LogInForm}
                                title='Login'
                                initial
                                
                            />
                            <Scene
                                key='about'
                                component={AboutUs}
                                title="About"
                                
                            />
                        </Scene>
                    </Scene>

                </Scene>

            </Router>
        );
    }
}

export default App;*/

'use strict';

import React, { Component } from 'react';
// var ReactNative = require('react-native');
import { Text,View,Clipboard } from 'react-native';
// var {
//   Clipboard,
//   View,
//   Text,
// } = ReactNative;

class ClipboardExample extends React.Component {
  state = {
    content: 'Content will appear here'
  };

  _setClipboardContent = async () => {
    Clipboard.setString('Hello World');
    try {
      var content = await Clipboard.getString();
      this.setState({content});
    } catch (e) {
      this.setState({content:e.message});
    }
  };

  render() {
    return (
      <View>
        <Text onPress={this._setClipboardContent} style={{color: 'blue'}}>
          Tap to put "Hello World" in the clipboard
        </Text>
        <Text style={{color: 'red', marginTop: 20}}>
          {this.state.content}
        </Text>
      </View>
    );
  }
}

export default ClipboardExample;
// exports.title = 'Clipboard';
// exports.description = 'Show Clipboard contents.';
// exports.examples = [
//   {
//     title: 'Clipboard.setString() and getString()',
//     render() {
//       return <ClipboardExample/>;
//     }
//   }
// ];