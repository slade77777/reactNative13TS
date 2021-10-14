import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const TestEntry = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Bạn đã sẵn sàng làm bài kiểm tra</Text>
      <Button
        title={'Bắt đầu'}
        onPress={() => {
          //@ts-ignore
          navigation.navigate('Question1');
        }}
      />
    </View>
  );
};

export default TestEntry;
