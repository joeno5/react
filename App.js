/**
 * @format
 * @flow
 */

import React from 'react';
import {createStackNavigator} from 'react-navigation';
import SearchPage from './SearchPage';
import SearchResult from './SearchResult';
import SearchResultDetails from './SearchResultDetails';

export const AppWithNavigation = createStackNavigator({
  Home: { screen: SearchPage },
  Results: { screen: SearchResult},
  Details: { screen: SearchResultDetails},
});

