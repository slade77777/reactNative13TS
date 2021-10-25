import React, {useState} from 'react';
import CustomTextInput from '../components/CustomTextInput';
import QuestionTemple from '../components/QuestionTemple';
import {useDispatch, useSelector} from 'react-redux';
import {answerQuestion} from '../redux/actions/answerAction';

const Question2 = () => {
  const store = useSelector(state => state) as any;
  const dispatch = useDispatch();
  return (
    <QuestionTemple nextScreen={'Question3'}>
      <CustomTextInput
        title={'Câu 2: 1 + 2 = ?'}
        changeText={(val: string) => dispatch(answerQuestion('answer2', val))}
        value={store.answers.answer2}
      />
    </QuestionTemple>
  );
};

export default Question2;
