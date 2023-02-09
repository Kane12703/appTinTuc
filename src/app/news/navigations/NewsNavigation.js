
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home,DetailScreen } from '../screens';
const NewsNavigation = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="DetailScreen" component={DetailScreen}/>
    </Tab.Navigator>
  )
}

export default NewsNavigation
