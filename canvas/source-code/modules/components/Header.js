import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { useRoute } from '@react-navigation/native';
import Colors from '../constants/Colors';

const Header = ({name,title,description,profileImageLink}) => {
    const route = useRoute();
    if(route.name === 'Chat'){
        return null;
      } 
  return (
    <View style={styles.outerBox}>
        <Image style={styles.profileImage}
          source={profileImageLink}/>
        <View style={styles.textContainer}>
            <Text style={styles.nameText}>{name} ({title})</Text>
            <Text style={styles.descriptionText}>{description}</Text>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    outerBox:{
        flexDirection:"row",
        felx:1,
        borderWidth:1,
        borderBottomColor: Colors.footerBorder,
        backgroundColor:Colors.footerBackground,
        height:85,
        marginTop:-1,
    },
    profileImage: {
        width: 40.71,
        height: 40.71,
        borderRadius: 22.5,
        borderWidth: 0.8,
        borderColor: Colors.borderColor,
        marginTop: 30,
        marginLeft: 15,
        resizeMode: 'cover',
      },
    textContainer:{
        flexDirection:'column',
        marginTop:37,
        marginLeft:15,
    },
    nameText: {
        color: Colors.footerText,
        fontFamily: 'Rubik',
        fontSize: 14,
      },
    descriptionText: {
        color: Colors.subTextColor,
        fontFamily: 'Poppins',
        fontSize: 11,
      }
})
export default Header;



