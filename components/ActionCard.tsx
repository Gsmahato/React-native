import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink:string) {
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card,styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            Let's learn react-native.
          </Text>
        </View>
        <Image source={{uri:'https://th.bing.com/th/id/R.5f50d860e5f82462d3655d238dec4d18?rik=AUIfoBxInwYlsw&pid=ImgRaw&r=0'}}
        style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3} style={styles.bodyContainerText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit commodi ab dolorum sequi accusantium? Accusamus qui unde et? Sequi ipsam sapiente debitis expedita aliquam asperiores necessitatibus iure laborum optio perspiciatis.</Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={()=>openWebsite('https://www.gurusharan.com.np/')}>
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>openWebsite('https://www.instagram.com/gs.mahato/')}>
            <Text style={styles.socialLinks}>Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
      fontSize:24,
      fontWeight:'bold',
      color:'#000',
      paddingHorizontal:8,
    },
    card:{
      height:350,
      width:380,
      borderRadius:6,
      marginVertical:12,
      marginHorizontal:16,
    },
    elevatedCard:{
      backgroundColor:'#f08bd7',
      elevation:3,
      shadowOffset:{
        width:1,
        height:1,
      },
      shadowColor:'#333',
      shadowOpacity:0.4

    },
    headingContainer:{
      height:40,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
    },
    bodyContainerText:{
      color:'#fff'
    },
    headerText:{
      color:'#000',
      fontSize:16,
      fontWeight:'600',

    },
    cardImage:{
      height:150,
    },
    bodyContainer:{
      padding:10,
    },
    footerContainer:{
      padding:8,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-evenly',
    },
    socialLinks:{
      fontSize:16,
      color:"#000",
      backgroundColor:"#fff",
      paddingHorizontal:20,
      paddingVertical:6,
      borderRadius:6,
    },
})