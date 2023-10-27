import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Enlace from './Enlace'
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 



const Enlaces = () => {
    const [onFocus, setOnFocus] = useState("perfil1")
  return (
    <View style={{flexDirection:"row", gap:5}}>
    <Enlace titulo="perfil1" onFocus={onFocus} setOnFocus={setOnFocus} icon= {<Ionicons name="md-person" size={30} color="white" />} />
    <Enlace titulo="perfil3" onFocus={onFocus} setOnFocus={setOnFocus} icon={<Ionicons name="md-calendar" size={30} color="white" />} />
    <Enlace titulo="perfil2" onFocus={onFocus} setOnFocus={setOnFocus} icon={<Ionicons name="md-home" size={30} color="white" />} />
    <Enlace titulo="perfil5" onFocus={onFocus} setOnFocus={setOnFocus} icon={<Ionicons name="settings" size={30} color="white" />} />
    <Enlace titulo="perfil4" onFocus={onFocus} setOnFocus={setOnFocus} icon={<FontAwesome5 name="bell" size={24} color="white" />} />
    </View>
  )
}

export default Enlaces