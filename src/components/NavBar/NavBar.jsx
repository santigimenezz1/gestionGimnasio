import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import constants from 'expo-constants'
import Enlace from './Enlace/Enlace'
import Enlaces from './Enlace/Enlaces'



const NavBar = () => {
  

 const styles = StyleSheet.create({
  navBar:{
    flexDirection:"row",
    justifyContent:"center",
    gap:10,
    position:"absolute",
    bottom:0,
    width:"100%",
    backgroundColor:"transparent",
    color:"black",
    paddingBottom:30,
    paddingTop:20
  }
  
 })

  return (
    <View style={styles.navBar}>
    <Enlaces />
    </View>
  )
}

export default NavBar