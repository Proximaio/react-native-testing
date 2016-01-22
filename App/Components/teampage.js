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

var LoadingTextField = require('./loadingtextfield');


var TeamPage = React.createClass({


  getInitialState(){
    return {
      currentText: '',
      searching: true,
    };
  },

  runNetworkSearch()
  {
    var searchText = this.state.currentText;
  },

  componentDidMount()
  {
    console.log("Have content food");
    // console.log(this.refs);
    console.log(this.refs["teamName"]);
      // this.refs.teamName.focus();
  },

  didFinishEditingText(){
    console.log(this.state.currentText);
    this.runNetworkSearch();
  },

  setCurrentText(text)
  {
    // console.log(text);
    this.setState({currentText: text});
  },

  render()
  {
    // var textField = this.loadingTextField();
    // 
    return (
      <View style={currentStyles.container}>
      <Text style={currentStyles.teamTitle}>Sign in to your team</Text>
      <LoadingTextField styles={currentStyles.textField} currentText="" updateText={(text) => this.setCurrentText(text)} finishedEditing={() => this.didFinishEditingText} placeholder='your team name' />
            <LoadingTextField styles={currentStyles.textField} currentText="" updateText={(text) => this.setCurrentText(text)} finishedEditing={() => this.didFinishEditingText} placeholder='teambo' />

      </View>

      )
    // return 
    // (
    //   <View style={currentStyles.container}/>
    //   )
      // <View style={currentStyles.container}>
      // <Text style={currentStyles.teamTitle}>Sign in to your team</Text>
      // </View>
      
    
  }

});

var currentStyles = StyleSheet.create({
  container: {
    backgroundColor: '#31363E',
    flex: 1,
  },

  
  teamTitle: {
    textAlign: 'center',
    fontSize: 16,
    paddingTop: 60,
    fontWeight: 'normal',
    color: '#F9F9F9',
  },
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
  }

});

module.exports = TeamPage;
