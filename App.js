/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Tab from './Source/screen/TabNavigation';
//import A from './Source/container/HistoryContainer/RedeemHistory'
export default class App extends Component {
  render() {
    return (
      <Tab/>
    );
  }
};
