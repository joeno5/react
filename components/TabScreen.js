import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import About from './About';
import Contact from './Contact';

const TabScreen = createMaterialTopTabNavigator({
    About: About,
    Contact: Contact,
},
{
    tabBarOptions: {
        activeTintColor: '#000',
        inactiveTintColor: 'gray',
        style: {
            backgroundColor: '#fff',
        },
        indicatorStyle: {
            backgroundColor: '#000',
        },
    }
});

export default TabScreen;