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
  View,StatusBar,
  Button
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
      
      <View style = {styles.bao} >
          <StatusBar hidden= 'true' />
          <View style={styles.tiledoc}>
                <View style = {styles.tilengang}>
                  <Text style={styles.chu}>1</Text>
                </View>
                <View style = {styles.tilengang}>
                  <Text style={styles.chu}>2</Text>
                </View>
                <View style = {styles.tilengang}>
                  <Text style={styles.chu}>3</Text>
                </View>
          </View>

          <View style={styles.tiledoc}>
                <View style = {styles.tilengang}>
                  <Text style={styles.chu}>4</Text>
                </View>
                <View style = {styles.tilengang}>
                  <Text style={styles.chu}>5</Text>
                </View>
                <View style = {styles.tilengang}>
                  <Text style={styles.chu}>6</Text>
                </View>
          </View>

          <View style={styles.tiledoc}>
                <View style = {styles.tilengang}>
                  <Text style={styles.chu}>7</Text>
                </View>
                <View style = {styles.tilengang}>
                  <Text style={styles.chu}>8</Text>
                </View>
                <View style = {styles.tilengang}>
                  <Text style={styles.chu}>9</Text>
                </View>
          </View>

          <View style={styles.tiledoc}>
                <View style = {styles.tilengang}>
                  <Text style={styles.chu}>Back</Text>
                </View>
                <View style = {styles.tilengang}>
                  <Text style={styles.chu}>0</Text>
                </View>
                <View style = {styles.tilengang}>
                  <Text style={styles.chu}>Clear</Text>
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
    flexDirection:'column' // column
  },
  tiledoc:{
    flex:1/4,
    backgroundColor:'white',
    flexDirection:'row'
  },
  tilengang:{
    flex:1/3,
    backgroundColor:'black',
    borderWidth:3,
    borderColor:'white'
  },
  chu:{
    color:'white',
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center'
  }
});
