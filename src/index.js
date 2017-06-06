import React, { Component,PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions,
  PanResponder
} from 'react-native';
var {height,width} =Dimensions.get('window');
export default class SideMenu extends Component{
constructor(props)
{
    super(props);
    this.state={offset:new Animated.Value(-1*this.props.menuWidth),open:false};
    this.menuResponder=PanResponder.create({ 
        onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
      onMoveShouldSetPanResponder: (evt, gestureState) => false,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => false,

      onPanResponderGrant: (evt, gestureState) => {
        this.pre=this.state.offset._value;
      },
      onPanResponderMove: (evt, gestureState) => {
          let curLocation=gestureState.dx+this.pre;
          if(curLocation<-1*this.props.menuWidth || curLocation>0)return;
          else Animated.timing(this.state.offset,{toValue:curLocation,duration:0}).start();
      },
      onPanResponderTerminationRequest: (evt, gestureState) => false,
      onPanResponderRelease: (evt, gestureState) => {
        let curLocation=gestureState.dx+this.pre;
        if(curLocation>-0.5*this.props.menuWidth){this.setState({open:true});Animated.spring(this.state.offset,{toValue:0}).start();}
        else {this.setState({open:false});Animated.spring(this.state.offset,{toValue:-1*this.props.menuWidth}).start();}
        
      },});
      this.PageResponder=PanResponder.create({ 
        onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => this.state.open,
      onMoveShouldSetPanResponder: (evt, gestureState) => false,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => false,

      onPanResponderGrant: (evt, gestureState) => {
        this.pre=this.state.offset._value;
      },
      onPanResponderMove: (evt, gestureState) => {
          let curLocation=gestureState.dx+this.pre;
          if(curLocation<-1*this.props.menuWidth || curLocation>0)return;
          else Animated.timing(this.state.offset,{toValue:curLocation,duration:0}).start();
      },
      onPanResponderTerminationRequest: (evt, gestureState) => false,
      onPanResponderRelease: (evt, gestureState) => {
        let curLocation=gestureState.dx+this.pre;
        if(curLocation>-0.5*this.props.menuWidth){this.setState({open:true});Animated.spring(this.state.offset,{toValue:0}).start();}
        else {this.setState({open:false});Animated.spring(this.state.offset,{toValue:-1*this.props.menuWidth}).start();}
        
      },});
}
render(){
    console.log(this.state.open)
return (<View
        style={[{height:this.props.height,width:this.props.width,flexDirection: 'row',alignItems:'center',backgroundColor:'white'}]}>
        <Animated.View style={{height:this.props.height,width:this.props.menuWidth,
        transform:[{translateX:this.state.offset}]}}{...this.menuResponder.panHandlers}
        >
        {this.props.Menu}
        </Animated.View>
        <Animated.View 
        style={{height:this.props.height,width:this.props.width,backgroundColor:'white',
        transform:[{translateX:this.state.offset}]}}
        {...this.PageResponder.panHandlers}>
            {this.props.children}
              {
            this.state.open?
        <View style={{height:this.props.height,width:this.props.height,backgroundColor:'#1010106f',position:'absolute',top:0,left:0}}/>:null}
            </Animated.View>
        </View>)
}
}
// SideMenu.propTypes={
//     Menu:PropTypes.element.isRequired,
//     height:PropTypes.number.isRequired,
//     width:PropTypes.number.isRequired,
//     menuWidth:propTypes.number.isRequired
// }
SideMenu.defaultProps={
    Menu:<View style={{height:height,width:width*.5}}/>,
    height:height,
    width:width,
    menuWidth:width*0.5
}