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



var TeamPage = React.createClass({


  getInitialState(){
    return {
      currentText: '',
      searching: true,
    };
  },

  renderSpinner()
  {
    if(this.state.searching === true){
      return (
                <Spinner style={styles.spinIcon} size={15} name='fontawesome|spinner' color='#FFFFFF' height={30} width={30}/>

        )
    }else{
      return (<View/>)
    }
  },

  runNetworkSearch()
  {
    var searchText = this.state.currentText;
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
    return (
      <View style={styles.container}>
      <Text style={styles.teamTitle}>Sign in to your team</Text>
      <View style={styles.textViewHolder}>
      <View style={styles.textFlexHolder}>
        <TextInput  onChangeText={(val) => {this.setCurrentText(val)}}onBlur={() => this.didFinishEditingText()} autoCapitalize='none' style={styles.teamTextInput} placeholder='your team name' placeholderTextColor={'rgba(249,249,249,0.3)'} autoCorrect={false} autoFocus={false} />
        {this.renderSpinner()}
        </View>
        <View style={styles.textInputBottomLine}/>
        </View>
      </View>
      )
  }

});


var styles = StyleSheet.create({
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
  },

});

module.exports = TeamPage;
