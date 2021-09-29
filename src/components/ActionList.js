import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';

const dataList = [
  {img: require('../assets/add.png'), title: 'Nạp tiền', color: '#FA944B'},
  {
    img: require('../assets/investNow.png'),
    title: 'Đầu tư ngay',
    color: '#49D17C',
  },
  {img: require('../assets/money.png'), title: 'Rút tiền', color: '#2541B2'},
  {
    img: require('../assets/credit.png'),
    title: 'Liên kết thẻ',
    color: '#39A9CB',
  },
];

const Item = ({item}) => (
  <View style={{alignItems: 'center'}}>
    <View style={[styles.item, {backgroundColor: item.color}]}>
      <Image source={item.img} style={{width: 30, height: 30}}></Image>
    </View>
    <Text style={{fontSize: 14, color: '#1F396B'}}>{item.title}</Text>
  </View>
);

const renderItem = ({item}) => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'white',
    }}>
    <Item item={item}></Item>
  </View>
);

const ActionList = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
        <FlatList
          data={dataList}
          renderItem={renderItem}
          keyExtractor={item => item.title}
          horizontal></FlatList>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 107,
    backgroundColor: '#FFFFFF',
  },
  item: {
    padding: 20,
    marginTop: 15,
    marginHorizontal: 16,
    marginBottom: 5,
    height: 55,
    width: 55,
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ActionList;
