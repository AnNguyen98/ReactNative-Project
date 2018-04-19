import React,{Component} from 'react';
import{
    StyleSheet,Text,
}from'react-native';
export default class KHOAPHAM extends Component{
    render(){
        return(
            <Text style={styles.ao}>From Component KhoaPham.js</Text>
        );
    }
}

const styles = StyleSheet.create({
    ao:{
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
        width:200,
        height:50,
        
    }
});