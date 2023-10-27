import React from 'react'
import { StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
   text:{
    color: "blue",
    fontSize: 10
   },
   bold: {
    fontWeight: "bold"
   },
   blue: {
    color :"blue"
   },
   big: {
    fontSize:20
   },
   small:{
    fontSize: 10
   }
})

const StyledText = ()=>{
    return (
        <Text>Texto dinamico</Text>
    )
}

export default StyledText