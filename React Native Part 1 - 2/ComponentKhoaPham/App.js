/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import KHOAPHAM from './Components/KhoaPham.js';

export default class App extends Component {
  render() {
    return (
      <View style={styles.bao}>
          <OVuong />
          <OVuong />
          <OVuong />
          <KHOAPHAM />
      </View>
    );
  }
}

class OVuong extends Component{
  render(){
    return(
      <View style={styles.oVuong}></View>
    );
  }
}

const styles = StyleSheet.create({
  bao:{
    // justifyContent:'center',
    // alignItems:'center',
    // textAlign:'center'
    // flexDirection:'column' // row
    backgroundColor:'pink',
    flex:1,
    flexDirection:'column'
  },
  oVuong:{
    width:100,
    height:100,
    backgroundColor:'yellow',
    borderWidth:2,
    borderColor:'red'
  }
});