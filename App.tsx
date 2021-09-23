/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';

const listData = [
  {
    icon: 'a',
    title: 'title 1',
    content: 'bước 1 aaaaaaaaaaaaaaaaaaaaa',
    date: '2021/04/04',
    read: true,
  },
  {
    icon: 'b',
    title: 'title 2',
    content: 'bước 2 aaaaaaaaaaaaaaaaaaaaa',
    date: '2021/04/05',
    read: false,
  },
  {
    icon: 'c',
    title: 'title 3',
    content: 'bước 3 aaaaaaaaaaaaaaaaaaaaa',
    date: '2021/04/06',
    read: true,
  },
  {
    icon: 'd',
    title: 'title 4',
    content: 'bước 4 aaaaaaaaaaaaaaaaaaaaa',
    date: '2021/04/07',
    read: true,
  },
  {
    icon: 'e',
    title: 'title 5',
    content: 'bước 5 aaaaaaaaaaaaaaaaaaaaa',
    date: '2021/04/08',
    read: false,
  },
  {
    icon: 'f',
    title: 'title 6',
    content: 'bước 6 aaaaaaaaaaaaaaaaaaaaa',
    date: '2021/04/09',
    read: false,
  },
];

type ItemType = {
  icon: string;
  content: string;
  date: string;
  title: string;
  read: boolean;
};

const Item = ({item}: {item: ItemType}) => (
  <View
    style={{
      ...styles.item,
      backgroundColor: item.read ? 'rgb(230, 240, 250)' : 'white',
    }}>
    <View style={styles.icon}>
      <View style={styles.round}>
        <Text style={styles.textIcon}>{item.icon}</Text>
      </View>
    </View>
    <View style={styles.content}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.contentText}>{item.content}</Text>
      <Text>{item.date}</Text>
    </View>
  </View>
);

const App = () => {
  const renderItem = ({item}: {item: ItemType}) => {
    return <Item item={item} />;
  };

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <FlatList
        data={listData}
        renderItem={renderItem}
        keyExtractor={item => item.date}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'white',
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: 'grey',
    paddingVertical: 10,
  },
  icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 4,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  contentText: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 10,
  },
  date: {
    fontSize: 13,
    color: 'grey',
  },
  round: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textIcon: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;
