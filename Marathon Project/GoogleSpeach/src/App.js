import React from 'react';
import { StyleSheet, View } from 'react-native';
import Routers from './Router';



class MyApp extends React.PureComponent {
    componentWillMount() {
        console.disableYellowBox = true
    }
    render() {
        return (
            <Routers />
        );
    }
}


export default MyApp;