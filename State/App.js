import React,{Component}from 'react';
import {
  Text,View,AppRegistry
}from 'react-native';

class Blink extends Component{
  constructor(props){
    super(props);
    this.state = {isShowingText:true};
    setInterval(() =>{
      this.setState(previousState => {
        return {  isShowingText:!previousState.isShowingText};
      });
    },1000);
  }
  render() {
    let disPlay = this.state.isShowingText ? this.props.text :' ';
    return(
      <Text>{disPlay}</Text>
    );
  }
}

export default class App extends Component{
  render(){
    return(
      <View>
        <Blink text = 'I love to blink!'/>
        <Blink text = 'Yes blink is so great!'/>
        <Blink text = 'Why did they have take this out of HTML'/>
        <Blink text = 'Look at me look at me look at me'/>
      </View>
    );
  }
}