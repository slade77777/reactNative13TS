import React, {useState} from 'react';
import CustomTextInput from '../components/CustomTextInput';
import QuestionTemple from '../components/QuestionTemple';
import {useRoute} from '@react-navigation/native';

const Question2 = () => {
  const [answer, setAnswer] = useState('');
  const route = useRoute();
  return (
    <QuestionTemple
      nextScreen={'Question3'}
      answer={{...route.params, answer2: answer}}>
      <CustomTextInput
        title={'Câu 2: 1 + 2 = ?'}
        changeText={setAnswer}
        value={answer}
      />
    </QuestionTemple>
  );
};

export default Question2;
