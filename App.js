import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {  StyleSheet,Text, View } from 'react-native';
import Main from './src/components/Main';
import constants from 'expo-constants'
import RepositoryList from './src/components/RepositoryList';
import StyledText from './src/components/StyledText';
import Navigation from './src/components/Navigation/Navigation';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from 'react-native';
import NavBar from './src/components/NavBar/NavBar';

export default function App() {
  return (
    <View style={{ flex: 1, marginTop: constants.statusBarHeight }}>
    <Main />
    <NavBar />
    </View>
  );
}


























const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
