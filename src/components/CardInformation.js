import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CardInformation = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Số dư :</Text>
        <View style={styles.moneyContainer}>
          <Text style={styles.money}>160,000,000</Text>
        </View>
        <View style={styles.typeOfMoneyContainer}>
          <Text style={styles.typeOfMoney}>VNĐ</Text>
        </View>
        <View style={styles.investContainer}>
          <Text style={styles.investText}>
            Mã gói đầu tư: <Text style={styles.showDetail}>001ah7297</Text>
          </Text>
          <Text style={styles.investText}>
            Seri number: <Text style={styles.showDetail}>*37165 </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 355,
    height: 166,
    backgroundColor: '#4786FF',
    borderRadius: 5,
  },
  title: {
    fontSize: 19,
    color: '#fff',
    fontWeight: '700',
    top: 16,
    left: 10,
  },
  moneyContainer: {
    position: 'absolute',
    top: 33,
    left: 119,
  },
  money: {
    fontWeight: '700',
    lineHeight: 36,
    color: '#fff',
    fontSize: 30,
  },
  typeOfMoneyContainer: {
    position: 'absolute',
    top: 68,
    right: 17,
  },
  typeOfMoney: {
    fontSize: 19,
    lineHeight: 22,
    color: '#fff',
  },
  investContainer: {
    top: 112,
    left: 10,
    position: 'absolute',
  },
  investText: {
    fontWeight: '400',
    fontSize: 16,
    color: '#fff',
  },
  showDetail: {
    fontWeight: '700',
  },
});

export default CardInformation;
