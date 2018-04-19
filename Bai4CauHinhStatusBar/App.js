import React,{Component}from 'react';
import {
  View,Text,StatusBar
}from 'react-native';

export default class App extends Component{
  render(){
    return(
      <View>
        <StatusBar hidden = 'true'/>
        <Text style = {{marginTop:100}}>Hello World !</Text>
      </View>
    );
  }
}