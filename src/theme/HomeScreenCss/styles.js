import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Color from '../../assets/contain/Color'


const styles = StyleSheet.create({
   
    header:{
        padding:15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    logoHeader:{
        height:30,
        width:99,
    },
    ring:{
        height:21.5,
        width:18,
    },
    latest:{
        padding:15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    textLatest:{
        fontSize:16,
        lineHeight:24,
        letterSpacing:0.12,
        fontWeight:'600',
        color:Color.colorAuthor,
    },
    textSeeAll:{
        fontSize:14,
        lineHeight:21,
        fontWeight:'400',
        fontStyle:'normal',
        letterSpacing:0.12,
        color:Color.colorBorderInput,
    },
    post:{
        flexDirection:'row',
        paddingLeft:15,
        paddingBottom:15,
     
    },
    imgPost:{
        borderRadius:6,
        width:96,
        height:96,
        marginRight:3,
    },
    catagory:{
        fontWeight:'400',
        fontSize:13,
        lineHeight:19.5,
        letterSpacing:0.12,
        color:Color.colorBorderInput,
    },
    title:{
        width:256,
        fontWeight:'400',
        fontSize:16,
        lineHeight:24,
        letterSpacing:0.12,
        color:Color.colorAuthor,
    },
    author:{
        flexDirection:'row', 
        alignItems:'center',
        marginRight:10,
    },
    timePost:{
        flexDirection:'row',
        alignItems:'center', 
    },
    infomationPost:{
        flexDirection:'row',
        alignContent:'center',
        
    },
    logoAuthor:{
        height:20,
        width:20,
        marginRight:3,
    },
    iconTime:{
        height:11.67,
        width:11.67,
        marginRight:3,
    },
    textAuthor:{
        fontWeight:'600',
        fontSize:13,
        lineHeight:19.5,
        letterSpacing:0.12,
        color:Color.colorBorderInput,
    },
    textTime:{
        fontWeight:'400',
        lineHeight:19.5,
        fontSize:13,
        letterSpacing:0.12,
        
    },
    textTab:{
        fontWeight:'400',
        fontSize:16,
        lineHeight:24,
        letterSpacing:0.12,
        color:Color.colorBorderInput,
        marginRight:10,
    },
    containerTabList:{
        paddingLeft:15,
        marginBottom:15,
    },

    itemImage :{
        width:18,
        height:18.73,
    },
    texItem:{
        fontWeight:'400',
        fontSize:14,
        lineHeight:21,
        fontStyle:'normal',
        color:Color.colorBorderInput,
    },
    item:{
        alignItems:'center',
    },
     container:{
        position:'relative',
        flex:1,
    },
    bottomNavigation:{
        alignItems:'center',
        bottom:0,
        flexDirection:'row',
        justifyContent:'space-around',
        position:'absolute',
        width:'100%',
        height:75,
        borderTopWidth:0.4,
        borderTopColor:'#DCDCDC',
        backgroundColor:Color.backgroundInput,
    
    },
   
    listData:{
        height:400,
    },
    input:{
        paddingVertical:10,
        paddingHorizontal:50,
        backgroundColor:Color.backgroundInput,
        borderWidth:1,
        borderColorl:Color.colorBorderInput,
        borderStyle:'solid',
        borderRadius:6,

    },
    inputSearch:{
        padding:15,
        position:'relative',
    },
    inputIconSearch:{
        height:20,
        width:20,
        position:'absolute',
        left:30,
        top:30,
    },
    inputIconFilter:{
        height:20,
        width:20,
        position:'absolute',
        right:30,
        top:30,
    },
  
 




})



export default styles

