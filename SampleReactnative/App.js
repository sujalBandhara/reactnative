import React, { Component } from 'react';
import {
  AppRegistry,
  UIManager,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
  BackAndroid
} from 'react-native';
import { StackNavigator } from 'react-navigation';

var LoginPage = require('./screens/login/index');
var SignupPage=require('./screens/signup/index');
var SplashPage= require('./screens/splashscreen/index');

export default  App = StackNavigator(
{
  SplashPage: { 
    screen: SplashPage,
    navigationOptions: {
      header:false ,
    },
   },
  
    SignupPage: { 
    screen: SignupPage,
    navigationOptions: {
      header:false ,
    },
   },
   LoginPage: { 
    screen: LoginPage,
    navigationOptions: {
      header:false ,
    },
   },
  
},

{
initialRouteName: 'SplashPage',
 headerMode: 'screen',
}
);


UIManager.setLayoutAnimationEnabledExperimental(true);

