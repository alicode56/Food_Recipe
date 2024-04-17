import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'

const SearchFilter = ({ placeholder, }) => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderRadius: 8,
        width: '92%',
        alignSelf: 'center',
        alignItems: "center",
        paddingHorizontal: "3%",
        marginVertical: "4%",

      }}>
      <Image source={require('../Images/search.png')}
        style={{ width: 24, height: 24, tintColor: "#f96163" }} />
      <TextInput placeholder={placeholder} />

    </View>
  )
}

export default SearchFilter