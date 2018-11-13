/** @format */
'use strict';


import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import { name as appName } from './app.json';
import { AppWithNavigation }from './App';
import store from "./store/Store";

class ReduxApp extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigation />
            </Provider>
        );
    }
}

AppRegistry.registerComponent(appName, () => ReduxApp);

export default ReduxApp;
