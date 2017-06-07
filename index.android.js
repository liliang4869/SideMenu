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
  TouchableOpacity, ToastAndroid
} from 'react-native';
import SideMenu from './src/index';
export default class SideMenuTest extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SideMenu height={500} width={300} Menu={this.Menu()} menuWidth={200}>
          <View style={{ flex: 1, backgroundColor: '#b0b000',justifyContent:'center',alignItems:'center', }}>
            <TouchableOpacity style={{ height: 50, width: 200, backgroundColor: '#B0E2FF' ,justifyContent:'center',alignItems:'center'}} onPress={() => { ToastAndroid.show('主界面点击',400) }} >
             <Text style={{ fontSize: 20 }}>点击测试</Text>
              </TouchableOpacity>
          </View>
        </SideMenu>

      </View>
    );
  }
  Menu() {
    return <View style={{flex:1, backgroundColor: 'white',}}>
      <TouchableOpacity style={{ height: 40, width: 200, backgroundColor: '#B0E2FF' }} onPress={() => { ToastAndroid.show('侧滑测试1', 400) }}><Text style={{ fontSize: 20 }}>测试1</Text></TouchableOpacity>
      <View style={{ height: 1, width: 200, backgroundColor: '#eeeeee' }} />
      <TouchableOpacity style={{ height: 40, width: 200, backgroundColor: '#B0E2FF' }} onPress={() => { ToastAndroid.show('侧滑测试2', 400) }}><Text style={{ fontSize: 20 }}>测试2</Text></TouchableOpacity>
      <View style={{ height: 1, width: 200, backgroundColor: '#eeeeee' }} />
      <TouchableOpacity style={{ height: 40, width: 200, backgroundColor: '#B0E2FF' }} onPress={() => { ToastAndroid.show('侧滑测试3', 400) }}><Text style={{ fontSize: 20 }}>测试3</Text></TouchableOpacity>
      <View style={{ height: 1, width: 200, backgroundColor: '#eeeeee' }} />
    </View>
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
