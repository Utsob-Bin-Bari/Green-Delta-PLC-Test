import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { addText } from '../../redux/action';
import { useDispatch } from 'react-redux';

const ChatFooter = () => {
  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch();

  const handleSend = () => {
    if (inputText.trim()) {
      const time = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
      dispatch(addText(inputText,time));
      setInputText('');  
    }
  };

  return (
    <View style={styles.outerBox}>
      <AntDesign name="plus" size={25} color={Colors.textAncient} style={styles.plus} />
      <TextInput
        style={styles.textInput}
        value={inputText}
        onChangeText={setInputText}
        placeholder="Add a comment..."
        placeholderTextColor="grey"
      />
      <TouchableOpacity onPress={handleSend}>
        <MaterialCommunityIcons name="send-circle" size={50} color={Colors.textAncient} style={styles.send} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  outerBox: {
    flexDirection: 'row',
    height: 138,
    borderTopWidth: 2,
    borderColor: Colors.footerBorder,
    backgroundColor: Colors.footerText,
    padding: 20,
    alignItems: 'flex-start',
  },
  textInput: {
    color: Colors.subTextColor,
    fontFamily: 'Rubik',
    fontSize: 14,
    width: '70%',  
    padding: 10,
  },
  plus: {
    marginLeft: 15,
    marginRight: 15,
    marginTop:5,
  },
  send: {
    marginLeft: 0,
    marginTop:-5,
  },
});

export default ChatFooter;
