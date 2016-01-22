/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  NavigatorIOS
} from 'react-native';

var Fetcher = require('./helpers/server');
var styles = require('./styles/styles');
var Loader = require('./App/Components/loader');
var Loaded = require('./App/Components/loaded');
var TeamPage = require('./App/Components/teampage');

class testproject extends Component {

  constructor(props) {
    super(props);

  }
  render() {
    // if(false)
    // {
    //   return this.loadedRoute();
    // }else{
      return this.unloadedRoute();
    // }
  }

  // loadedRoute(){
  //  return( <NavigatorIOS
  //       ref="nav"
  //       style={styles.navigateContainer}
  //       initialRoute={{
  //         title: 'Lowding',
  //         backButtonTitle: 'Back',
  //         component: Loader,
  //       }} translucent={false} barTintColor='#2C3138' tintColor='white' titleTextColor='white'/>
  //       )
  // }
  unloadedRoute(){
    return( <NavigatorIOS
        ref="nav"
        style={styles.navigateContainer}
        initialRoute={{
          title: 'Team Selection',
          component: TeamPage,
        }}translucent={false} barTintColor='#2C3138' tintColor='white' titleTextColor='white'/>
        )
  }
}

AppRegistry.registerComponent('testproject', () => testproject);


module.exports = testproject;
