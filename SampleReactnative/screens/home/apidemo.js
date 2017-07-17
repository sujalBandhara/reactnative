import React, { Component } from 'react';
import { AppRegistry, ListView,  View , StyleSheet ,TouchableOpacity ,Text , Alert , Image} from 'react-native';

var MOVIES_URL = "https://api.github.com/search/repositories?q=bawn"

const backIcon = require("./back.png");
export default class ApiDemo extends Component {

	 
  render() {
    if (this.state.dataSource.getRowCount() === 0) {
      return (
        <View style={styles.container}>
        <Text>
       Loading....
        </Text>
        </View>
      );
    }
    else {
      return (
        <View style={styles.container}>
       
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}>
        </ListView>
        </View>
      );
    }
  }
  constructor(props){
        super(props);
        this.state = {
          dataSource: new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
          }),
        };
    }
  componentWillMount() {
    fetch(MOVIES_URL)
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.items) {
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(responseData.items),
          });
        }
      })
      .done();
  }

  renderRow(repo: Object) {
      return (
        <View>
        <View style={styles.row}>
        <View style={styles.textcontainer}>
          <Text style={styles.title}>{repo.url}</Text>
          <Text style={styles.subtitle}>{repo.ssh_url}</Text>
        </View>
        </View>
      <View/>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5dc',

  },
  textcontainer: {
  paddingLeft: 10,
  },
  row: {
    alignItems: 'center',
    backgroundColor : 'white',
    flexDirection: 'row',
    padding : 5,
    marginTop:10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 8,
  },
   headerIconView: {
    marginLeft: 10,
    backgroundColor: 'transparent'
  },
  headerBackButtonView: {
    width: 25,
    height: 25,
  },
  headerContainer: {
    flex: 1,
  },
  backButtonIcon: {
    width: 25,
    height: 25
  },
});
