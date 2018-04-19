import React,{Component} from 'react';
import {
  View,Text,StatusBar
}from 'react-native';

export default class App extends Component{

  constructor(props){
    super(props);
    console.log("Constructor");
  }


  componentWillMount(){
    console.log("componentWillMount");
  }

  render(){
    console.log("Render");
    return (
      <View>
        <StatusBar hidden = 'true'/>
        <Text>Hello World!</Text>
      </View>
    );
  }
  componentDidMount(){
    console.log("componentDidMount");
  }



}