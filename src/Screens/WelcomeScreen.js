import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFFFFF' }}>
            <Image source={require('../Images/welcome1.png')}
                style={{ width: '100%', height: '70%' }} />
            <Text style={{
                color: '#f96163',
                fontSize: 20,
                fontWeight: 'bold'
            }}>
                40k + Premium Recipies
            </Text>
            <Text style={{
                fontWeight: 'bold',
                fontSize: 40,
                marginTop: 5,
                marginBottom: 20
            }}>
                Cook like A Chef
            </Text>
            <TouchableOpacity style={{
                backgroundColor: '#f96163',
                width: '70%',
                borderRadius: 70,
                alignItems: 'center',
                paddingVertical: 14

            }}
                onPress={() => navigation.navigate('MainRecipeList')}>
                <Text style={{
                    fontWeight: '600',
                    fontSize: 18,
                    color: '#fff'
                }}>
                    Let's go
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default WelcomeScreen