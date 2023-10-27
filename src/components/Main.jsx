import React from 'react'
import {View, Text, TouchableHighlight } from 'react-native'
import RepositoryList from './RepositoryList'
import StyledText from './StyledText'
import constants from 'expo-constants'
import NavBar from './NavBar/NavBar'


const Main = ( {navegar} )=>{
    return (
        <View style={{marginTop: constants.statusBarHeight}}>
        <NavBar navegar={navegar} />
        <RepositoryList />
        </View>
)
}
export default Main