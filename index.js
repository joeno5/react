/** @format */
'use strict';


import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { name as appName } from './app.json';
import App from './App';
import Store from "./store/Store";

class ReduxApp extends Component {
    render() {
        return (
            <Provider store={Store}>
                <App />
            </Provider>
        );
    }
}

AppRegistry.registerComponent(appName, () => ReduxApp);

export default ReduxApp;
