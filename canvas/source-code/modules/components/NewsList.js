import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
import Colors from '../constants/Colors';

const NewsList = ({ text, type }) => {
  const postedPhoto = require('../../assets/images/post.jpeg');
  const isSystemMessage = type === "System message";
  return (
    <View style={[styles.container,isSystemMessage && styles.systemContainer]}>
      <View style={[styles.left,isSystemMessage && styles.systemLeft]}>
        <Text style={styles.headText}>{type}</Text>
        <Text style={styles.mainText}>{text}</Text>
        <View style={styles.iconHolder}>
          <EvilIcons name="clock" size={20} color={Colors.textAncient} />
          <Text style={styles.subText}> an hour ago   </Text>
          {type === "News" && (
            <>
              <FontAwesome6 name="comment" size={14} color={Colors.textAncient} />
              <Text style={styles.subText}> 26 comments</Text>
            </>
          )}
        </View>
      </View>
      <View style={[styles.right, type === "System message" && styles.rightSystem]}>
        {type === "News" && (
          <Image source={postedPhoto} style={styles.picture} resizeMode="cover" />
        )}
        {type === "System message" && (
          <AntDesign name="sharealt" size={22} color={Colors.textAncient} style={styles.shareIcon}/>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 91,
    width: 337,
  },
  systemContainer: {
    borderColor: Colors.footerBorder,
    borderWidth: 1.2,
    borderRadius: 12,
    backgroundColor:Colors.footerText,
  },
  left: {
    flexDirection: 'column',
    flex: 1,
  },
  headText: {
    fontFamily: 'Rubik',
    fontSize: 16,
    color: Colors.textAncient,
  },
  mainText: {
    fontFamily: 'Rubik',
    fontSize: 12,
    color: 'black',
  },
  subText: {
    color: Colors.subTextColor,
    fontFamily: 'Rubik',
    fontSize: 12,
  },
  iconHolder: {
    flexDirection: 'row',
  },
  right: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: 103,
    height: 91,
  },
  rightSystem: {
    width: 40,
  },
  picture: {
    height: 84,
    width: 103,
    borderRadius: 12,
  },
  shareIcon: {
    marginBottom: 60,
    marginRight:15,
  },
  systemLeft: {
    marginLeft: 20,
  },
});

export default NewsList;
