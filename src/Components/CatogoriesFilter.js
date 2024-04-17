import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { categories, colors } from '../Screens/ListOfConstantCagogories'

const CatogoriesFilter = () => {
    return (
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    categories.map((category, index) => {
                        return (
                            <View style={{
                                backgroundColor:  index === 0 ? colors.COLOR_PRIMARY : colors.COLOR_LIGHT,
                                borderRadius: 18,
                                marginRight: 36,
                                paddingHorizontal: 16,
                                paddingVertical: 10,
                                marginVertical: 16,



                                // shadowColor: '#000',
                                // shadowOffset: { width: 0, height: 4 },
                                // shadowOpacity: 0.1,
                                // shadowRadius: 7
                            }}>
                                <Text style={{
                                    color: index === 0 && colors.COLOR_LIGHT,
                                    fontSize: 18
                                }}>
                                    {category.category}</Text>
                            </View>
                        )

                    })
                }
            </ScrollView>
        </View>
    )
}

export default CatogoriesFilter

