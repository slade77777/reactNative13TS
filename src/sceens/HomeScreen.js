import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ActionList from '../components/ActionList';
import CardInformation from '../components/CardInformation';
import Header from '../components/Header';
import TradeList from '../components/TradeList';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header title="Chi tiết đầu tư" />
      </View>
      <View style={styles.cardInformation}>
        <CardInformation />
      </View>
      <View style={styles.actionList}>
        <ActionList />
      </View>
      <View style={styles.tradeList}>
        <TradeList />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  header: {
    top: 40,
  },
  cardInformation: {
    top: 60,
  },
  actionList: {
    top: 70,
    width: '100%',
  },
  tradeList: {
    top: 78,
    width: '100%',
    flex: 1,
  },
});

export default HomeScreen;
