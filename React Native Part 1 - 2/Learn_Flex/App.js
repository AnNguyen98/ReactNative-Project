/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.bao}>
        <StatusBar hidden='true' />
        <View style = {styles.teo}></View>
        <View style = {styles.ti}></View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  bao:{
    backgroundColor:'red',
    flex:1
  },
  teo:{
    flex:3,
    backgroundColor:'red'
  },
  ti:{
    flex:2,
    backgroundColor:'yellow'
  }
});
