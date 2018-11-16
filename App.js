import React from 'react';
import {createStackNavigator} from 'react-navigation';
import SearchPage from './components/SearchPage';
import SearchResult from './components/SearchResult';
import SearchResultDetails from './components/SearchResultDetails';

export const AppWithNavigation = createStackNavigator({
  Home: { screen: SearchPage },
  Results: { screen: SearchResult},
  Details: { screen: SearchResultDetails},
}, {
  initialRouteName: 'Home',
  initialRouteParams: { searchString: 'london' }
});

