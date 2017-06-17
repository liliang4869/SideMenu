import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions,
  PanResponder
} from 'react-native';
var { height, width } = Dimensions.get('window');
export default class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { offset: this.props.menuLeft ? new Animated.Value(-1 * this.props.menuWidth) : new Animated.Value(0), open: false };
    this.menuResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
      onMoveShouldSetPanResponder: (evt, gestureState) => false,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => { return Math.abs(gestureState.dx)>Math.abs(gestureState.dy)},
       onPanResponderTerminate: (evt, gestureState) => {
          
      },
      onPanResponderGrant: (evt, gestureState) => {
        this.pre = this.state.offset._value;
      },
      onPanResponderMove: (evt, gestureState) => {
        let curLocation = gestureState.dx + this.pre;
        console.log(gestureState.dx,this.pre)
        if (this.props.menuLeft) {
          if (curLocation < -1 * this.props.menuWidth || curLocation > 0) return;
          else Animated.timing(this.state.offset, { toValue: curLocation, duration: 0 }).start();
        }
        else {
          if (curLocation > 0 || curLocation < -1*this.props.menuWidth) return;
          else Animated.timing(this.state.offset, { toValue: curLocation, duration: 0 }).start();
        }
      },
      onPanResponderTerminationRequest: (evt, gestureState) => false,
      onPanResponderRelease: (evt, gestureState) => {
        let curLocation = gestureState.dx + this.pre;
        if (this.props.menuLeft) {
          if (curLocation > -0.5 * this.props.menuWidth) { this.setState({ open: true}); Animated.spring(this.state.offset, { toValue: 0 }).start(); }
          else { this.setState({ open: false }); Animated.spring(this.state.offset, { toValue: -1 * this.props.menuWidth }).start(); }
        }
        else {
          if (curLocation < -0.5 * this.props.menuWidth) { this.setState({ open: true }); Animated.spring(this.state.offset, { toValue: -1*this.props.menuWidth }).start(); }
          else { this.setState({ open: false }); Animated.spring(this.state.offset, { toValue: 0 }).start(); }

        }
      }
    });
    this.PageResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => this.state.open,
      onMoveShouldSetPanResponder: (evt, gestureState) => false,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => { return Math.abs(gestureState.dx)>Math.abs(gestureState.dy)},

      onPanResponderGrant: (evt, gestureState) => {
        this.pre = this.state.offset._value;
      },
      onPanResponderMove: (evt, gestureState) => {
         let curLocation = gestureState.dx + this.pre;
        console.log(gestureState.dx,this.pre)
        if (this.props.menuLeft) {
          if (curLocation < -1 * this.props.menuWidth || curLocation > 0) return;
          else Animated.timing(this.state.offset, { toValue: curLocation, duration: 0 }).start();
        }
        else {
          if (curLocation > 0 || curLocation < -1*this.props.menuWidth) return;
          else Animated.timing(this.state.offset, { toValue: curLocation, duration: 0 }).start();
        }
      },
      onPanResponderTerminationRequest: (evt, gestureState) => false,
      onPanResponderRelease: (evt, gestureState) => {
        let curLocation = gestureState.dx + this.pre;
        if (this.props.menuLeft) {
          if (curLocation > -0.5 * this.props.menuWidth) { this.setState({ open: true }); Animated.spring(this.state.offset, { toValue: 0 }).start(); }
          else { this.setState({ open: false }); Animated.spring(this.state.offset, { toValue: -1 * this.props.menuWidth }).start(); }
        }
        else {
          if (curLocation <- 0.5 * this.props.menuWidth) { this.setState({ open: true }); Animated.spring(this.state.offset, { toValue: -1*this.props.menuWidth }).start(); }
          else { this.setState({ open: false }); Animated.spring(this.state.offset, { toValue: 0 }).start(); }

        }

      },
    });
  }
  render() {
    console.log(this.state.open)
    return (<View
      style={[{ height: this.props.height, width: this.props.width, flexDirection: 'row', alignItems: 'center', backgroundColor: 'white' }]}>
      {this.props.menuLeft ? <Animated.View style={{
        height: this.props.height, width: this.props.menuWidth,
        transform: [{ translateX: this.state.offset }]
      }}{...this.menuResponder.panHandlers}
      >
        {this.props.Menu}
      </Animated.View> : null}
      <Animated.View
        style={{
          height: this.props.height, width: this.props.width, backgroundColor: 'white',
          transform: [{ translateX: this.state.offset }]
        }}
        {...this.PageResponder.panHandlers}>
        {this.props.children}
        {
          this.state.open ?
            <View style={{ height: this.props.height, width: this.props.height, backgroundColor: '#1010106f', position: 'absolute', top: 0, left: 0 }} /> : null}
      </Animated.View>
      {!this.props.menuLeft ? <Animated.View style={{
        height: this.props.height, width: this.props.menuWidth,
        transform: [{ translateX: this.state.offset }]
      }}{...this.menuResponder.panHandlers}
      >
        {this.props.Menu}
      </Animated.View> : null}
    </View>)
  }
}
// SideMenu.propTypes={
//     Menu:PropTypes.element.isRequired,
//     height:PropTypes.number.isRequired,
//     width:PropTypes.number.isRequired,
//     menuWidth:propTypes.number.isRequired
// }
SideMenu.defaultProps = {
  Menu: <View style={{ height: height, width: width * .5 }} />,
  height: height,
  width: width,
  menuWidth: width * 0.5,
  menuLeft: true
}