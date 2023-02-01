import { Dimensions, StyleSheet,Text, View } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:10,
        justifyContent:'center',
    },
    listTab:{
        flexDirection:'row',
        backgroundColor:'#fff',
        alignSelf:'center',
        marginBottom:20,
    },
    btnTab:{
        width:Dimensions.get('window').width/3.5,
        flexDirection:'row',
        borderWidth:0.5,
        borderColor:'#EBEBEB',
        padding:10,
        justifyContent:'center',
    },
    textTab:{
        fontSize:16,
    },
    btnTabActive:{
        backgroundColor:'#E6838D'
    },
    textActive:{
        color:'#fff',
    },
    itemContainer:{
        flexDirection:'row',
        paddingVertical:15,
    },
    itemImage:{
        width:50,
        height:50,
    },
    itemBody:{
        flex:1,
        paddingHorizontal:10,
        justifyContent:'center',
    },
    itemName:{
        fontWeight:'400',
        fontSize:16,
    },
    itemStatus:{
        backgroundColor:'green',
        padding:6,
        justifyContent:'center',
        right:12,
    },
 
  

})

export default styles


