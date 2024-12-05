import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { enableScreens } from 'react-native-screens';
import * as Font from 'expo-font';
import MyNavigator from './navigator/MyNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './redux/store';

enableScreens();

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          Rubik: require('./assets/fonts/Rubik.ttf'),
          Poppins: require('./assets/fonts/Poppins.ttf'),
        });
        setLoading(false);
      } catch (error) {
        console.error('Error loading fonts:', error);
        setLoading(false);
      }
    }
    loadFonts();
  }, []);

  return loading ? (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color="red" />
    </View>
  ) : (
    <Provider store={store}>
      <NavigationContainer>
        <MyNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
