'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ActivityIndicator, Image } from 'react-native';
import { connect } from 'react-redux';
import { addListings } from "../actions/Listings";
import LogoTitle from "./LogoTitle.js";

function urlForQueryAndPage(key, value, pageNumber) {
    const data = {
        country: 'uk',
        pretty: '1',
        encoding: 'json',
        listing_type: 'buy',
        action: 'search_listings',
        page: pageNumber,
    };
    
    data[key] = value;
  
    const querystring = Object.keys(data)
      .map(key => key + '=' + encodeURIComponent(data[key]))
      .join('&');
  
    return 'https://api.nestoria.co.uk/api?' + querystring;
}

class ConnectedSearchPage extends Component {
  static defaultProps = {
    foo: 42,
  };

  // assign a function to navigationOptions for passing args by React Navigation in this static method
  static navigationOptions = ({ navigation, navigationOptions, screenProps }) => {
    // return {
    //   title: 'Property Finder',
    // }
    console.log(JSON.stringify(screenProps));
    
    return {
      headerTitle: <LogoTitle />,
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      searchString: 'london',
      isLoading: false,
      message: '',
    };
  }

  render() {
    console.log('SearchPage.render');
    const spinner = this.state.isLoading ?
                    <ActivityIndicator size='large'/> : null;
    
    //console.log(this.props.navigation.getParam('searchString'));
    
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Property Finder
        </Text>
        <Text style={styles.description}>
          Search houses by place-name or postcode.
        </Text>
        <View style={styles.flowRight}>
        <TextInput
          underlineColorAndroid={'transparent'}
          style={styles.searchInput}
          value={this.state.searchString}
          onChange={this._onSearchTextChanged}
          placeholder='Search via name or postcode'/>
        <Button
          onPress={this._onSearchPressed}
          color='#48BBEC'
          title='Go'
        />
        </View>
        <Image source={require('../resources/house.png')} style={styles.image}/>
        {spinner}
        <Text style={styles.description}>{this.state.message}</Text>
      </View>
    );
  }

  _onSearchTextChanged = (event) => {
    console.log('_onSearchTextChanged');
    this.setState({ searchString: event.nativeEvent.text });
    console.log('Current: '+this.state.searchString+', Next: '+event.nativeEvent.text);
  };

  _executeQuery = (query) => {
    console.log(query);

    this.setState({ isLoading: true });

    fetch(query)
    .then(response => response.json())
    .then(json => this._handleResponse(json.response))
    .catch(error =>
        this.setState({
        isLoading: false,
        message: 'Something bad happened ' + error
    }));
  };
  
  _onSearchPressed = () => {
    const query = urlForQueryAndPage('place_name', this.state.searchString, 1);
    this._executeQuery(query);
  };

  _handleResponse = (response) => {
    this.setState({ isLoading: false , message: '' });

    if (response.application_response_code.substr(0, 1) === '1') {
      console.log('response: ' + JSON.stringify(response.listings));
      // invoke reduex dispatch
      this.props.doAddListings(response.listings);
      
      // change navigation to 'Result' page
      const { navigate } = this.props.navigation;
      navigate('Results');
    } 
    else {
      this.setState({ message: 'Location not recognized; please try again.'});
    }
  };
}

const mapDispatchToProps = dispatch => {
  return {
    // map dispatch to props named 'doAddListings'
    doAddListings: listings => dispatch(addListings(listings))
  };
};

export default connect(null, mapDispatchToProps)(ConnectedSearchPage);

const styles = StyleSheet.create({
    description: {
      marginBottom: 20,
      fontSize: 18,
      textAlign: 'center',
      color: '#656565'
    },
    container: {
      padding: 30,
      marginTop: 65,
      alignItems: 'center'
    },
    flowRight: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
      },
      searchInput: {
        height: 36,
        padding: 4,
        marginRight: 5,
        flexGrow: 1,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 8,
        color: '#48BBEC',
      },
      image: {
        width: 217,
        height: 138,
      },          
});
  