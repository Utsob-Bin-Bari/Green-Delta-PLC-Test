import React from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import NewGame from '../components/NewGame';
import dummyNewGameData from '../constants/dummyNewGameData';
import Colors from '../constants/Colors';

const GamePage = () => {
  const renderItem = ({ item }) => <NewGame data={item} />;
  return (
    <View style={styles.container}>
      <View style={styles.filterDate}>
      <SimpleLineIcons name="equalizer" size={24} color={Colors.textAncient} style={styles.rotatedIcon} /> 
      <View style={styles.hours}>
        <Text style={styles.text}>Date | hour...{"                 "}
          <AntDesign name="down" size={18} color={Colors.textAncient}/></Text>
      </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.doubleContainer}>
            <Text style={styles.double}>Doubles games</Text>
      </View>
      <FlatList
        data={dummyNewGameData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  filterDate:{
    width:390,
    height:65,
    flexDirection:'row',
    alignItems:'center',
    marginLeft:50,
  }
  ,
  listContent: {
    marginBottom:15,
  },
  divider: {
    width: 390,
    height: 1,
    backgroundColor: Colors.footerBorder,
    alignSelf: 'center',
    marginBottom:10,
  },
  doubleContainer:{
    height:34,
    width:125,
    borderRadius:26,
    borderWidth:1,
    borderColor:Colors.textAncient,
    alignItems:'center',
    justifyContent:'center',
    marginRight:223,
    backgroundColor:Colors.footerText,
  },
  double:{
    fontFamily:'Rubik',
    fontSize:14,
    color:Colors.textAncient,
  },
  hours:{
    height:31,
    width:182,
    marginLeft:10,
    borderRadius:48,
    borderWidth:1,
    justifyContent:'center',
    borderColor:Colors.footerBorder,
    backgroundColor:Colors.footerText,
  },
  text:{
    fontFamily:'Rubik',
    fontSize:14,
    marginLeft:15,
  },
  rotatedIcon: {
    transform: [{ rotate: '270deg' }], 
  },
});

export default GamePage;

