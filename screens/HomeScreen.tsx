import React from 'react';
import {View, Text, Button} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  BrowseProduct: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({navigation}: Props) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>HomeScreen</Text>
      <Button
        title="Go to BrowseProduct"
        onPress={() => navigation.navigate('BrowseProduct')}></Button>
    </View>
  );
};

export default HomeScreen;
