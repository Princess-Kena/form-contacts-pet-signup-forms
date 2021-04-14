import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import LoginScreen from './LoginScreen';
import Contact from './Components/Contact'
import ContactsScreen from './ContactsScreen';
import SignUpForm from './SignUpForm';
import PetScreen from './PetScreen';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
       < SignUpForm />
      </View>
    );
  }
};
const styles = StyleSheet.create({
 container:{
  marginTop:100
 }
})

export default App;
