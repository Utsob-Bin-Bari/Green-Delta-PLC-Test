import React from 'react';
import { View, Image, StyleSheet, FlatList } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Colors from '../constants/Colors';
import { useSelector } from 'react-redux';
import TextContainer from '../components/TextContainer';

const profileImageLink1 = require('../../assets/images/profile.jpeg');
const profileImageLink2 = require('../../assets/images/player1.jpg');
const profileImageLink3 = require('../../assets/images/player2.jpg');
const profileImageLink4 = require('../../assets/images/post.jpeg');

const profileImages = {
  1: profileImageLink1,
  2: profileImageLink2,
  3: profileImageLink3,
  4: profileImageLink4,
};

const ChatPage = () => {
  const messages = useSelector((state) => state.data);

  return (
    <View style={styles.container}>
      <View style={styles.share}>
        <AntDesign name="sharealt" size={32} color="black" />
        <View style={styles.profileContainer}>
          {Object.values(profileImages).map((image, index) => (
            <Image key={index} style={styles.profileImage} source={image} />
          ))}
        </View>
      </View>
      <View style={styles.divider} />
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()} // Ensures each item has a unique key based on its `id`
        renderItem={({ item }) => (
          <TextContainer
            id={item.id}
            name={item.name}
            picture={item.picture}
            text={item.text}
            time={item.time}
          />
        )}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  share: {
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: Colors.footerText,
  },
  profileContainer: {
    flexDirection: 'row',
    marginLeft: 65,
  },
  profileImage: {
    width: 32.8,
    height: 32.8,
    borderRadius: 16.4,
    resizeMode: 'cover',
    marginLeft: 10,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.footerBorder,
    alignSelf: 'center',
    marginBottom: 10,
  },
  flatListContent: {
    paddingBottom: 10,
  },
});

export default ChatPage;






