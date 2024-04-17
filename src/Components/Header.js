import { Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Header = ({ headerText}) => {
  return (
    <SafeAreaView style={{ flexDirection: 'row', marginTop: 4, }}>
      <Text style={{ fontSize: 20, fontWeight: '900', flex: 1, }}>
        {headerText}</Text>
      <Image source={require('../Images/bell.png')}
        style={{ width: 24, height: 24, tintColor: "#f96163" }} />


    </SafeAreaView>
  )
}

export default Header