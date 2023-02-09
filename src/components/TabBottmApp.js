import { View,Text,Image} from 'react-native'
import React from 'react'
import {DetailScreen,Home} from '../app/news/screens';
import image from '../assets/contain/image';



//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const TabBottomApp = () => {
  const configTab=(route) =>{
    return {
    tabBarIcon: ({ focused, color, size }) => {
    
      if (route.name === 'Home') {
        if(focused){
            return <Image source={image.iconHomeActive} style={{width:24,height:24}}/>
        }else{
           return <Image source={image.iconHome} style={{width:24,height:24}}/>
        }
      
      } else if (route.name === 'Explore') {
        if(focused){
          return <Image source={image.iconCompassActive} style={{width:24,height:24}}/>
        }else{
          return <Image source={image.iconCompass} style={{width:24,height:24}}/>
        }
      }else if (route.name === 'BookMark') {
        if(focused){
          return <Image source={image.iconBookMarkActive} style={{width:24,height:24}}/>
        }else{
          return <Image source={image.iconBookMark} style={{width:24,height:24}}/>
        }
      }else{
        if(focused){
          return <Image source={image.ProfileActive} style={{width:24,height:24}}/>
        }else{
          return <Image source={image.iconProfile} style={{width:24,height:24}}/>
        }
      }


    },
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
  }}
  
  return (
    <NavigationContainer>
        <Tab.Navigator

        screenOptions={({route}) =>configTab(route)}>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Explore" component={DetailScreen}/>
            <Tab.Screen name="BookMark" component={DetailScreen}/>
            <Tab.Screen name="Profile" component={DetailScreen}/>
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabBottomApp
