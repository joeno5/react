/**
 * @format
 * @flow
 */

import {createStackNavigator} from 'react-navigation';
import SearchPage from './SearchPage';
import SearchResult from './SearchResult';

const App = createStackNavigator({
  Home: { screen: SearchPage },
  Results: { screen: SearchResult},
});

export default App;