import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

type ItemType = {
  icon: string;
  content: string;
  date: string;
  title: string;
  read: boolean;
};

const Item = ({item}: {item: ItemType}) => (
  <TouchableOpacity
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
  </TouchableOpacity>
);

const ListPost = () => {
  const Data = useSelector(state => state.posts);
  console.log(Data);
  const navigation = useNavigation();

  const renderItem = ({item}: {item: ItemType}) => {
    return <Item item={item} />;
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.navigate('CreatePost')}
        style={{padding: 20, borderWidth: 1, margin: 10, borderColor: 'blue'}}>
        <Text>Tạo mới</Text>
      </TouchableOpacity>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.date}
      />
    </>
  );
};

const styles = StyleSheet.create({
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

export default ListPost;
