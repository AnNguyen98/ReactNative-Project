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
  View,TouchableOpacity
} from 'react-native';

export default class App extends Component{
  
  render() {
    function onPress() {
      console.log("You press me");
    }
    return (
      <View>
        <TouchableOpacity onPress={()=>{onPress()}}>
        <View style={{marginTop:100,backgroundColor:'blue',width:200,height:45}}>
           <Text style={{color:'red', fontSize:20}}>Click me!!</Text>
        </View>
      </TouchableOpacity>
      </View>
    );
  }
}
