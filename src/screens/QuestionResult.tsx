import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AnswerContext} from '../Navigation';
import {useSelector} from 'react-redux';

const QuestionResult = () => {
  const navigation = useNavigation();
  const store = useSelector(state => state) as any;
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={() => navigation.popToTop()}>
        <Text style={{color: 'blue'}}>Quay lại từ đầu</Text>
      </TouchableOpacity>
      <Text>Đáp án câu 1: {store.answers.answer1}</Text>
      <Text>Đáp án câu 2: {store.answers.answer2}</Text>
      <Text>Đáp án câu 3: {store.answers.answer3}</Text>
    </View>
  );
};

export default QuestionResult;
