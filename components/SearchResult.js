'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  FlatList,
  Text,
} from 'react-native';
import { connect } from 'react-redux';

class ListItem extends React.PureComponent {
    
    _onPress = () => {
      this.props.onPressItem(this.props.index);
      //this.props.navigation.navigate('Details', {item: this.props.item});
    }
  
    render() {
      const item = this.props.item;
      const price = item.price_formatted.split(' ')[0];
      return (
        <TouchableHighlight
          onPress={this._onPress}
          underlayColor='#dddddd'>
          <View>
            <View style={styles.rowContainer}>
              <Image style={styles.thumb} source={{ uri: item.img_url }} />
              <View style={styles.textContainer}>
                <Text style={styles.price}>{price}</Text>
                <Text style={styles.title}
                  numberOfLines={1}>{item.title}</Text>
              </View>
            </View>
            <View style={styles.separator}/>
          </View>
        </TouchableHighlight>
      );
    }
}
  
// type Props = {};

class ConnectedSearchResults extends Component {
  static navigationOptions = {
    title: 'Results',
  };

  _keyExtractor = (item, index) => index.toString();

  _renderItem = ({item, index}) => (
    <ListItem
      item={item}
      index={index}
      onPressItem={this._onPressItem}
    />
  );
  
  _onPressItem = (index) => {
    console.log("Pressed row: "+index);

    const {push} = this.props.navigation;

    // change navigation to 'Details' page and pass {index: index} object to params
    push('Details', {index});
  };
  

  render() {
    // get params from react navigation state
    //const { params } = this.props.navigation.state;
    
    console.log(JSON.stringify(this.props.listings));
    
    return (
      <FlatList
        //data={params.listings}
        data={this.props.listings}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state:' + JSON.stringify(state));
  
  const {listings} = state;
  return {listings};

  // equivalent to below statements
  // return {
  //   listings: state.listings
  // };
};

export default connect(mapStateToProps)(ConnectedSearchResults);

const styles = StyleSheet.create({
    thumb: {
      width: 80,
      height: 80,
      marginRight: 10
    },
    textContainer: {
      flex: 1
    },
    separator: {
      height: 1,
      backgroundColor: '#dddddd'
    },
    price: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#48BBEC'
    },
    title: {
      fontSize: 20,
      color: '#656565'
    },
    rowContainer: {
      flexDirection: 'row',
      padding: 10
    },
});
  
