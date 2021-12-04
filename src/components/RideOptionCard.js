import React,{useState} from 'react'
import { StyleSheet, Text, View,SafeAreaView ,TouchableOpacity, FlatList,Image, ScrollView} from 'react-native'
import tw from "tailwind-react-native-classnames"
import { useNavigation } from "@react-navigation/native"
import FontAwesome5  from 'react-native-vector-icons/FontAwesome5'
import { selectTravelTimeInformation, setTravelTimeInformation } from '../slices/navSlice'
import { useSelector } from 'react-redux'

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

const RideOptionCard = () => {
    const navigation = useNavigation()
    const [selected, setSelected] = useState(null)
    const TravelTimeInformation = useSelector(selectTravelTimeInformation)
    const charge_rate = 0.4
    return (
        <>
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
            <Text style={tw`text-black text-center py-4 text-xl border-b border-gray-200 `} >{TravelTimeInformation?.status == "OK"? "select a Ride -"+TravelTimeInformation?.distance?.text: "Uber can't drive there"}</Text>
        </View>
        {TravelTimeInformation?.status == "OK"?
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
                 style={tw`flex-row justify-between items-center px-5  ${
                   id === selected?.id && "bg-gray-200"
                 }`}
                 onPress={()=>setSelected(item)}>
                    <Image 
                    style={{width:100, height:100, resizeMode:"contain"}}
                     source={{
                        uri: imgUrl,
                    }}
                    />
                    <View style={tw`-ml-6 pl-2 `}>
                    <Text style={tw`text-black `}>{service}</Text>
                    <Text style={tw`text-gray-500 font-semibold `}>Travel Time- {TravelTimeInformation?.duration?.text}</Text>
                    </View>
                    <Text style={tw`text-black text-xl `}>
                      ${Math.round((TravelTimeInformation?.duration?.value*
                          charge_rate*
                          multiplier)/100)
                      }
                      </Text>
                </TouchableOpacity>
            )}
        />: null
                    }
        <View style={[tw`mt-auto`,{
                    borderColor: "#00000015",
                    borderWidth: 2,
                    borderBottomWidth: 0,
                    borderTopLeftRadius: 25,
                    borderTopRightRadius: 25,
                    }]}>
              <TouchableOpacity
                disabled={!selected}
                style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}
              >
                <Text style={tw`text-center text-white text-xl`}>
                    Choose {selected?.service}
                </Text>
              </TouchableOpacity>
        </View>
        </>
    )
}

export default RideOptionCard

const styles = StyleSheet.create({})
