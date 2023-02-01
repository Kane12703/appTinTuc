import { View,Text} from 'react-native'
import React from 'react'
import {Login,DetailScreen,HomeSreen,Home} from './src/components'
import Register from './src/components/RegisterComponents/Register'
//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
   </NavigationContainer>
    // <DetailScreen/>
    // <HomeSreen/>
    // <Home/>
    // <Register/>
  )
}

export default App