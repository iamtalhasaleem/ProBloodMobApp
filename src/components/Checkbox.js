/* eslint-disable react/self-closing-comp */
import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import {w, h} from 'react-native-responsiveness';

export class Checkbox extends React.Component {
  state = {
    clicked: false,
  };

  render() {
    return (
      <View style={styles.box}>
        {this.state.clicked === false ? (
          <TouchableOpacity
            onPress={() => {
              this.setState({clicked: !this.state.clicked});
            }}
            style={styles.ShapeBox}
          />
        ) : null}

        {this.state.clicked === true ? (
          <TouchableOpacity
            onPress={() => {
              this.setState({clicked: !this.state.clicked});
            }}
            style={styles.CheckedShapeBox}
          />
        ) : null}

        <Text style={styles.Checkbox}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    // backgroundColor: 'red',
    width: w('40%'),
    height: h('6%'),
    flexDirection: 'row',
    // justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: h('1%'),
  },
  ShapeBox: {
    backgroundColor: '#e2e2e2',
    width: w('4%'),
    height: h('2.5%'),
  },
  Checkbox: {
    fontSize: h('2%'),
    fontWeight: '600',
    paddingLeft: h('1%'),
  },
  CheckedShapeBox: {
    backgroundColor: 'green',
    width: w('4%'),
    height: h('2.5%'),
  },
});
