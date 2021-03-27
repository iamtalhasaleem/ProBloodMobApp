import React, {Component} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

import {w, h} from 'react-native-responsiveness';

import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Components
import {NavHeader} from '../../components';
import {Primary} from '../../color';

export class Notification extends Component {
  state = {data: [], username: ''};
  componentDidMount = () => {
  
    AsyncStorage.getItem('UsersName', (error, data) => {
      const userData = JSON.parse(data);
      if (userData !== null) {
        this.setState({
          username: userData,
        });
        this.dataFetch2();
   
     
      
      } else {
        console.log("ERROR");
      }
    });
  };

  dataFetch2 = async () => {
 
    let DataArray = [];
    firestore()
      .collection('notifications')
      // Filter results
      .where('requestername', '==', this.state.username)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          DataArray.push(documentSnapshot.data());
          console.log(DataArray);
          this.setState({data: DataArray});
        });
      });
      console.log( this.state.username);
  };

  renderItem = (item) => (
    <View style={styles.FlatListView}>
      <View style={styles.leftFlat}>
        <Text style={styles.textColor}>Request: {item.requestedblood}</Text>
        <Text style={styles.textColor}>Units: {item.requestedunits}</Text>
      </View>
      <View style={styles.RightFlat}>
        <Text style={styles.textColor}>Hospital {item.content}</Text>
      </View>
    </View>
  );

  render() {
    return (
      <View style={styles.Container}>
        <NavHeader
          txt="Notifications"
          onPress={() => {
            this.props.navigation.openDrawer();
          }}
        />
        <View style={styles.FlatListContianer}>
          <FlatList
            data={this.state.data}
            renderItem={({item}) => this.renderItem(item)}
            keyExtractor={(item) => item.requesterID}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    // backgroundColor: Primary,
    alignItems: 'center',
  },
  FlatListContianer: {
    // backgroundColor: 'red',
    width: '95%',
    height: h('90%'),
    alignItems: 'center',
  },
  FlatListView: {
    backgroundColor: Primary,
    width: w('90%'),
    height: h('10%'),
    margin: h('1%'),
    flexDirection: 'row',
    borderRadius: h('1%'),
  },
  leftFlat: {
    // backgroundColor: 'red',
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  RightFlat: {
    // backgroundColor: 'green',
    width: '66%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textColor: {
    color: 'white',
  },
});
