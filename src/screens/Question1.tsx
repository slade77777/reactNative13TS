import React, {useState} from 'react';
import CustomTextInput from '../components/CustomTextInput';
import QuestionTemple from '../components/QuestionTemple';

const Question1 = () => {
  const [answer, setAnswer] = useState('');
  return (
    <QuestionTemple nextScreen={'Question2'} answer={{answer1: answer}}>
      <CustomTextInput
        title={'Câu 1: 1 + 1 = ?'}
        changeText={setAnswer}
        value={answer}
      />
    </QuestionTemple>
  );
};

export default Question1;
