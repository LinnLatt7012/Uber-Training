import React from 'react'
import { StyleSheet, Text, View,SafeAreaView, StatusBar,Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from "@env"
import { useDispatch } from 'react-redux'
import { setDestination, setOrigin } from '../slices/navSlice'
import { location} from '../services/LocationApi'
import NavFavourites from '../components/NavFavourites'

const HomeScreen = () => {
      const dispatch = useDispatch();
    return (
        <SafeAreaView style={[tw`bg-white h-full`]}>
        <View style={tw`p-5`}>
            <Image
              style={{
                width: 100,
                height:100,
                resizeMode:"contain",
              }}
              source={{
                uri: "https://links.papareact.com/gzs",
              }}
            />
            <GooglePlacesAutocomplete
              placeholder="Where from?"
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
                  margin: 0,
                  borderColor: "#0000002a",
                },
                textInputContainer: {
                  color:'#000',
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
                  setOrigin(location[0])
                )
                dispatch(
                  setDestination(null)
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
        
          <NavOptions />
          <NavFavourites />
          </View>
        </SafeAreaView>
    )
}

export default HomeScreen
