import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const dataList = [
  {
    title: 'Lợi nhuận đầu tư tháng 3',
    tradeID: '001ah7297.',
    time: '18h00 ngày 31/3/2021',
    unit: 'VNĐ',
    amount: 1600000,
  },
  {
    title: 'Nạp tiền',
    tradeID: '001ah7297.',
    time: '15h00 ngày 29/3/2021',
    unit: 'VNĐ',
    amount: 1600000,
  },
  {
    title: 'Lợi nhuận đầu tư tháng 2',
    tradeID: '001ah7297.',
    time: '18h00 ngày 31/3/2021',
    unit: 'VNĐ',
    amount: 1600000,
  },
];

const Item = ({item}) => (
  <View
    style={{
      borderBottomWidth: 1,
      borderColor: '#E2E2E2',
      height: 53,
      alignContent: 'center',
      justifyContent: 'center',
    }}>
    <View style={{flexDirection: 'row'}}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      {item.amount > 0 ? (
        <Text style={styles.amount}>+ {item.amount}</Text>
      ) : (
        <Text style={styles.amount}>- {item.amount}</Text>
      )}
    </View>
    <View style={{flexDirection: 'row'}}>
      <Text style={styles.itemInfo}>Mã: {item.tradeID}</Text>
      <Text style={[styles.itemInfo, {marginLeft: 3}]}>{item.time}</Text>
      <Text style={[styles.itemInfo, {marginLeft: 'auto'}]}>{item.unit}</Text>
    </View>
  </View>
);

const renderItem = ({item}) => (
  <View style={{width: '100%'}}>
    <Item item={item} />
  </View>
);

const TradeList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LỊCH SỬ GIAO DỊCH</Text>
      <View style={{width: '100%', marginBottom: 10, marginVertical: 10}}>
        <FlatList
          data={dataList}
          keyExtractor={item => item.title}
          renderItem={renderItem}></FlatList>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 196,
    backgroundColor: '#FFFF',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
  },
  title: {
    color: '#1F396B',
    fontSize: 14,
    fontWeight: '400',
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1F396B',
  },
  itemInfo: {
    fontSize: 12,
    lineHeight: 19,
    color: 'gray',
  },
  amount: {
    marginLeft: 'auto',
    color: '#167FD2',
    fontWeight: '700',
    fontSize: 16,
  },
});

export default TradeList;
