'use strict';

var React = require('react-native');


var {
  StyleSheet,
} = React;


var AppStyles = StyleSheet.create({
  navigateContainer: {
    flex: 1,
    backgroundColor: 'white'  
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eeeeeF',
  },
  welcome: {
    fontSize: 27,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Avenir'
  }
});


module.exports = AppStyles;
