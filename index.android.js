/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import SideMenu from './src/index';
export default class SideMenuTest extends Component {
  render() {
    return (
      <View style={styles.container}>
      <SideMenu height={500} width={300} Menu={this.Menu()} menuWidth={200}>
        <View style={{flex:1,backgroundColor:'green'}}>
          <TouchableOpacity style={{height:50,width:50,backgroundColor:'white'}} onPress={()=>{console.log('click')}}/>
          </View>
        </SideMenu>
      
      </View>
    );
  }
  Menu(){
    return <View style={{height:500,width:200,backgroundColor:'red'}}/>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('SideMenuTest', () => SideMenuTest);
