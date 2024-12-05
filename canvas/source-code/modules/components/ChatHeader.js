import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Colors from '../constants/Colors';
import Entypo from '@expo/vector-icons/Entypo';

const dateLocation="Monday, February 23 | 14:00 - Tel Aviv";
const ChatHeader = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.outerBox}>

        <Text style={styles.dateText}>{dateLocation}{' '}
        <Entypo name="chevron-thin-right" size={16} color="black" onPress={()=>{navigation.navigate('Game')}}/></Text>
    </View>
  )
}
const styles = StyleSheet.create({
    outerBox:{
        felx:1,
        borderWidth:1,
        borderBottomColor: Colors.footerBorder,
        backgroundColor:Colors.footerText,
        borderColor:Colors.footerText,
        height:85,
        marginTop:-1,
        alignItems:'center',
    },
    dateText: {
        color: Colors.textAncient,
        fontFamily: 'Rubik',
        fontSize: 16,
        lineHeight:18,
        marginTop:60,
    },
})
export default ChatHeader;