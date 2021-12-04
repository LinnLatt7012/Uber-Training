import React from 'react'
import  { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {
    Pressable,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';

const Stack = createStackNavigator();
export default function Navigation() {
    return (
        <NavigationContainer>
            
            <Stack.Navigator
            // screenOptions={{
            //     header: ()=>null
            // }}
            >
                <Stack.Screen 
                    name="Screen_A"
                    component={ScreenA}
                />
                <Stack.Screen 
                    name="Screen_B"
                    component={ScreenB}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    body:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10,
        color:'#000000'
    }
})