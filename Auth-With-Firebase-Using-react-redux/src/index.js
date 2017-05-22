import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { Header } from './Component/Common'
import Store from './Store/store';

const NavBar = () => {
    return (
        <Provider store={Store}>
            <View>
                <Header headerText='Authentication' />
            </View>
        </Provider>
    );
}

export default NavBar;