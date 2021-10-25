import React, {useContext, useState} from 'react';
import QuestionTemple from '../components/QuestionTemple';
import {View, Text} from 'react-native';
import RadioButton from '../components/RadioButton';
import {AnswerContext} from '../Navigation';
import {useDispatch, useSelector} from 'react-redux';
import {answerQuestion} from '../redux/actions/answerAction';

const Question3 = () => {
  const store = useSelector(state => state) as any;
  const dispatch = useDispatch();
  return (
    <QuestionTemple nextScreen={'QuestionResult'}>
      <View>
        <Text>câu 3 : 1 + 3</Text>
        <RadioButton
          options={['1', '2', '3', '4']}
          onChange={(val: string) => dispatch(answerQuestion('answer3', val))}
          answer={store.answers.answer3}
        />
      </View>
    </QuestionTemple>
  );
};

export default Question3;
