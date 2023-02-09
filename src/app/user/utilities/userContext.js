import { StyleSheet, Text, View } from 'react-native'
import React, { createContext,useState } from 'react'
import AxiosInstance from '../../axiosClient/axiosInstanse';

export const UserContext=createContext();

export const UserProvider=(props)=>{
    const {children}=props;
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const login = async() => {
        try {
            
        } catch (error) {
            
        }
    }
    const register = async(email,password) => {
        try {
            const response=await AxiosInstance.post('/users/register',{
                email:email,
                password:password
            });
            return true;
            console.log('register response: ',response);
            
        } catch (error) {
            console.log('register errol: ',error);
        }
        return false;
    }

    return(
        <UserContext.Provider value={{isLoggedIn,setIsLoggedIn,login,register}}>
            {children}
        </UserContext.Provider>
    )
}
