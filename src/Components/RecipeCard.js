import React from 'react';
import { View, Text, FlatList, Image, Pressable, Alert } from 'react-native';
import { recipeList, colors } from '../Screens/ListOfConstantCagogories';
import { useNavigation } from '@react-navigation/native';


const RecipeCard = () => {
    const navigation = useNavigation();
    return (
        <FlatList
            data={recipeList}
            renderItem={({ item }) => (

                <Pressable
                    onPress={() => navigation.navigate('RecipeDetailsScreen', { item: item })}
                    style={{
                        backgroundColor: colors.COLOR_LIGHT,
                        borderRadius: 16,
                        marginVertical: 16,
                        alignItems: 'center',
                        paddingHorizontal: 8,
                        paddingVertical: 26,

                    }}>
                    <Image source={item.image}
                        style={{ width: 150, height: 150, resizeMode: 'center' }} />
                    <Text>{item.name}</Text>
                    <View style={{ flexDirection: 'row', marginTop: 2 }}>
                        <Text>{item.time}</Text>
                        <Text style={{ fontWeight: 'bold' }}> | </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginRight: 4 }}>{item.rating}</Text>
                            <Image source={require('../Images/star.png')}
                                style={{
                                    width: 12, height: 12,
                                    tintColor: colors.COLOR_PRIMARY
                                }} />
                        </View>
                    </View>
                </Pressable>
            )}
            numColumns={2}
            columnWrapperStyle={{
                justifyContent: "space-between"
            }}
            showsVerticalScrollIndicator={false}
        />
    );
};

export default RecipeCard;



