import React, {FC} from 'react';
import {View} from 'react-native';
import Header from './Header';
import CardInformation from './CardInformation';
import MenuList from './MenuList';
import TradeHistory from './TradeHistory';

const Home: FC = () => {
  return (
    <View>
      <Header />
      <CardInformation />
      <MenuList />
      <TradeHistory />
    </View>
  );
};
export default Home;
