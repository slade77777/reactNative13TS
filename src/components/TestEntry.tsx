import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {UserContext} from '../Navigation';

const TestEntry = () => {
  const navigation = useNavigation();
  const userContext = useContext(UserContext);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{userContext.user.name} đã sẵn sàng làm bài kiểm tra</Text>
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
