/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, Text, View,KeyboardAvoidingView, Platform} from 'react-native';
import 'react-native-gesture-handler';
import HomeScreen from './screens/HomeScreen'
import { store } from './store'
import { Provider } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './screens/MapScreen';

const Stack = createStackNavigator();
const App= () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding":"height"}
          style={{flex:1}}
          keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
          >
          <SafeAreaProvider>
          <Stack.Navigator
              screenOptions={{
                  header: ()=>null
              }}
          >
                  <Stack.Screen 
                      name="HomeScreen"
                      component={HomeScreen}
                  />
                  <Stack.Screen 
                      name="MapScreen"
                      component={MapScreen}
                  />
                  <Stack.Screen 
                      name="EatsScreen"
                      component={MapScreen}
                  />
              </Stack.Navigator>
            
              {/* <HomeScreen /> */}
            
          {/* <Navigation /> 
        {/* <TabNavigation />  */}
        {/* <DrawerNavigation /> */}
          </SafeAreaProvider>
        </KeyboardAvoidingView>
      </NavigationContainer>
    </Provider>
    )
};


export default App;
