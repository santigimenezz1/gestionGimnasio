import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'; 

const Enlace = ({icon,titulo, onFocus, setOnFocus}) => {
    const styles = StyleSheet.create({
        icon:{
            color:"red",
            width: 60,
            height:60,
            borderWidth: "none",
            borderRadius:60,
            alignItems:"center",
            justifyContent:"center",
            backgroundColor: onFocus === titulo ? "#1DB954" : "black"
        }
    })
  return (
    <TouchableOpacity onPress={()=>setOnFocus(titulo)}>
    <View style={styles.icon }>
    {icon}
    </View>
    </TouchableOpacity>
    
  )
}

export default Enlace