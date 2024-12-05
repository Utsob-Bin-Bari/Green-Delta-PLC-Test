import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatPage from '../modules/pages/ChatPage';
import GamePage from '../modules/pages/GamePage';
import NewsPage from '../modules/pages/NewsPage';
import Footer from '../modules/components/Footer';
import Header from '../modules/components/Header';
import ChatHeader from '../modules/components/ChatHeader';
import DummyProfileData from '../modules/constants/DummyProfileData';
import ChatFooter from '../modules/components/ChatFooter';

const Tab = createBottomTabNavigator();

const MyNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Game"
      screenOptions={({ route }) => ({
        headerShown: true,
        header: () =>
          route.name !== 'Chat' ? (
            <Header
              name={DummyProfileData.name}
              title={DummyProfileData.title}
              description={DummyProfileData.description}
              profileImageLink={DummyProfileData.profileImageLink}
            />
          ) : (
            <ChatHeader />
          ),
        tabBarStyle: {
          display: 'none',
        },
      })}
    >
      <Tab.Screen name="Chat">
        {() => (
          <View style={styles.pageContainer}>
            <ChatPage />
            <ChatFooter />
          </View>
        )}
      </Tab.Screen>
      <Tab.Screen name="Game">
        {() => (
          <View style={styles.pageContainer}>
            <GamePage />
            <Footer />
          </View>
        )}
      </Tab.Screen>
      <Tab.Screen name="News">
        {() => (
          <View style={styles.pageContainer}>
            <NewsPage />
            <Footer />
          </View>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default MyNavigator;


