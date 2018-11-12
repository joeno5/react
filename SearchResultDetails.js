'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {};

export default class SearchResultDetails extends Component<Props> {
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
        var item = params.item;
        console.log('item: ' + item);
        return (
            <View style={styles.container}>
                <Text style={styles.description}>
                    {item.title}
                </Text>
            </View>
        );
    }
}

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
             
  });