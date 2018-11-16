'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { connect } from 'react-redux';

// type Props = {};

class ConnectedSearchResultDetails extends Component {
    static navigationOptions = {
        title: ' Property Details'
    }

    constructor(props) {
        super(props);

        this.setState = {

        }
    }

    render() {
        console.log('SearchResultDetails.render: ');
        const { params } = this.props.navigation.state;
        var index = params.index;
        console.log('index: ' + index);
        var item = this.props.listings[index];
        const price = item.price_formatted.split(' ')[0];

        return (
            <View style={styles.container}>
                <Image style={styles.thumb} source={{ uri: item.img_url }} />
                <Text style={styles.description}>
                    {item.title}
                </Text>
                <Text style={styles.price}>{price}</Text>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    // map listings from state to props
    const {listings} = state;
    return {listings};
};

export default connect(mapStateToProps)(ConnectedSearchResultDetails);

const styles = StyleSheet.create({
    thumb: {
        width: 320,
        height: 320,
        marginRight: 10
      },
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
    price: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#48BBEC'
    },
             
});