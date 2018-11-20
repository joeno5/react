import React from 'react';
import { createStackNavigator, createDrawerNavigator, DrawerActions } from 'react-navigation';
import { TouchableOpacity, Image, Easing, Animated } from 'react-native';
import SearchPage from './components/SearchPage';
import SearchResult from './components/SearchResult';
import SearchResultDetails from './components/SearchResultDetails';
import DrawerScreen from './components/DrawerScreen';
import About from './components/About';
import TabScreen from './components/TabScreen';

const HomeNavigation = createStackNavigator(
  {
    Home: { screen: SearchPage },
    Results: { screen: SearchResult},
    Details: { screen: SearchResultDetails},
  }, 
  {
    initialRouteName: 'Home',
    initialRouteParams: { searchString: 'london' },
    navigationOptions: {
      headerStyle: {
        // backgroundColor: '#f4511e', 
        height: 80,
      },
      // headerTintColor: '#fff',
      // headerTitleStyle: {
      //   fontWeight: 'bold',
      // },
    },
    // add navigation transition animation
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateY }] };
      },
    }),
  },
);

const DrawerNavigator = createDrawerNavigator({
  HomeNavigation: { screen: HomeNavigation },
  TabScreen: { screen: TabScreen},
  About: { screen: About },
},{
  initialRouteName: 'HomeNavigation',
  contentComponent: DrawerScreen,
  drawerWidth: 300
});

const MenuImage = ({navigation}) => {
  if(!navigation.state.isDrawerOpen){
      return <Image source={require('./resources/menu-button.png')}/>
  }else{
      return <Image source={require('./resources/left-arrow.png')}/>
  }
}

const App = createStackNavigator({
    DrawerNavigator:{ screen: DrawerNavigator },
  },
  {
    navigationOptions: ({ navigation }) => ({
      title: 'Property Finder',  // Title to appear in status bar
      headerLeft: 
      <TouchableOpacity  onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())} }>
          <MenuImage style="styles.bar" navigation={navigation}/>
      </TouchableOpacity>,
      headerStyle: {
          backgroundColor: '#333',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
  })
});

export default App;