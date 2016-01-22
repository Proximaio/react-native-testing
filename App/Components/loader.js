'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  ActivityIndicatorIOS,
  NavigatorIOS,
  View,
  Component,
  TouchableHighlight
} = React;
var styles = require('../../styles/styles');
var Loaded = require('./loaded');

class Loader extends Component
{
  _pushNextView() {
      this.props.navigator.push({
      title: "Event",
      component: Loaded
    });
  }
  render(){
    return (
      <View style={styles.container}>
      <Text>You're now ready to proceed!</Text>
      <TouchableHighlight onPress={() => this._pushNextView()}>
      <Text>Let us go now</Text>
      </TouchableHighlight>
      </View>
      )
  }
}

module.exports = Loader;
