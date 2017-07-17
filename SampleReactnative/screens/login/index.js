import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
  BackAndroid
} from 'react-native';



const { width, height } = Dimensions.get("window");

const background = require("./login1_bg.png");
const mark = require("./login1_mark.png");
const lockIcon = require("./login1_lock.png");
const personIcon = require("./login1_person.png");

var alertMessage = 'Button Click';
var alertTitle='Test';




 class LoginScreen extends Component {

  constructor(props) {
  super(props);
   this.state = {
    username: '',
    password:''
  }
}
  
 _signin()
  {
    console.log('Press');
      var unm=this.state.username;
      var pass=this.state.password;

    //var username = this.state.username;
    //console.log(this.state.username);

   /* Alert.alert(
            alertTitle,
            pass);
    console.log('Sign In');*/
 /* var navigator = this.props.navigator.push({ transitionType : 'PushFromRight', id : 'HomePage' });*/

           

  }
  _fogotPassword()
  {
    /*Alert.alert(
            alertTitle,
            'fogotPassword Click');*/
           
            /* var navigator = this.props.navigator;
           navigator.replace({
                id: 'ForgotPassword',
              });*/
         
  }
  _signup()
  {
    /*Alert.alert(
            alertTitle,
            'Sign Up Click');*/
            //<SignupScreen/>
            
           /*var navigator = this.props.navigator;
           navigator.replace({
                id: 'SignupPage',
              });*/
             this.props.navigation.navigate('SignupPage');
         

  } 
  
  render() {

  
    return (

    

      <View style={styles.container}>
        <Image source={background} style={styles.background} resizeMode="cover">
          <View style={styles.markWrap}>
            <Image source={mark} style={styles.mark} resizeMode="contain" />
          </View>
          <View style={styles.wrapper}>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image source={personIcon} style={styles.icon} resizeMode="contain" />
              </View>
              <TextInput 
                onChangeText={(text) => this.setState({username: text})} value={this.state.username}
                placeholder="Username" 
                placeholderTextColor="#FFF"
                style={styles.input} 
              />
            </View>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image source={lockIcon} style={styles.icon} resizeMode="contain" />
              </View>
              <TextInput 
              onChangeText={(text) => this.setState({password: text})} value={this.state.password}
                placeholderTextColor="#FFF"
                placeholder="Password" 
                style={styles.input} 
                
      
                secureTextEntry 
              />
            </View>
            <TouchableHighlight activeOpacity={.5}  underlayColor='transparent'  onPress={()=>this._fogotPassword()}>
              <View>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </View>
            </TouchableHighlight >
 
            <TouchableHighlight activeOpacity={.5}  underlayColor='transparent'    onPress={() => this._signin()}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Sign In</Text>

              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.container}>
            <View style={styles.signupWrap}>
              <Text style={styles.accountText}>Don't have an account?</Text>
              <TouchableHighlight activeOpacity={.5}  underlayColor='transparent'  onPress={()=>this._signup()}>
                <View>
                  <Text style={styles.signupLinkText}>Sign Up</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </Image>
      </View>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  markWrap: {
    flex: 1,
    paddingVertical: 30,
  },
  mark: {
    width: null,
    height: null,
    flex: 1,
  },
  background: {
    width,
    height,
  },
  wrapper: {
    paddingVertical: 30,
  },
  inputWrap: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC"
  },
  iconWrap: {
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 20,
    width: 20,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#FF3366",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
   


  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
  forgotPasswordText: {
    color: "#D8D8D8",
    backgroundColor: "transparent",
    textAlign: "right",
    paddingRight: 15,

  },
  signupWrap: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  accountText: {
    color: "#D8D8D8"
  },
  signupLinkText: {
    color: "#FFF",
    marginLeft: 5,
  }
});
module.exports =LoginScreen ;