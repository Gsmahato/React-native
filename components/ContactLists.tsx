import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactLists() {
    const contacts =[
        {
            uid:1,
            name:'GS Mahato',
            status:'I love coding',
            imageUrl:'https://avatars.githubusercontent.com/u/54164651?v=4',
        },
        {
            uid:2,
            name:'GS Mahato',
            status:'I love coding',
            imageUrl:'https://avatars.githubusercontent.com/u/54164651?v=4',
        },
        {
            uid:3,
            name:'GS Mahato',
            status:'I love coding',
            imageUrl:'https://avatars.githubusercontent.com/u/54164651?v=4',
        },
        {
            uid:4,
            name:'GS Mahato',
            status:'I love coding',
            imageUrl:'https://avatars.githubusercontent.com/u/54164651?v=4',
        },
    ];
  return (
    <View>
      <Text style={styles.headingText}>Contact Lists</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid,name,status,imageUrl})=>(
            <View key={uid} style={styles.userCard}>
                <Image
                source={{
                    uri:imageUrl
                }}
                style={styles.userImage}
                />
                <View>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
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
    container:{
        paddingHorizontal:16,
        marginBottom:4
    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:3,
        backgroundColor:'#00cbfe',
        padding:8,
        borderRadius:14

    },
    userImage:{
        width:60,
        height:60,
        borderRadius:60/2,
        marginRight:14
    },
    userName:{
        fontSize:16,
        fontWeight:'600',
        color:'#000',
    },
    userStatus:{
        fontSize:12,

    }


})