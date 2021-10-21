import React, {useState} from 'react';
import CustomTextInput from '../components/CustomTextInput';
import QuestionTemple from '../components/QuestionTemple';
import {useRoute} from '@react-navigation/native';
import {AnswerContext} from '../Navigation';

const Question2 = () => {
  return (
    <AnswerContext.Consumer>
      {value => {
        return (
          <QuestionTemple nextScreen={'Question3'}>
            <CustomTextInput
              title={'Câu 2: 1 + 2 = ?'}
              changeText={(val: string) => value.saveAnswer('answer2', val)}
              value={value.answers.answer2}
            />
          </QuestionTemple>
        );
      }}
    </AnswerContext.Consumer>
  );
};

export default Question2;
