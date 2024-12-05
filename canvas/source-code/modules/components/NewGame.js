import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity,Image} from 'react-native';
import Colors from '../constants/Colors';
import { EvilIcons } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';


const NewGame = ({data}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.upContainer}>
            <View style={styles.gameInfo}>
                <View style={styles.dateTime}>
                    <Text style={styles.topText}>{data.location}  |  </Text>
                    <Text style={styles.topText}>Court #{data.courtNo}</Text>
                </View>
                <View style={styles.dateTime}>
                    <Ionicons name="calendar-clear-outline" size={13} color={Colors.textAncient} />
                    <Text style={styles.subText}>  {data.date}    </Text>
                    <EvilIcons name="clock" size={15} color={Colors.textAncient}/>
                    <Text style={styles.subText}>  {data.time}    </Text>
                    <FontAwesome6 name="comment" size={13} color={Colors.textAncient} />
                    <Text style={styles.subText}> {data.messageCount}  messages</Text> 
                </View>
            </View>
            <View style={styles.shareIcon}>
                <AntDesign name="sharealt" size={24} color={Colors.textAncient}/>
            </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.PlayerContainer}>
            <View style={styles.nameContainer}>
                <Image style={styles.profileImage}
                   source={data.player1.photoLink}/>
                <Text style={styles.name}>{data.player1.name}.</Text>
                <Text style={styles.subText}>({data.player1.title})</Text>
            </View>
            <View style={styles.nameContainer}>
                <Image style={styles.profileImage}
                   source={data.player2.photoLink}/>
                <Text style={styles.name}>{data.player2.name}.</Text>
                <Text style={styles.subText}>({data.player2.title})</Text>
            </View>
            <View>
                <Text style={styles.vs}>VS.</Text>
            </View>
            <View style={styles.nameContainer}>
                <View style={styles.profileImageDotted}><AntDesign name="plus" size={14} color={Colors.textAncient} /></View>
                <Text style={styles.name}>player</Text>
                <Text style={styles.subText}>(nickname)</Text>
            </View>
            <View style={styles.nameContainer}>
                <View style={styles.profileImageDotted}><AntDesign name="plus" size={14} color={Colors.textAncient} /></View>
                <Text style={styles.name}>player</Text>
                <Text style={styles.subText}>(nickname)</Text>
            </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.bottomContainer}>
            <View style={styles.weatherContainer}>
                <Text style={styles.subText}><MaterialCommunityIcons name="water-outline" size={14} color={Colors.textAncient}/>  {data.weather.precipitation}% Precipitation</Text>
                <Text style={styles.subText}><MaterialCommunityIcons name="weather-partly-cloudy" size={14} color={Colors.textAncient}/>   Weather - {data.weather.status}</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                <LinearGradient
                    colors={[Colors.gradientStart, Colors.gradientEnd]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.chatButton}>
                    <Text style={styles.chatText}>Chat</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:350,
        height:238,
        marginTop:10,
        borderColor:Colors.footerBorder,
        borderRadius:8,
        borderWidth:1.2,
        overflow:"hidden",
        backgroundColor:Colors.footerText,
    },
    upContainer:{
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'center',
    },
    PlayerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:17.2,
        marginLeft:10,
    },
    gameInfo:{
        height:60,
        width:280,
        marginTop:10,
        marginLeft:35,
    },
    shareIcon:{
        height:60,
        marginTop:10,
        marginRight:35,

    },
    topText:{
        fontFamily:'Rubik',
        fontSize:14,
        color:Colors.textAncient,
    },
    name:{
        fontFamily:'Rubik',
        fontSize:14,
        color:'black',
    },
    dateTime:{
        flexDirection:'row',
        padding:5,
    },
    subText:{
        fontFamily:'Rubik',
        fontSize:11,
        color:Colors.subTextColor,
    },
    divider: {
        width: 350,
        height: 1,
        backgroundColor: Colors.footerBorder,
        alignSelf: 'center',
      },
    chatText:{
        fontFamily:"Rubik",
        fontSize:14,
        color:Colors.footerText,
        marginLeft:-20,
        marginTop:-10,
    },
    bottomContainer:{
        flexDirection:"row",
        height:52,
        alignItems:'center',
    }
    ,
    weatherContainer:{
        height:52,
        width:175,
        justifyContent:'center',
        marginLeft:40,
        marginTop:-10,
    },
    chatButton:{
        width:155,
        height:52,
        justifyContent:'center',
        alignItems:'center',
    },
    vs:{
        fontFamily:"Rubik",
        color:Colors.textAncient,
        fontSize:18,
        marginBottom:20,
    },
    profileImage: {
        width: 51.57,
        height: 51.57,
        borderRadius: 28.5,
        borderWidth: 1,
        borderColor: Colors.borderColor,
        resizeMode: 'cover',
      },
    profileImageDotted:{
        height:51.57,
        width:51.57,
        borderRadius:28.5,
        borderWidth: 1,
        borderColor: Colors.borderColor,
        borderStyle:"dotted",
        alignItems:'center',
        justifyContent:'center',
    },
    nameContainer:{
        alignItems:'center',
        justifyContent:'center'
    }
})

export default NewGame;