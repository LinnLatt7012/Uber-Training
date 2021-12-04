import React from 'react'
import { StyleSheet, Text, View, FlatList,TouchableOpacity} from 'react-native'
import tw from 'tailwind-react-native-classnames'
import FontAwesome5  from 'react-native-vector-icons/FontAwesome5'
const data = [
    {
        id:"123",
        icon:"home",
        location:"Home",
        destination:"Code Street, London, UK"
    },
    {
        id:"1456",
        icon:"briefcase",
        location:"Work",
        destination:"London Eye, London, UK"
    },
]
const NavFavourites = () => {
    return (
        <FlatList
            data ={data}
            keyEztractor={(item) => item.id}
            // style={[tw``,{
            //         borderColor: "#0000002a",
            //         borderWidth: 2,
            //         borderBottomWidth: 0,
            //         borderTopLeftRadius: 35,
            //         borderTopRightRadius: 35,
            //         }]}
            ItemSeparatorComponent={()=><View style={[tw`bg-gray-200 `,{height: 0.5}]} />}
            renderItem={({item: {location,destination,icon}})=>(
                <TouchableOpacity style={tw`flex-row items-center p-5`}>
                    <FontAwesome5
                    style={[tw`p-3 mr-4 rounded-full bg-gray-300`]}
                    name={icon}
                    color="white"
                    size={18}
                    type="ionicon"
                    />
                    <View>
                    <Text style={tw`text-black text-lg font-semibold`}>{location}</Text>
                    <Text style={tw`text-gray-500`}>{destination}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavFavourites

const styles = StyleSheet.create({})
