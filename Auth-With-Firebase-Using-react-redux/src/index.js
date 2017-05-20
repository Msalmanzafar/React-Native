import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './Reducers';
import { Header } from './Component/Common'

const NavBar = () => {
    return (
        <Provider store={createStore(reducers)}>
            <View>
                <Header headerText='Authentication' />
            </View>
        </Provider>
    );
}

export default NavBar;