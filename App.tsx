import {StyleSheet, Text, View} from 'react-native'
import React from 'react'

import StackNavigation from './src/navigator/StackNavigation'
import { Provider } from 'react-redux';
//import { store } from './src/store/store';
//import store from './src/store/store';

function App() {

  return (
    <StackNavigation/>
  );
}

export default App;

const styles = StyleSheet.create({});
