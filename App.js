import { View,Text} from 'react-native'
import React from 'react'
// import {Login,DetailScreen,Home} from './src/app/user/screens'
//navigation
import { UserProvider } from './src/app/user/utilities/userContext';
import AppNavigation from './src/app/appNavigations/AppNavigation';
import { NewsProvider } from './src/app/news/utilities/NewsContext';





const App = () => {
  return (
    <UserProvider>
      <NewsProvider>
        <AppNavigation/>
      </NewsProvider>
    </UserProvider>
  )

}

export default App