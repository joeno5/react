/**
 * @format
 * @flow
 */

import {createStackNavigator} from 'react-navigation';
import SearchPage from './SearchPage';
import SearchResult from './SearchResult';
import SearchResultDetails from './SearchResultDetails';

const App = createStackNavigator({
  Home: { screen: SearchPage },
  Results: { screen: SearchResult},
  Details: { screen: SearchResultDetails},
});

export default App;
