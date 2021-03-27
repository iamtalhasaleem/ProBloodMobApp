import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  Animated,
} from 'react-native';
import {w, h} from 'react-native-responsiveness';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-elements';

export class Button extends Component {
  render() {
    return (
      <TouchableOpacity
        {...this.props}
        delayPressIn={0}
        style={this.props.TopMargin}>
        <LinearGradient colors={['#1BA7CA', '#192f6a']} style={styles.signIn}>
          <Text style={[styles.textSign]}>{this.props.Text}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  signIn: {
    width: w('60%'),
    height: h('5%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: h('10%'),
    marginTop: h('1%'),
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: h('2.3%'),
  },
});
