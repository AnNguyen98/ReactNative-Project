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
  View
} from 'react-native';

import KHACHHANG from './components/KhachHang.js';

export default class App extends Component{
  render() {
    return (
      <View>
        <KhachHang Name="Nguyen The An"/>
        <KhachHang Name ='Nguyen Van Hoang'/> 
        <KhachHang />
        <KHACHHANG ten = "An" namsinh = "1998" />
      </View>
    );
  }
}

class KhachHang extends Component{
    render(){
      return(
        <View>
          <Text style={styles.name}>{this.props.Name}</Text>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  // justifyContent : 'center',
  // flex:1,
  // alignItems:'center',
  // textAlign:'center',
  name:{
    height:50,
    backgroundColor:'red',
    textAlign:'center',
    padding:20,
    fontSize:20
  }
});
