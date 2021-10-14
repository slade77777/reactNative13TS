import React from 'react';
import CustomTextInput from '../components/CustomTextInput';
import QuestionTemple from '../components/QuestionTemple';

const Question4 = () => {
  return (
    <QuestionTemple nextScreen={'Question1'}>
      <CustomTextInput
        title={'Câu 4: 1 + 4 = ?'}
        changeText={() => {}}
        value={''}
      />
    </QuestionTemple>
  );
};

export default Question4;
