import React from 'react'
import  { NavigationContainer } from '@react-navigation/native'
import { StyleSheet } from 'react-native';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5  from 'react-native-vector-icons/FontAwesome5'
const Tab = createMaterialBottomTabNavigator();
function TabNavigation() {
    return (
        <>
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={({route})=>({
                tabBarIcon:({focused, size, color}) =>{
                let iconName;
                if(route.name === 'Screen_A'){
                    iconName = 'home';
                    size = focused? 25 : 20;
                    color = focused? '#90f' : '#555';
                }else if(route.name === 'Screen_B' ){
                    iconName ='app-store-ios';
                    size = focused? 25 : 20;
                    color = focused? '#90f' : '#555';
                }
                return (
                    <FontAwesome5
                    name={iconName}
                    size={size}
                    color={color}
                    />
                )
                }
            })}
            tabBarOptions ={{
                activeTintColor: '#000',
                inactiveTintColor: '#555',
                activeBackgroundColor: '#fff',
                inactiveBackgroundColor: '#999',
                showLabel: true,
                labelStyle:{
                    fontSize: 40,
                    fontWeight: 900
                }
            }}
            activeColor = '#f0edf6'
            >
            <Tab.Screen
                name="Screen_A"
                component={ScreenA}
                options={{
                tabBarLabel: 'Home',
                // tabBarIcon: ({ color }) => (
                //     <MaterialCommunityIcons name="home" color={color} size={26} />
                // ),
                tabBarBadge:3
                }}
            />
            <Tab.Screen
                name="Screen_B"
                component={ScreenB}
                // options={{
                // tabBarLabel: 'Updates',
                // tabBarIcon: ({ color }) => (
                //     <MaterialCommunityIcons name="bell" color={color} size={26} />
                // ),
                // }}
            />
            
            </Tab.Navigator>
        </NavigationContainer>
        </>
    )
}

export default TabNavigation

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
        color:'#fff'
    }
})