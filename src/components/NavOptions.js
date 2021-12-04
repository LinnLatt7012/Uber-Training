import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FontAwesome5  from 'react-native-vector-icons/FontAwesome5'
import { useSelector } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import { selectOrigin } from '../slices/navSlice'
const data =[
    {
        id:"123",
        title:"Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id:"456",
        title:"Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen",
    },
]

const NavOptions = () => {
    const navigation = useNavigation()
    const origin = useSelector(selectOrigin)

    return (
        <FlatList
        data={data}
        horizontal
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>(
            <TouchableOpacity disabled={!origin}
            style={[tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 `, {height: 235}]}
                onPress={ ()=>navigation.navigate(item.screen)}
             >
                <View style={tw`${!origin && "opacity-20"}`}>
                <Image
                    style={{
                        width: 120,
                        height:120,
                        resizeMode:"contain",
                    }}
                    source={{
                        uri: item.image,
                    }}
                />
                <Text style={tw`text-black mt-2 text-lg font-semibold ml-1`}>{item.title}</Text>
                <FontAwesome5
                style={[tw`p-2 mt-10`],{fontSize: 30, marginTop: 10}}
                    name="arrow-circle-right"
                    color="black"
                    type="antdesign"
                />
                </View>
                
            </TouchableOpacity>
        )}
        />
    )
}

export default NavOptions

