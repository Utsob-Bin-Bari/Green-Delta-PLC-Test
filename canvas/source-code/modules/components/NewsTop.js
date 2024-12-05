import React from 'react';
import { View, ImageBackground, Text, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import DummyNewsData from '../constants/DummyNewsData';

const NewsTop = () => {
  const newsTopPhoto = require('../../assets/images/newsTop.jpeg');
  const {text,timeStamp}= DummyNewsData.home;
  return (
    <View style={styles.container}>
      <ImageBackground source={newsTopPhoto} style={styles.imageBackground} imageStyle={styles.imageStyle}>
        <View style={styles.textContainer}>
          <Text style={styles.inlineText}>
            {text} {' . '}{timeStamp }{' '}
            <EvilIcons name="clock" size={12} color="white" style={styles.iconStyle} />
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItem: 'center',
    height: 179,
    width: 351,
    marginTop: 23,
    borderRadius: 12,
    overflow: 'hidden',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    borderRadius: 12,
  },
  textContainer: {
    alignItems: 'flex-start',
    width: 331,
    marginBottom: -125,
    marginLeft: 20,
  },
  inlineText: {
    color: 'white',
    fontFamily: 'Rubik',
    fontSize: 12,
    lineHeight: 13,
  },
});

export default NewsTop;

