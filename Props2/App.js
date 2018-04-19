import React,{Component} from 'react';
import {
  View,
  Text
}from 'react-native';

class Greeting extends Component{
  render(){
    return(
      <Text>Hello {this.props.name}</Text>
    );
  }
}

export default class App extends Component{
  render(){
    return(
      <View style={{alignItems:'center'}}>
        <Greeting name = 'An'/>
        <Greeting name = 'Quyen'/>
        <Greeting name = 'Hung'/>
      </View>
    );
  }
}