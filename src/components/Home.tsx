import React, {FC} from 'react';
import {View} from 'react-native';
import Header from './Header';
import CardInformation from './CardInformation';
import MenuList from './MenuList';
import TradeHistory from './TradeHistory';

const headerTitle = 'Chi tiết đầu tư';

const Home: FC = () => {
  return (
    <View>
      <Header title={headerTitle} />
      <CardInformation />
      <MenuList />
      <TradeHistory />
    </View>
  );
};
export default Home;
