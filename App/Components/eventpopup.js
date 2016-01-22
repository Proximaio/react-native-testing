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



var EventPopup = React.createClass({

  componentDidMount(){
    console.log("event popup did mount");
  },


  pressMeNow(){
    console.log("tappy tapp tapppp");
  },


  hairlineItem()
  {
    return (
        <View style={styles.separatorView}/>
      )
  },

  lineComponent(icontype, text)
  {
    return (
      <View style={styles.componentHolder}>
        <Icon size={14} width={20} height={20} name={icontype} color='#E9EAEC' numberOfLines={2} style={styles.infoIconStyle}/>
        <Text style={styles.componentText}>{text}</Text>
      </View>
      )
  },

  eventOverview()
  {
    var lineComponent1 = this.lineComponent("fontawesome|calendar", "13th Feb 2016");
    var lineComponent2 = this.lineComponent("fontawesome|clock-o", "12:00pm - 5:00pm")
    var lineComponent3 = this.lineComponent("fontawesome|location-arrow", "Carriageworks - 245 Wilson St, Eveleigh")
    return (
      <View style={styles.topContainer}>
        <Text style={styles.eventTitle} numberOfLines={2}>Qantas epiQure Flagship Wine Fair - Sydney</Text>
        {lineComponent1}
        {lineComponent2}
        {lineComponent3}
      </View>

      )
  },
  

  eventContent()
  {
    return (
      <View style={styles.eventContentView}>
      {this.eventOverview()}
      {this.bottomButton()}
      </View>

      )
  },

  itemContent()
  {
    return (
        <View style={styles.floatView}>
          <Text style={styles.closeButton} onPress={() => this.pressMeNow()}>Close</Text>
          {this.hairlineItem()}
          {this.eventContent()}
        </View>
      )
  },

  render()
  {
    return (
        <View style={styles.transparentContainer}>
          {this.itemContent()}
        </View>
      )
  },

  scanEvent()
  {
    console.log("SCANNY");
  },
  bottomButton(){
    return (
        <TouchableHighlight onPress={() => {this.scanEvent}} style={styles.scanButton}>
        <View style={styles.buttonHolder}>
          <Text style={styles.scanButtonText}>Go to Event</Text>
          <Icon size={18} name='fontawesome|angle-right' style={styles.chevron} color='#E9EAEC' />
        </View>        
        </TouchableHighlight>
      )
  },

});




var styles = StyleSheet.create({
  transparentContainer:{
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  closeButton: {
    color: '#606A79',
    fontSize: 16,
    paddingLeft: 15,
    marginTop: 12,
    marginBottom:12,
    fontWeight: '500',
    alignSelf: 'stretch',
  },
  floatView:{
    position: 'absolute',
    backgroundColor: 'white',
    left: 40,
    right: 40,
    top: 100,
    borderRadius: 5.0,
    flex: 1,
    flexDirection: 'column',
  },
  separatorView:{
    marginBottom: 5,
    backgroundColor: 'rgba(96,106,121,0.2)',
    height: 0.5,
      },
  eventContentView:{
    alignSelf: 'stretch',
    marginLeft:10,
    marginRight:10,
    marginBottom:10,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
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
  },
  topContainer:{
    alignSelf: 'stretch',
    marginTop: 8,
    backgroundColor: 'white',
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
    fontWeight: '500',
  },
  infoIconStyle: {
    marginRight: 20,
  },
  eventTitle:{
    fontSize: 18,
    color: '#31363E',
    marginBottom: 10,
    alignSelf: 'stretch',
    flex: 1,
  }

});


module.exports = EventPopup;
