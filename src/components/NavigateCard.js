import React from 'react'
import { SafeAreaView, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from "@env"
import { useDispatch,useSelector } from 'react-redux'
import { setDestination, setOrigin, selectDestination} from '../slices/navSlice'
import { location} from '../services/LocationApi'
import NavFavourites from '../components/NavFavourites'
import FontAwesome5  from 'react-native-vector-icons/FontAwesome5'
const NavigateCard = ({navigation}) => {
    const dispatch = useDispatch()
    const destination = useSelector(selectDestination)
    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-black text-center py-5 font-bold text-lg`}>Good Morning, Linn Latt</Text>
            <View style={tw`border-t border-gray-200 flex-shrink `}>
                <GooglePlacesAutocomplete
              placeholder="To Where ?"
              styles={{
                container:{
                  flex: 0,
                  zIndex: 99,
                },
                textInput:{
                  fontSize:18,
                  color:'#000',
                  backgroundColor:"#fff",
                  borderWidth:2,
                  margin: 4,
                  marginLeft: 10,
                  marginRight: 10,
                  borderColor: "#0000002a",
                },
                textInputContainer: {
                  color:'#00f',
                },
                predefinedPlacesDescription: {
                  color: '#adb',
                },
                poweredContainer: {
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  borderBottomRightRadius: 5,
                  borderBottomLeftRadius: 5,
                  borderColor: '#c7c',
                  borderTopWidth: 0.5,
                },
              }}
              onFail={(error)=>{
                dispatch(
                  destination? setDestination(location[1]): setDestination(location[2])
                )
              }}

              onPress={(data, details = null)=>{
                console.log("data")
              }}

              query={{
                key: GOOGLE_MAPS_APIKEY,
                language: 'en',
              }}
              nearbyPlacesAPI="GooglePlacesSearch"
              debounce={400}

            />
            <NavFavourites />
            </View>
            <View style={tw`flex-row bg-white justify-evenly rounded-full py-2 mt-auto 
            border-t-2 border-gray-200`}>
            <TouchableOpacity style={tw`flex bg-black justify-between flex-row w-24 px-4 py-3
            rounded-full`}
            onPress={()=>{
                navigation.navigate("RideOptionsCard")
            }}
            >
              <FontAwesome5
                    style={[tw``]}
                    name="car"
                    color="white"
                    size={16}
                    // type="ionicon"
                    />
              <Text style={tw`text-white text-center `}>Rides </Text>
            </TouchableOpacity>
            <TouchableOpacity style={tw`flex flex-row justify-between w-24 px-4 py-3
            rounded-full`}>
              <FontAwesome5
                    style={[tw``]}
                    name="utensils"
                    color="black"
                    size={16}
                    // type="ionicon"
                    />
              <Text style={tw`text-black text-center `}>Rides </Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView >
    )
}

export default NavigateCard

const styles = StyleSheet.create({})
