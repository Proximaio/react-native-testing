'use strict';


import React, {
  Image,
  Platform,
  StyleSheet,
  Component,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
  TextInput,
} from 'react-native';

var {moment} = require('moment');
var {Icon, TabBarIOS, Spinner } = require('react-native-icons');


var LoadingTextField = React.createClass({


  getInitialState()
  {
    return {
      searching: false,
    };
  },

  componentDidMount(){
    console.log("text field did mount");
  },

   renderSpinner()
  {
    if(this.state.searching === true){
      return (
                <Spinner style={styles.spinIcon} size={15} name='fontawesome|spinner' color='#FCB62A' height={30} width={30}/>
        )
    }else{
      return (<View/>)
    }
  },

  render(){
    return (
      <View style={styles.textViewHolder}>
        <View style={styles.textFlexHolder}>
        <TextInput ref="teamName" value={this.props.currentText}  onChangeText={(val) => {this.props.updateText(val)}}onBlur={() => this.props.finishedEditing()} autoCapitalize='none' style={styles.teamTextInput} placeholder={this.props.placeholder} placeholderTextColor={'rgba(249,249,249,0.3)'} autoCorrect={false} autoFocus={false} />
        {this.renderSpinner()}
        </View>
        <View style={styles.textInputBottomLine}/>
        </View>
      )
  }


});


var styles = StyleSheet.create({
  textViewHolder:{
    marginLeft: 30,
    marginTop:20,
    marginRight: 30,
    flexDirection: 'column',
    justifyContent: 'space-around',

  },
  textFlexHolder:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  teamTextInput: {
    height: 30,
    flex: 0.8,
    fontSize: 22,
    textAlign: 'center',
    color: '#FCB62A',
    alignSelf: 'stretch',
  },
  spinIcon:{
    flex: 0.1,
    transform: [{rotate: '50deg'}],
  },
  textInputBottomLine:{
    flex: 1,
    height: 0.5,
    marginTop:5,
    backgroundColor: 'white',
    alignSelf: 'stretch',
  },
});

module.exports = LoadingTextField;
