import { StyleSheet, Text,Image, View, FlatList, TextInput } from 'react-native'
import React from 'react'
import styles from '../../theme/HomeScreenCss/styles'
import image from '../../assets/contain/image'
import icon from '../../assets/contain/icon'


const Home = () => {
  
  const renderItem=({item}) => {
    const {title,image}=item
    return (
      <View style={styles.post}>
        <Image source={{uri:image}} style={styles.imgPost}/>
        <View style={styles.content}>
          <Text style={styles.catagory}>Europe</Text>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.infomationPost}>
            <View style={styles.author}>
              <Image style={styles.logoAuthor} source={require('../../assets/Image/imageHome/logoAuthor.png')}/>
              <Text style={styles.textAuthor}>BBC News</Text>
            </View>
            <View style={styles.timePost}>
              <Image style={styles.iconTime} source={require('../../assets/Image/imageHome/iconTime.png')}/>
              <Text style={styles.textTime}>14m ago</Text>
            </View>
          </View>
        </View>
      </View>
    )

  }
  const renderItemTab=({item}) => {
    const {nameTab}=item
    return(
      <Text style={styles.textTab}>{nameTab}</Text>
    )
    
  }
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image source={image.logoApp} style={styles.logoHeader}/>
            <Image source={image.iconRing} style={styles.ring}/>
        </View>
        <View style={styles.inputSearch}>
          <TextInput style={styles.input} placeholder={'Search'}/>
          <Image source={image.iconSearch} style={styles.inputIconSearch}/>
          <Image source={image.iconFilter} style={styles.inputIconFilter}/>
        </View>
        <View style={styles.latest}>
            <Text style={styles.textLatest}>Latest</Text>
            <Text style={styles.textSeeAll}>See all</Text>
        </View>
        <View>
          <View style={styles.containerTabList}>
            <FlatList
            data={dataTab}
            renderItem={renderItemTab}
            keyExtractor={Math.random}
            showsHorizontalScrollIndicator={false} 
            horizontal
          />   
          </View>
        <View style={styles.listData}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={Math.random}
            showsVerticalScrollIndicator={false} 
            />  
          </View>
        </View>
        <View style={styles.bottomNavigation}>
          <View style={styles.item}>
              <Image style={styles.itemImage} source={image.iconHome}/>
              <Text style={styles.texItem}>Home</Text>
          </View>
          <View style={styles.item}>
              <Image style={styles.itemImage} source={image.iconBookMark}/>
              <Text style={styles.texItem}>Explore</Text>
          </View>
          <View style={styles.item}>
              <Image style={styles.itemImage} source={image.iconCompass}/>
              <Text style={styles.texItem}>BookMark</Text>
          </View>
          <View style={styles.item}>
              <Image style={styles.itemImage} source={image.iconProfile}/>
              <Text style={styles.texItem}>Profile</Text>
          </View>
           
        </View>
        

        
     
    </View>
  )
}

export default Home
var dataTab=[
  {
    "nameTab":"All"
  },
  {
    "nameTab":"Sports"
  },
  {
    "nameTab":"Politics"
  },
  {
    "nameTab":"Bussiness"
  },
  {
    "nameTab":"Health"
  },
  {
    "nameTab":"Travel"
  },
  {
    "nameTab":"Science"
  },
  {
    "nameTab":"Fashion"
  },
  
  
]
var data=[
  {
    "_id": "63bfa809c4f47f0016aee205",
    "title": "Ukraine's President Zelensky to BBC: Blood money being paid...",
    "content": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    "image": "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
    "createdAt": "2023-01-12T06:26:17.539Z",
    "createdBy": {
        "_id": "63ac39aeedf7c80016c57a67",
        "name": "",
        "avatar": ""
    }
  },
  {
    "_id": "63bfa809c4f47f0016aee206",
    "title": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    "content": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    "image": "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
    "createdAt": "2023-01-12T06:26:17.539Z",
    "createdBy": {
        "_id": "63ac39aeedf7c80016c57a67",
        "name": "",
        "avatar": ""
    }
  },
  {
    "_id": "63bfa809c4f47f0016aee207",
    "title": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    "content": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    "image": "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
    "createdAt": "2023-01-12T06:26:17.539Z",
    "createdBy": {
        "_id": "63ac39aeedf7c80016c57a67",
        "name": "",
        "avatar": ""
    }
  },
  {
    "_id": "63bfa809c4f47f0016aee208",
    "title": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    "content": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    "image": "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
    "createdAt": "2023-01-12T06:26:17.539Z",
    "createdBy": {
        "_id": "63ac39aeedf7c80016c57a67",
        "name": "",
        "avatar": ""
    }
  },
  {
    "_id": "63bfa809c4f47f0016aee209",
    "title": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    "content": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    "image": "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
    "createdAt": "2023-01-12T06:26:17.539Z",
    "createdBy": {
        "_id": "63ac39aeedf7c80016c57a67",
        "name": "",
        "avatar": ""
    }
  },
  {
    "_id": "63bfa809c4f47f0016aee2010",
    "title": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    "content": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    "image": "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
    "createdAt": "2023-01-12T06:26:17.539Z",
    "createdBy": {
        "_id": "63ac39aeedf7c80016c57a67",
        "name": "",
        "avatar": ""
    }
  },
  {
    "_id": "63bfa809c4f47f0016aee2010",
    "title": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    "content": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    "image": "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
    "createdAt": "2023-01-12T06:26:17.539Z",
    "createdBy": {
        "_id": "63ac39aeedf7c80016c57a67",
        "name": "",
        "avatar": ""
    }
  },
  {
    "_id": "63bfa809c4f47f0016aee2010",
    "title": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    "content": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    "image": "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
    "createdAt": "2023-01-12T06:26:17.539Z",
    "createdBy": {
        "_id": "63ac39aeedf7c80016c57a67",
        "name": "",
        "avatar": ""
    }
  },
  {
    "_id": "63bfa809c4f47f0016aee2010",
    "title": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    "content": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    "image": "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
    "createdAt": "2023-01-12T06:26:17.539Z",
    "createdBy": {
        "_id": "63ac39aeedf7c80016c57a67",
        "name": "",
        "avatar": ""
    }
  },
  {
    "_id": "63bfa809c4f47f0016aee2010",
    "title": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    "content": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    "image": "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
    "createdAt": "2023-01-12T06:26:17.539Z",
    "createdBy": {
        "_id": "63ac39aeedf7c80016c57a67",
        "name": "",
        "avatar": ""
    }
  },
  {
    "_id": "63bfa809c4f47f0016aee2010",
    "title": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    "content": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    "image": "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
    "createdAt": "2023-01-12T06:26:17.539Z",
    "createdBy": {
        "_id": "63ac39aeedf7c80016c57a67",
        "name": "",
        "avatar": ""
    }
  },
  {
    "_id": "63bfa809c4f47f0016aee2010",
    "title": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    "content": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    "image": "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
    "createdAt": "2023-01-12T06:26:17.539Z",
    "createdBy": {
        "_id": "63ac39aeedf7c80016c57a67",
        "name": "",
        "avatar": ""
    }
  },
]

