import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from '../Screens/WelcomeScreen'
import MainRecipeList from '../Screens/MainRecipeList'
import RecipeDetailsScreen from '../Screens/RecipeDetailsScreen'

const Stack=createNativeStackNavigator();
const AppNavigator = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}> 
        <Stack.Screen name='WelcomeScreen' component={WelcomeScreen}></Stack.Screen>
        <Stack.Screen name='MainRecipeList' component={MainRecipeList}></Stack.Screen>
    <Stack.Screen name='RecipeDetailsScreen' component={RecipeDetailsScreen}></Stack.Screen>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default AppNavigator