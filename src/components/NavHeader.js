import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {w, h} from 'react-native-responsiveness';
import {Icon} from 'react-native-elements';

export class NavHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity {...this.props} delayPressIn={0} style={styles.icon}>
          <Icon name={'menu-sharp'} type="ionicon" color="#0007" size={35} />
        </TouchableOpacity>
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
