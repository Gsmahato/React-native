import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card , styles.cardElevated]}>
        <Image
        source={{uri:'https://www.goldennepalholidays.com/wp-content/uploads/2019/08/bodhnath-stupa-scaled.jpg'}}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Boudhnath Stupa</Text>
        <Text style={styles.cardLabel}>Kathmandu,Nepal</Text>
        <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus reprehenderit nulla, ad aspernatur at neque inventore facere pariatur, ratione est totam quisquam ab quibusdam enim! Autem saepe tenetur recusandae illo.</Text>
        <Text style={styles.cardFooter}>15 mins away</Text>

      </View>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        color:'#000',
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
      },
      card:{
        width:380,
        height:360,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16,
      },
      cardElevated:{
        backgroundColor:'#fff',
        elevation:3,
        shadowOffset:{
          width:1,
          height:1,
        }
      },
      cardImage:{
        height:200,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6,
      },
      cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12,
      },
      cardTitle:{
        color:'#000',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:6,
      },
      cardLabel:{
        color:'#000',
        fontSize:14,
        marginBottom:6,
      },
      cardDescription:{
        fontSize:12,
        marginBottom:12,

      },
      cardFooter:{
        color:'#000',
      },

})