import { View, Text, Image, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const RecipeDetailsScreen = ({ navigation, route }) => {
    const { item } = route.params;

    console.log(item);
    return (
        <View style={{ backgroundColor: item.color, flex: 1 }}>

            <SafeAreaView style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 10
            }}>
                <Pressable style={{}}
                    onPress={() => navigation.goBack()}>
                    <Image source={require('../Images/backbtn.png')}
                        style={{ width: 24, height: 24, tintColor: 'white' }} />
                </Pressable>

                <Image source={require('../Images/heartfilled.png')}
                    style={{ width: 24, height: 24, tintColor: 'white' }} />

            </SafeAreaView>


            <View style={{
                flex: 1,
                backgroundColor: '#fff',
                marginTop: 140,
                borderTopLeftRadius: 56,
                borderTopRightRadius: 56,
                alignItems: 'center',
                paddingHorizontal: 16
            }}>

                <View style={{

                    height: 300,
                    width: 300,
                    position: 'absolute',
                    top: -150
                }}>
                    <Image source={item.image}
                        style={{
                            width: '100%',
                            height: '100%', resizeMode: 'contain'
                        }} />

                </View>

                <Text style={{
                    marginTop: 160,
                    fontWeight: 'bold', fontSize: 28
                }}>
                    {item.name}</Text>

                <View style={{ flex: 1 }}>
                    <ScrollView>

                        <Text style={{ fontSize: 18, fontWeight: '600' }}>
                            {item.description}

                        </Text>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            // backgroundColor: 'green',
                            width: '100%',


                        }}>
                            <View style={{
                                backgroundColor: "rgba(255,165,0,0.48)",
                                // paddingHorizontal: 9,
                                paddingVertical: 10,
                                borderRadius: 8,
                                alignItems: 'center',
                                width: 100
                            }}>
                                <Text style={{ fontSize: 40 }}>⌚</Text>
                                <Text style={{ fontSize: 20, fontWeight: '400' }}>
                                    {item.time}</Text>

                            </View>

                            <View style={{
                                backgroundColor: "rgba(135,206,235,0.8)",
                                // paddingHorizontal: 14,
                                paddingVertical: 10,
                                borderRadius: 8,
                                alignItems: 'center',
                                width: 100
                            }}>
                                <Text style={{ fontSize: 40 }}>🍜</Text>
                                <Text style={{ fontSize: 20, fontWeight: '400' }}>
                                    {item.difficulity}</Text>

                            </View>

                            <View style={{
                                backgroundColor: "rgba(255,0,0,0.38)",
                                // paddingHorizontal: 12,
                                paddingVertical: 10,
                                borderRadius: 8,
                                // marginRight:30,
                                alignItems: 'center',
                                width: 100
                            }}>
                                <Text style={{ fontSize: 40 }}>🔥</Text>
                                <Text style={{ fontSize: 20, fontWeight: '400' }}>
                                    {item.calories}</Text>

                            </View>
                        </View>

                        <View style={{ alignSelf: 'flex-start', marginVertical: 22 }}>
                            <Text style={{ fontSize: 22, fontWeight: '600', marginBottom: 4 }}>
                                Ingredients
                            </Text>

                            {
                                item.ingredients.map((ingredient) => {
                                    return (

                                        <View style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            marginVertical: 2
                                        }}>
                                            <View style={{
                                                backgroundColor: 'red', width: 10, height: 10, borderRadius: 5
                                            }}>
                                            </View>
                                            <Text style={{ fontSize: 18, marginLeft: 6 }}>{ingredient}</Text>
                                        </View>
                                    )
                                })
                            }

                        </View>

                        {/* recipe steps */}
                        <View style={{ alignSelf: 'flex-start', marginVertical: 22 }}>
                            <Text style={{ fontSize: 22, fontWeight: '600', marginBottom: 4 }}>
                                Steps :
                            </Text>

                            {
                                item.steps.map((step, index) => {
                                    return (

                                        <View style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            marginVertical: 2
                                        }}>
                                            <Text
                                                style={{ fontSize: 18, marginLeft: 6, marginVertical: 6 }}>{`${index + 1
                                                    } ) ${step}`}</Text>
                                        </View>
                                    )
                                })
                            }

                        </View>

                    </ScrollView>
                </View>

            </View>
        </View>
    )
}

export default RecipeDetailsScreen