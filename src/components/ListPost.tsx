import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from './CustomTextInput';

const Data = [
  {
    icon: 'a',
    title: 'title 1',
    content: 'bước 1 aaaaaaaaaaaaaaaaaaaaa',
    date: '2021/04/04',
    read: true,
  },
  {
    icon: 'b',
    title: 'title 22',
    content: 'bước 2 aaaaaaaaaaaaaaaaaaaaa',
    date: '2021/04/05',
    read: false,
  },
  {
    icon: 'c',
    title: 'title 3333',
    content: 'bước 3 aaaaaaaaaaaaaaaaaaaaa',
    date: '2021/04/06',
    read: true,
  },
  {
    icon: 'd',
    title: 'title 22 asdasdasd',
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
    title: 'title 5.1',
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
  const [searchText, setSearchText] = useState('');
  const [listData, setListData] = useState<Array<ItemType>>([]);

  function searchRecords(searchText: string) {
    setSearchText(searchText);
    const filteredData = Data.filter(item =>
      item.title.toLowerCase().includes(searchText.toLowerCase()),
    );
    setListData(filteredData);
  }

  const renderItem = ({item}: {item: ItemType}) => {
    return <Item item={item} />;
  };

  return (
    <>
      <CustomTextInput
        title={'tìm kiếm:'}
        changeText={(val: string) => searchRecords(val)}
      />
      <FlatList
        data={searchText ? listData : Data}
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
