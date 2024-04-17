import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import SearchFilter from '../Components/SearchFilter'
import CatogoriesFilter from '../Components/CatogoriesFilter'
import RecipeCard from '../Components/RecipeCard'

const RecipeList = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
      <Header headerText={'Hi, Ali'} />
      <SearchFilter placeholder={'Enter your favorite recipe'} />

      <View>
        <Text style={{ fontWeight: '600', fontSize: 22 }}>Categories</Text>
        <CatogoriesFilter />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: '600', fontSize: 22 }}>Recipes</Text>
        <RecipeCard />
      </View>
    </SafeAreaView>
  )
}

export default RecipeList