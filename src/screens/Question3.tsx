import React, {useContext, useState} from 'react';
import QuestionTemple from '../components/QuestionTemple';
import {View, Text} from 'react-native';
import RadioButton from '../components/RadioButton';
import {AnswerContext} from '../Navigation';

const Question3 = () => {
  const value = useContext(AnswerContext);
  return (
    <QuestionTemple nextScreen={'QuestionResult'}>
      <View>
        <Text>câu 3 : 1 + 3</Text>
        <RadioButton
          options={['1', '2', '3', '4']}
          onChange={(val: string) => value.saveAnswer('answer3', val)}
          answer={value.answers.answer3}
        />
      </View>
    </QuestionTemple>
  );
};

export default Question3;
