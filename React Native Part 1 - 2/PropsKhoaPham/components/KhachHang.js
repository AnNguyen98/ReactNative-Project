import React,{Component} from 'react';
import {
    StyleSheet,Text,View,
}from 'react-native';

export default class KHACHHANG extends React.Component{
    render(){
        return(
            <View>
                <Text style={styles.text}>{this.props.ten} - {this.props.namsinh} </Text>
            </View>
        );
    }
}

KHACHHANG.propType = {
    ten: React.string,
    namsinh: React.string,
}

const styles = StyleSheet.create({
    text:{
        fontSize:20,
        textAlign:'center',
    }
})