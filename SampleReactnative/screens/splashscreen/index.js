import React, { Component } from 'react'
import {
  
  Text,
  View
  
} from 'react-native';

import { NavigationActions } from 'react-navigation';

class SplashPage extends Component {
  componentWillMount() {
      setTimeout(() => {
   
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'LoginPage' })],
    });

    this.props.navigation.dispatch(resetAction);
    }, 3000);

  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#246dd5', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: 'white', fontSize: 20,}}>Welcome To SplashScreen</Text>
      </View>
    );
  }
}

module.exports = SplashPage;
