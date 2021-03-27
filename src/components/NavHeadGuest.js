import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {w, h} from 'react-native-responsiveness';
import {Icon} from 'react-native-elements';

export class NavHeadGuest extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.left}></View>
        <View style={styles.middle}>
          <Text style={styles.color}>{this.props.txt}</Text>
        </View>
        <View style={styles.left}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: h('8%'),

    flexDirection: 'row',
    elevation: 2,
  },
  icon: {
    // backgroundColor: 'tomato',
    width: '15%',
    height: h('8%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  middle: {
    // backgroundColor: 'red',
    width: '70%',
    height: h('8%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  color: {
    color: '#0007',
    fontSize: h('3%'),
  },
  left: {
    // backgroundColor: 'tomato',
    width: '15%',
    height: h('8%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
