import React, { Component } from 'react';
import { Image } from 'react-native';

class LogoTitle extends React.Component {
  render() {
    return (
        <Image
            source={require('../resources/header-wave.png')}
            style={{ width: 500, height: 100 }}
        />
    );
  }
}

export default LogoTitle;