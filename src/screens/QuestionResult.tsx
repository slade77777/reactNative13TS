import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AnswerContext} from '../Navigation';

const QuestionResult = () => {
  const navigation = useNavigation();
  return (
    <AnswerContext.Consumer>
      {value => {
        return (
          <View style={{flex: 1}}>
            <TouchableOpacity onPress={() => navigation.popToTop()}>
              <Text style={{color: 'blue'}}>Quay lại từ đầu</Text>
            </TouchableOpacity>
            <Text>Đáp án câu 1: {value.answers.answer1}</Text>
            <Text>Đáp án câu 2: {value.answers.answer2}</Text>
            <Text>Đáp án câu 3: {value.answers.answer3}</Text>
          </View>
        );
      }}
    </AnswerContext.Consumer>
  );
};

export default QuestionResult;
