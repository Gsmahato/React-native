import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card,styles.cardElevated]}>
          <Text>1</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
          <Text>2</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
          <Text>3</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
          <Text>4</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
          <Text>5</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
          <Text>🙂</Text>
        </View>
      </ScrollView>
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
  container:{
    padding:8,
  },
  card:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    width:116,
    height:100,
    borderRadius:4,
    margin:8,

  },
  cardElevated:{
    backgroundColor:"#bebaba"
  },
})