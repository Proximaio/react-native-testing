'use strict';


import React, {
  Image,
  Platform,
  StyleSheet,
  Component,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  View
} from 'react-native';

var {moment} = require('moment');
var { Icon } = require('react-native-icons');

var EventOverview = React.createClass({


  componentDidMount()
  {
    console.log("We are now mounted");
  },

  scanEvent()
  {
    console.log("Log this event");
    // this.props.event;
    console.log(this.props.event);
  },

  lineComponent(icontype, text)
  {
    return (
      <View style={eventStyles.componentHolder}>
        <Icon size={14} width={20} height={20} name={icontype} color='#E9EAEC' numberOfLines={2} style={eventStyles.infoIconStyle}/>
        <Text style={eventStyles.componentText}>{text}</Text>
      </View>
      )
  },

  eventOverview()
  {
    var lineComponent1 = this.lineComponent("fontawesome|calendar", "13th Feb 2016");
    var lineComponent2 = this.lineComponent("fontawesome|clock-o", "12:00pm - 5:00pm")
    var lineComponent3 = this.lineComponent("fontawesome|location-arrow", "Carriageworks - 245 Wilson St, Eveleigh")
    return (
      <View style={eventStyles.topContainer}>
        <Text style={eventStyles.eventTitle}>Qantas epiQure Flagship Wine Fair - Sydney</Text>
        {lineComponent1}
        {lineComponent2}
        {lineComponent3}
      </View>

      )
  },

  render(){
    var bottomButton = this.bottomButton();
    var eventOverview = this.eventOverview();

    return (
        <View style={eventStyles.container}>
          {eventOverview}
          {bottomButton}
        </View>
      )
  },

  bottomButton(){
    return (
        <TouchableHighlight onPress={() => {this.scanEvent}} style={eventStyles.scanButton}>
        <View style={eventStyles.buttonHolder}>
          <Text style={eventStyles.scanButtonText}>Start Scanning</Text>
          <Icon size={18} name='fontawesome|angle-right' style={eventStyles.chevron} color='#E9EAEC' />
        </View>        
        </TouchableHighlight>
      )
  },


});


//Some simple notes
//
//setting something as stretch means it fills the item above it
//flexDirectionc an be column or row, if a flex is 1 on an item it fills the full amount of the item if its defined as 1

var eventStyles = StyleSheet.create({
  topContainer:{
    backgroundColor: 'white',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
    paddingLeft: 30,
    paddingRight: 30,
  },
  componentHolder: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingTop: 2,
    paddingBottom: 2,
    paddingRight: 50,
  },
  componentText: {
    color: '#31363E',
    fontSize: 12,
    flex: 1,
  },
  infoIconStyle: {
    marginRight: 20,
  },
  eventTitle:{
    fontSize: 18,
    color: '#31363E',
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
  },
  container:{
    backgroundColor: '#31363E',
    flexDirection: 'column',
    flex: 1,
    alignSelf: 'stretch',
  },
  scanButton:{
    marginTop: 15,
    backgroundColor: '#51B466',
    alignSelf: 'stretch',
  },
  buttonHolder:
  {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanButtonText:{
    fontSize: 16,
    paddingTop: 11,
    paddingBottom: 11,
    textAlign: 'right',
    color: 'white',
    fontWeight: '500',
  },
  chevron:{
    width:7,
    height: 18,
    marginLeft: 5,
  }


});

module.exports = EventOverview;
