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

console.log(moment);
//Note: When you are using a cell or passing values through to another cell use the native bindings for now
var EventCell = React.createClass({
  render(){
  var TouchableElement = TouchableHighlight;
    if (Platform.OS === 'android') {
      TouchableElement = TouchableNativeFeedback;
    }
    return (
          <View style={cellStyles.mainContent}>
            
              <View style={cellStyles.row}>
                <View style={cellStyles.leftContainer}>
                  <Icon size={14} name='fontawesome|info' style={cellStyles.iconStyle} color='#4A90E2' />
                </View>
                <TouchableElement
              onPress={this.props.onSelect}
              onShowUnderlay={() => {}}
              onHideUnderlay={() => {}} style={cellStyles.rightButton}>
              <View style={cellStyles.rightContainer}>
              <View style={cellStyles.rightTextContainer}>
              <Text style={cellStyles.eventTitleText} numberOfLines={1}>Qantas epiQure Flagship Wine fair</Text>
              <Text style={cellStyles.eventSubtitleText} numberOfLines={1}>13/02/2016 – 12:00 PM, Carriageworks – 245…</Text>
              </View> 
              <View style={cellStyles.rightChevronContainer}>
                <Icon size={18} name='fontawesome|angle-right' style={cellStyles.chevron} color='#606A79' />
              </View>

              </View>
                            </TouchableElement>

              </View>
             
            </View>
      )
  }

});
 // <View style={cellStyles.row}>
              // <View style={cellStyles.textContainer}>
              //   <View style={cellStyles.leftContainer}>
              //   <View style={cellStyles.leftIcon}/>
              //   </View>
              //   <View style={cellStyles.rightContainer}>
              //     <Text style={cellStyles.eventIP}>{this.props.event.ip_address}</Text>
              //      <Text style={cellStyles.country}>{this.props.event.value_content}</Text>
              //   </View>
              // </View>
              // </View>


var cellStyles = StyleSheet.create({

  leftContainer: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  rightButton: {
    flex: 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  rightContainer: {
    flex: 1.0,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  rightTextContainer: {
    flex: 0.9,
  },
  rightChevronContainer: {
    flex: 0.1,
    alignSelf: 'auto',
    alignItems: 'center',
    backgroundColor: 'white',

  },
  iconStyle: {
    width: 5,
    height: 14,
    flex: 1,
    alignSelf: 'auto',
  },
  eventIP: {
    fontSize: 12,
    color: '#aaaaaa',
    backgroundColor: 'green',
    textAlign: 'left'
  },
  country: {
    fontSize: 12,
    color: '#aaaaaa',
    backgroundColor: 'green',
    textAlign: 'right'
  },
  mainContent: {
    flex: 1,
  },
  textContainer:{
    flex: 1,
  },
  eventTitleText: {
    flex: 1,
    fontSize: 18,
    color: '#31363E',
    paddingTop: 3,
  },
  eventSubtitleText: {
    flex: 1,
    fontSize: 11,
    color: '#31363E',
    paddingTop: 2,
    paddingBottom: 5,
  },
  holder: {
    flex: 1,
    alignItems: 'stretch',
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'red'
  },
  eventDate: {
    flex: .15,
    color: '#999999',
    fontSize: 12,
    backgroundColor: 'yellow'
  },
  row: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 1,
  },
  chevron:{
    width:7,
    height: 18,
    flex: 1,
    alignSelf: 'auto',
  },

  cellBorder: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    height: StyleSheet.hairlineWidth,
    marginLeft: 4,
  },


});

module.exports = EventCell;
