import React from 'react';
import CustomTextInput from '../components/CustomTextInput';
import QuestionTemple from '../components/QuestionTemple';
import {AnswerContext} from '../Navigation';

const Question1 = () => {
  return (
    <AnswerContext.Consumer>
      {value => {
        return (
          <QuestionTemple nextScreen={'Question2'}>
            <CustomTextInput
              title={'Câu 1: 1 + 1 = ?'}
              changeText={(val: string) => value.saveAnswer('answer1', val)}
              value={value.answers.answer1}
            />
          </QuestionTemple>
        );
      }}
    </AnswerContext.Consumer>
  );
};

export default React.memo(Question1);
