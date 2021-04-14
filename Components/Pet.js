import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { EvilIcons } from '@expo/vector-icons'; 


const Pet = ({name, type, age, location}) => {
    return (
        <View style={styles.container}>
        <Image source={require('../assets/lad.jpg')} style={styles.image} />
        <View style={styles.detailContainer}>
          <Text style={styles.textTitle} >{name}</Text>
          <Text style={styles.text}>{type}</Text>
          <Text  style={styles.text}>{age}</Text>
          <View  style={styles.icon}>
          <EvilIcons name="location" size={24} color="black"/>
          <Text style={styles.text}>{location}</Text>
          </View>
          

         </View>  
        </View>
    );
}
const styles = StyleSheet.create({
 container:{
     marginHorizontal: 30,
     flexDirection:'row',
    
 },
 detailContainer:{
     justifyContent:'center',
     marginLeft:1,
     flex:5,
     marginBottom:60,
     backgroundColor:'#e9f4f5'
     
 },
 image:{
    width:130,
    height:150,
    borderRadius:10
 },
 textTitle:{
     color:'blue',
     fontSize:22,
     fontWeight:'bold'
 },
 text:{
     fontSize:15,
     marginBottom:10
 },
 icon:{
     flexDirection:'row',
    
 }
})



export default Pet;
