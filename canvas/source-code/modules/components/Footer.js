import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation} from '@react-navigation/native';
import Colors from '../constants/Colors';

const Footer = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.outerBox}>
      <View style={styles.innerBox}>
        <Ionicons name="tennisball-outline" size={28} color={Colors.footerText} 
        style={styles.rotatedIcon} onPress={()=>{}} />
        <Text style={styles.text}>Register</Text>
      </View>
      <View style={styles.innerBox}>
        <Ionicons name="calendar-outline" size={28} color={Colors.footerText} 
        onPress={()=>{navigation.navigate('Game');}} />
        <Text style={styles.text}>Game board</Text>
      </View>
      <View style={styles.innerBox}>
        <Ionicons name="bar-chart-outline" size={28} color={Colors.footerText} 
        onPress={()=>{}} />
        <Text style={styles.text}>Rank</Text>
      </View>
      <View style={styles.innerBox}>
        <Ionicons name="newspaper-outline" size={28} color={Colors.footerText} 
        onPress={()=>{navigation.navigate('News')}}/>
        <Text style={styles.text}>News</Text>
      </View>
    </View>
  )
}
const styles=StyleSheet.create({
  outerBox:{
    flexDirection:'row',
    height:78,
    border:2,
    borderColor: Colors.footerBorder, 
    backgroundColor: Colors.footerBackground,
    alignItems:'center',
    justifyContent:'space-evenly'
  },
  innerBox:{
    flexDirection:'column',
    padding:10,
    alignItems:'center',
  },
  text:{
    color:Colors.footerText,
    fontFamily:'Rubik',
    fontSize:12,
  },
  rotatedIcon: {
    transform: [{ rotate: '45deg' }], 
  },
  })

export default Footer;