import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Colors from '../constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';

const TextContainer = ({ id, name, picture, text, time }) => {
  // Dynamic styles based on the `id`
  const textStyle = {
    color: id === 1 ? Colors.footerText : Colors.gradientStart,
  };

  return (
    <View style={[styles.container, id === 1 && styles.alignRight]}>
      {id === 1 ? (
        <>
          <LinearGradient
            colors={[Colors.gradientStart, Colors.gradientEnd]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradientContainer}
          >
            <Text style={[styles.nameText, textStyle]}>{name}</Text>
            <Text style={[styles.normalText, textStyle]}>{text}</Text>
            <View style={styles.timeContainer}>
              <Text style={[styles.time, textStyle]}>{time}</Text>
            </View>
          </LinearGradient>
          <View style={styles.imageContainer}>
            <Image style={styles.profileImage} source={picture} />
          </View>
        </>
      ) : (
        <>
          <View style={styles.imageContainer}>
            <Image style={styles.profileImage} source={picture} />
          </View>
          <View style={styles.leftContainer}>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.normalText}>{text}</Text>
            <View style={styles.timeContainer}>
              <Text style={styles.time}>{time}</Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 10,
  },
  alignRight: {
    alignSelf: 'flex-end',
  },
  leftContainer: {
    maxWidth: 260,
    borderWidth: 1,
    borderColor: Colors.footerBorder,
    backgroundColor: Colors.footerText,
    marginLeft: 10,
    padding: 10,
    borderRadius: 10,
  },
  gradientContainer: {
    maxWidth: 260,
    marginRight: 10,
    padding: 10,
    borderRadius: 10,
    alignSelf: 'flex-end',
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  normalText: {
    fontFamily: 'Rubik',
    fontSize: 14,
    marginBottom: 10,
  },
  timeContainer: {
    alignItems: 'flex-end',
  },
  time: {
    fontFamily: 'Poppins',
    fontSize: 12,
    color:'grey',
  },
  profileImage: {
    width: 32.8,
    height: 32.8,
    borderRadius: 16.4,
    resizeMode: 'cover',
  },
  imageContainer: {
    justifyContent: 'flex-end',
    marginLeft: 10,
  },
  alignBottom: {
    alignSelf: 'flex-end',
  },
});

export default TextContainer;



