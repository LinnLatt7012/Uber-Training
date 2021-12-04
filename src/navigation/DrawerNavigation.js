import React from 'react'
import  { NavigationContainer } from '@react-navigation/native'
import { StyleSheet } from 'react-native';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import FontAwesome5  from 'react-native-vector-icons/FontAwesome5'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
const Drawer = createDrawerNavigator();
function DrawerNavigation() {
    return (
        <>

            <Drawer.Navigator
            initialRouteName="Screen_B"
            hiddenStatusBar={true}
            drawerPostion = 'right'
            defaultStatus="open"
            edgeWidth={200}
            screenOptions={
                ({route})=>({
                drawerIcon:({focused, size, color}) =>{
                let iconName;
                if(route.name === 'Screen_A'){
                    iconName = 'home';
                    size = focused? 25 : 20;
                    color = focused? '#90f' : '#555';
                }else if(route.name === 'Screen_B' ){
                    iconName ='user-circle';
                    size = focused? 25 : 20;
                    color = focused? '#90f' : '#555';
                }
                return (
                    <FontAwesome5
                    name={iconName}
                    size={size}
                    color={color}
                    solid
                    />
                )
                },
                drawerActiveBackgroundColor:'#23cf0022',
                overlayColor:'#ff000010',
                swipeEnabled: true,
                gestureEnabled:true,
                headerShown:true,
                headerTitleAlign:'center',
                headerStyle:{
                    backgroundColor: '#0090ff',
                },
                drawerStyle: {
                    width: 250,
                  },
                drawerType:"front",
    
            })}
            >
            <Drawer.Screen
                name="Screen_A"
                component={ScreenA}
                options={{
                title: 'Home',
                tabBarBadge:3,
                }}
            />
            <Drawer.Screen
                name="Screen_B"
                component={ScreenB}
                options={{
                title: 'About',
                }}
            />
            
            </Drawer.Navigator>
        </>
    )
}

export default DrawerNavigation

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