import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView,TouchableOpacity, FlatList,Image } from 'react-native'
import tw from "tailwind-react-native-classnames"
import { useNavigation } from "@react-navigation/native"
import FontAwesome5  from 'react-native-vector-icons/FontAwesome5'

const carList = [
  {
    id: "Uber-X-789",
    imgUrl: 'https://i.ibb.co/cyvcpfF/uberx.png',
    service: 'UberX',
    multiplier: 1,
  },
  {
    id: "Uber-XL-789",
    imgUrl: 'https://i.ibb.co/YDYMKny/uberxl.png',
    service: 'UberXL',
    multiplier: 1.5,
  },
  {
    id: "Uber-Black-789",
    imgUrl: 'https://i.ibb.co/Xx4G91m/uberblack.png',
    service: 'Black',
    multiplier: 2,
  },
  {
    id: "Uber-Comfort-789",
    imgUrl: 'https://i.ibb.co/cyvcpfF/uberx.png',
    service: 'Comfort',
    multiplier: 1.2,
  },
  {
    id: "Uber-Black-SUV-789",
    imgUrl: ' https://i.ibb.co/1nStPWT/uberblacksuv.png',
    service: 'Black SUV',
    multiplier: 2.8,
  }
]

const RideOption = () => {
    const navigation = useNavigation()
    const [selected, setSelected] = useState(null)
    return (
        <SafeAreaView style ={tw`bg-white flex-grow`}>
        <View>
            <TouchableOpacity 
            onPress={()=> navigation.navigate("NavigateCard")}
            style={[tw`absolute top-3 left-5 z-50 p-3 rounded-full `]}
            >
                <FontAwesome5 
                    name="chevron-left"
                    color="black"
                    // size={16}
                    type="fontawsome"
                />
            </TouchableOpacity>
            <Text style={tw`text-black text-center py-5 text-xl `} >select a Ride</Text>
        </View>
        <FlatList
            data ={carList}
            keyEztractor={(item) => item.id}
            // style={[tw``,{
            //         borderColor: "#0000002a",
            //         borderWidth: 2,
            //         borderBottomWidth: 0,
            //         borderTopLeftRadius: 35,
            //         borderTopRightRadius: 35,
            //         }]}
            ItemSeparatorComponent={()=><View style={[tw`bg-gray-200 `,{height: 0.5}]} />}
            renderItem={({item: {id,service,imgUrl,multiplier},item})=>(
                <TouchableOpacity
                 style={tw`flex-row justify-between items-center px-5`}
                 onPress={()=>setSelected(item)}>
                    <Image 
                    style={{width:100, height:100, resizeMode:"contain"}}
                     source={{
                        uri: imgUrl,
                    }}
                    />
                    <View style={tw`-ml-6  w-24`}>
                    <Text style={tw`text-black `}>{service}</Text>
                    <Text style={tw`text-gray-500 `}> Rate: {multiplier}x</Text>
                    </View>
                    <Text style={tw`text-black text-xl w-24 text-right`}>${99*multiplier}</Text>
                </TouchableOpacity>
            )}
        />
        <View>
              <TouchableOpacity
                disabled={!selected}
                style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}
              >
                <Text style={tw`text-center text-white text-xl`}>
                    Choose {selected?.service}
                </Text>
              </TouchableOpacity>

        </View>

        </SafeAreaView>
    )
}

export default RideOption

const styles = StyleSheet.create({})
