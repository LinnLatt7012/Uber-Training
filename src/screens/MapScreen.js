
import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'
import NavigateCard from '../components/NavigateCard'
import { createStackNavigator } from '@react-navigation/stack'
import RideOptionCard from '../components/RideOptionCard'
import DrawerNavigation from '../navigation/DrawerNavigation'
import {  } from 'react-native-gesture-handler'
import { useNavigation } from "@react-navigation/native"
import FontAwesome5  from 'react-native-vector-icons/FontAwesome5'
const MapScreen = () => {
    const Stack = createStackNavigator();
    const navigation = useNavigation()
    return (
        <View>
            <TouchableOpacity style={tw`bg-gray-100 absolute top-10 
            left-8 z-50 p-3 rounded-full shadow-lg`}
            onPress={()=>navigation.navigate("HomeScreen")}>
                <FontAwesome5 
                name="bars"
                color="black"
                size={16}
                />
            </TouchableOpacity>
            
            <View style={tw`h-1/2 bg-red-100`}>
                <Map />
            </View>
            <View style={tw`h-1/2`}>
                <Stack.Navigator
                screenOptions={{
                    header: ()=>null
                }}>
                    <Stack.Screen 
                        name="NavigateCard"
                        component={NavigateCard}
                    />
                     <Stack.Screen 
                        name="RideOptionsCard"
                        component={RideOptionCard}
                    />
                </Stack.Navigator>
            </View>
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({})
