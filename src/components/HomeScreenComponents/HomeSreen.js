import { StyleSheet, Text,Dimensions,FlatList,Image,SafeAreaView,TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from '../../theme/HomeScreenCss/style'
import icon from '../../assets/contain/icon'
  
const listTab=[
  {
    status:'All',
  },
  {
    status:'Purple'
  },
  {
    status:'Green'
  },

]

const data=[
  {
    name:'Thao',
    status:'Green'
  },
  {
    name:'Messi',
    status:'Green'
  },
  {
    name:'Ronaldo',
    status:'Purple'
  },
  {
    name:'KaKa',
    status:'Green'
  },
  {
    name:'Lukaku',
    status:'Purple'
  }

]

const HomeSreen = () => {
  let numColumns=5;
  
  const [status, setStatus] = useState('All')
  const [dataList, setDataList] = useState(data)
  const setStatusFilter =status =>{
    if(status !=='All'){
      setDataList([...data.filter(e=>e.status===status)])
    }else{
      setDataList(status)
    }
    setStatus(status)
  }

  const renderItem= ({item,index})=>{
    return(
      <View key={index} style={styles.itemContainer}>
        <View style={styles.itemLogo}>
          <Image style={styles.itemImage} source={icon.logoAuthor}/>

        </View>
        <View style={styles.itemBody}>
          <Text style={styles.itemName}>{item.name}</Text>

        </View>
        <View style={[styles.itemStatus,
        {backgroundColor:item.status==='Purple'?'#e5848e':'#69c080'}]}>
          <Text>{item.status}</Text>

        </View>

      </View>
    )

  }
  const separator=()=>{
    return <View style={{height:1,backgroundColor:'#f1f1f1'}}></View>
  }


  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listTab}>
        {
          listTab.map(e =>(
            <TouchableOpacity 
            style={[styles.btnTab,status===e.status&&styles.btnTabActive]}
            onPress={()=> setStatusFilter(e.status)}
            >
            <Text style={[styles.textTab,status===e.status&&styles.textActive]}>{e.status}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
      <FlatList
        data={data}
        keyExtractor={(e,i)=>i.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={separator}
      />


    </SafeAreaView>
  )
}

export default HomeSreen

