import React, { Component } from 'react';
import { View ,StyleSheet ,Text,Image,Alert} from 'react-native';

import {  Navbar } from 'navbar-native';
import  BottomNavigation from 'react-native-bottom-navigation';
import { FormLabel, FormInput } from 'react-native-elements';


import { Container, Content, Footer, FooterTab, Button, 
  Icon, Badge , ListItem,Spinner, Drawer, CheckBox , List,Left, Body,Card, CardItem, Right,Header,Title,InputGroup, Input,ActionSheet} from 'native-base';
//import slidemenu from './screens/slidemenu/index';
var slidemenu=require('./slidemenu');
const menu = require("./assets/menu.png");
import ApiDemo from './apidemo';
var BUTTONS = [
  'Option 0',
  'Option 1',
  'Option 2',
  'Delete',
  'Cancel',
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
class HomePage extends Component {
    constructor(props) {
    super(props);
    this.state = {}
  }
   

    logout()
    {
        /*var navigator = this.props.navigator;
           navigator.replace({
                id: 'LoginPage',
              });*/
              var navigator = this.props.navigator.pop({ transitionType : 'PopFromLeft', id : 'LoginPage' });
    }
    menu()
    {
        Alert.alert(
            "Click..",
            "Menu");
    }
    Contact()
    {
            Alert.alert(
            "Click..",
            "Contact");
    }
    Navigate()
    {
            Alert.alert(
            "Click..",
            "Navigate");
    }
    Camera()
    {
            Alert.alert(
            "Click..",
            "Camera");
    }
    API()
    {

            
    }
    render() {
        return (
           <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={()=> ActionSheet.show(
            {
              options: BUTTONS,
              cancelButtonIndex: CANCEL_INDEX,
              destructiveButtonIndex: DESTRUCTIVE_INDEX,
              title: 'Testing ActionSheet'
            },
            (buttonIndex) => {
              this.setState({ clicked: BUTTONS[buttonIndex] });
            }
            )}>
                            {/*<Text style={{color: 'white',fontSize: 14,} }>  Menu</Text>*/}
                             <Image 
                            source={menu} 
                            style={{width: 25,height: 25,}}
                                />
                            
                        </Button>
                    </Left>
                    <Body>
                        <Title>Home</Title>
                    </Body>
                    <Right>
                    <Button transparent onPress={()=>this.logout()}>
                            <Text style={{color: 'white'}}>  Logout</Text>
                        </Button>
                    </Right>
                </Header>
                <Content>
                    
                    {/*<Text>Your main content goes here</Text>*/}
                  
    
                    <Text >API DEMO</Text>
                    <ApiDemo/>
                    
                </Content>
                <Footer>
                    <FooterTab>
                        <Button onPress={()=>this.API()}>
                        <Icon name="apps" />
                            <Text style={{color: 'white'}}>API</Text>
                        </Button>
                        <Button onPress={()=>this.Camera()}>
                        <Icon name="camera" />
                            <Text style={{color: 'white'}}>Camera</Text>
                        </Button>
                        <Button active onPress={()=>this.Navigate()}>
                         <Icon active name="navigate" />
                            <Text style={{color: 'white'}}>Navigate</Text>
                        </Button>
                        <Button onPress={()=>this.Contact()}>
                         <Icon active name="person" />
                            <Text style={{color: 'white'}}>Contact</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
          
            
            
        );
    }
}
module.exports = HomePage;