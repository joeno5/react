import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { DrawerActions } from 'react-navigation';
import PropTypes from 'prop-types';

class DrawerScreen extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer())
  }

  render () {
    return (
      <View>
        <ScrollView>
          <View>
            <View style={styles.menuItem}>
              <Text onPress={this.navigateToScreen('HomeNavigation')}>
                Home
              </Text>
            </View>
            <View style={styles.menuItem}>
              <Text onPress={this.navigateToScreen('TabScreen')}>
                Tab Page
              </Text>
            </View>
            <View style={styles.menuItem}>
              <Text onPress={this.navigateToScreen('About')}>
                About
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

DrawerScreen.propTypes = {
  navigation: PropTypes.object
};

export default DrawerScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    menuItem:{
        padding: 10,
        borderWidth: 0.5,
        borderColor: '#d6d7da'
    }
});
