import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Color from '../../assets/contain/Color'

const styles = StyleSheet.create({
    containerHeader:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
        alignItems:'center',
        paddingTop:20,

    },
    iconRight:{
        alignItems:'center',
        flexDirection:'row',
        
    },
    iconSetting:{
        marginLeft:15,
    },
    author:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',

    },
    containerAuthor:{
        flexDirection:'row',
    },
    textNameAuthor:{
        fontWeight:'600',
        fontSize:16,
        lineHeight:24,
        letterSpacing:0.12,
        color:Color.colorAuthor,
    },
 
    btnFollow:{
        paddingHorizontal:12,
        paddingVertical:5,
        backgroundColor:Color.primary,
        borderRadius:6,
    },
    textFollow:{
        fontWeight:'600',
        fontSize:16,
        lineHeight:24,
        letterSpacing:0.12,
        color:Color.backgroundInput,
    },
    textTime:{
        fontWeight:'400',
        fontSize:14,
        lineHeight:18,
        letterSpacing:0.12,
        color:Color.colorBorderInput,
    },
    posts:{
        marginTop:10,
    },
    container:{
        backgroundColor:Color.backgroundInput,
        flex:1,
        position:'relative',
    },
    containerBody:{
        paddingHorizontal:20,
        marginBottom: 75,

     },
    imagePost:{
        width:'100%',
        borderRadius:6,

    },
    textPosition:{
        marginTop:10,
        fontWeight:'400',
        fontSize:14,
        fontStyle:'normal',
        lineHeight:21,
        letterSpacing:0.12,
        color:Color.colorBorderInput,
    },
    heading:{
        marginTop:10,
        fontSize:20,
        fontWeight:'400',
        lineHeight:25,
        letterSpacing:0.12,
        fontStyle:'normal',
        color:Color.colorAuthor,
    },
    content:{
        fontStyle:'normal',
        fontWeight:'400',
        fontSize:14,
        lineHeight:20,
        letterSpacing:0.12,
        color:Color.colorBorderInput,
    },
    containerBottom:{
        position:'absolute',
        bottom:0,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.13,
        shadowRadius: 2.62,

        elevation: 1,
        width:360,
        height:75,
        paddingHorizontal:34,
    
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    interactive:{
        flexDirection:'row',
        alignItems:'center',
    },
    love:{
        marginRight:20,
        flexDirection:'row',
        alignItems:'center',
        
    },
    comment:{
        flexDirection:'row',
        alignItems:'center',

    },
    textIcon:{
        marginLeft:5,
        fontSize:14,
        fontWeight:'400',
        lineHeight:24,
        color:Color.textHeader,
        letterSpacing:0.12,
    },
    imgLogo:{
        width:50,
        height:50,
    }
    ,
    

})

export default styles

