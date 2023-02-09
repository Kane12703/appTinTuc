
import React, { createContext } from 'react'
export const NewsContext=createContext;
export const NewsProvider = (props) => {
    const {children}=props;
    return(
        <NewsContext.Provider
            value={{}}>
            {children}
        </NewsContext.Provider>
    )
}
