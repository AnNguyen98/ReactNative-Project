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
  View,StatusBar
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component{
  render() {
    <StatusBar hidden='true'/>
    return (
      <View style = {styles.bao}>
          <View style={styles.tiLeDoc}>
            <View style={styles.tiLeNgang}>
                <Text style={styles.number}>1</Text>
            </View>
            <View style={styles.tiLeNgang}>
                <Text style={styles.number}>2</Text>
                <Text style={styles.chu}>abc</Text>
            </View>
            <View style={styles.tiLeNgang}>
                <Text style={styles.number}>3</Text>
                <Text style={styles.chu}>gef</Text>
            </View>
          </View>
          <View style={styles.tiLeDoc}>
            <View style={styles.tiLeNgang}>
                <Text style={styles.number}>1</Text>
            </View>
            <View style={styles.tiLeNgang}>
                <Text style={styles.number}>2</Text>
                <Text style={styles.chu}>abc</Text>
            </View>
            <View style={styles.tiLeNgang}>
                <Text style={styles.number}>3</Text>
                <Text style={styles.chu}>gef</Text>
            </View>
          </View>
          <View style={styles.tiLeDoc}>
            <View style={styles.tiLeNgang}>
                <Text style={styles.number}>1</Text>
            </View>
            <View style={styles.tiLeNgang}>
                <Text style={styles.number}>2</Text>
                <Text style={styles.chu}>abc</Text>
            </View>
            <View style={styles.tiLeNgang}>
                <Text style={styles.number}>3</Text>
                <Text style={styles.chu}>gef</Text>
            </View>
          </View>
          <View style={styles.tiLeDoc}>
            <View style={styles.tiLeNgang}>
                <Text style={styles.number}>1</Text>
            </View>
            <View style={styles.tiLeNgang}>
                <Text style={styles.number}>2</Text>
                <Text style={styles.chu}>abc</Text>
            </View>
            <View style={styles.tiLeNgang}>
                <Text style={styles.number}>3</Text>
                <Text style={styles.chu}>gef</Text>
            </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bao:{
    flex:1,
    backgroundColor:'red',
    flexDirection:'column' //row
  },
  tiLeDoc:{
    flex:1/4,
    backgroundColor:'white',
    flexDirection:'row',
    borderTopWidth:3,
    borderTopColor:'blue',
    // borderBottomWidth:3,
    // borderBottomColor:'blue'
  },
  tiLeNgang:{
    flex:1/3,
    borderRightWidth:3,
    borderRightColor:'blue',
    //textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
  },
  number:{
    fontSize:40
  },
  chu:{
    fontSize:20,
  }
});

//justifyContent: 'center',
//alignItems: 'center',
//textAlign: 'center',