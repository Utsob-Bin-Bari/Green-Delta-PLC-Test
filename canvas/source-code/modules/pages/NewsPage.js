import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import NewsTop from '../components/NewsTop';
import NewsList from '../components/NewsList';
import DummyNewsData from '../constants/DummyNewsData';
import Colors from '../constants/Colors';

const NewsPage = () => {
  return (
    <View style={styles.container}>
      <NewsTop />
      <FlatList
        data={DummyNewsData.body}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <View style={styles.divider} />
            <NewsList text={item.text} type={item.type} />
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  divider: {
    width: 350,
    height: 1,
    backgroundColor: Colors.footerBorder,
    alignSelf: 'center',
    marginVertical: 20,
  },
});

export default NewsPage;


//Didn't add the logo and clock is bit upward on the news Top and need result page.