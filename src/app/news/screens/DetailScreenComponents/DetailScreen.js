import { Image, StyleSheet,ScrollView, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../../../../theme/DetailScreenCss/style'
import icon from '../../../../assets/contain/icon'
import image from '../../../../assets/contain/image'

const DetailScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
          <Image source={icon.back}/>
          <View style={styles.iconRight}>
              <Image source={icon.share} />
              <Image style={styles.iconSetting} source={icon.setting}/>
          </View>
      </View>
      <ScrollView style={styles.containerBody}>
        <View style={styles.containerContent}>
            <View style={styles.author}>
              <View  style={styles.containerAuthor}>
                <Image style={styles.imgLogo} source={icon.logoAuthor} />
                <View>
                  <Text style={styles.textNameAuthor}>BBC News</Text>
                  <Text style={styles.textTime}>14m ago</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.btnFollow}>
                <Text style={styles.textFollow}>Follwing</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.posts}>
              <Image style={styles.imagePost} source={image.imgPost}/>
              <Text style={styles.textPosition}>Europe</Text>
              <Text style={styles.heading}>
                Ukraine's President Zelensky to BBC: Blood money being paid for Russian oil
              </Text>
              <Text style={styles.content}>
                Ukrainian President Volodymyr Zelensky has accused European countries that continue to buy Russian oil of "earning their money in other people's blood".
                In an interview with the BBC, President Zelensky singled out Germany and Hungary, accusing them of blocking efforts to embargo energy sales, from which Russia stands to make up to £250bn ($326bn) this year.There has been a growing frustration among Ukraine's leadership with Berlin, which has backed some sanctions against Russia but so far resisted calls to back tougher action on oil sales.
                Ukrainian President Volodymyr Zelensky has accused European countries that continue to buy Russian oil of "earning their money in other people's blood".
                In an interview with the BBC, President Zelensky singled out Germany and Hungary, accusing them of blocking efforts to embargo energy sales, from which Russia stands to make up to £250bn ($326bn) this year.There has been a growing frustration among Ukraine's leadership with Berlin, which has backed some sanctions against Russia but so far resisted calls to back tougher action on oil sales.
              </Text>
             
            </View>
        </View>
      </ScrollView>
      <View style={styles.containerBottom}>
        <View style={styles.interactive}>
          <View style={styles.love}>
              <Image source={icon.iconHear}/>
              <Text style={styles.textIcon}>24.5K</Text>
            </View>
            <View style={styles.comment}>
              <Image source={icon.iconComment}/>
              <Text style={styles.textIcon}>1K</Text>
            </View>
        </View>
        <Image source={icon.iconFavorite}/> 
      </View>
    </View>
  )
}

export default DetailScreen

