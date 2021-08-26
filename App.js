import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/Home';
import DailyPicScreen from './screens/DailyPicScreen';
import SpaceCraftScreen from './screens/SpaceCraftScreen';
import StarMapScreen from './screens/StarMap';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack=createStackNavigator();

export default class App extends Component{
  render(){
  return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{
          headerShown:false
        }}>
<Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
<Stack.Screen name='DailyPictures' component={DailyPicScreen} ></Stack.Screen>
<Stack.Screen name='SpaceCraft' component={SpaceCraftScreen} ></Stack.Screen>
<Stack.Screen name='StarMap' component={StarMapScreen} ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}


