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

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props)
    console.log("Hello Constructor!");
    
  }

  componentWillMount(){
    console.log("Hello component will mount!");
    }

  render() {
    console.log("Hello render!");
    return (
      <View style={ao.bao} >
        <Text style = {ao.tieude}>
          Welcome to React Native!
        </Text>
        <Text style = {ao.tieude2} >Hello everyone my name is Nguyen The An, I styding React Native! </Text>
      </View>
    );
  }

  componentDidMount(){
    console.log("Hello component did mount!");
  }
}

var ao = StyleSheet.create({
  bao:{
    backgroundColor:'pink',
    width:300,
    height:200,
    paddingTop:10,
    paddingLeft:20,
    marginTop:50,
    marginRight:20
    
  },
  tieude:{
    backgroundColor:'yellow',
    color:'red'
  },
  tieude2:{
    backgroundColor:'green'
  }

});