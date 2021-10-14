import React from 'react';
import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';

const QuestionResult = () => {
  const route = useRoute();
  return (
    <View style={{flex: 1}}>
      <Text>Đáp án câu 1: {route.params?.answer1}</Text>
      <Text>Đáp án câu 2: {route.params?.answer2}</Text>
      <Text>Đáp án câu 3: {route.params?.answer3}</Text>
    </View>
  );
};

export default QuestionResult;
