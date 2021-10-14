import React, {useState} from 'react';
import QuestionTemple from '../components/QuestionTemple';
import {useRoute} from '@react-navigation/native';
import {View, Text} from 'react-native';
import RadioButton from '../components/RadioButton';

const Question3 = () => {
  const [answer, setAnswer] = useState('');
  const route = useRoute();
  return (
    <QuestionTemple
      nextScreen={'QuestionResult'}
      answer={{...route.params, answer3: answer}}>
      <View>
        <Text>câu 3 : 1 + 3</Text>
        <RadioButton
          options={['1', '2', '3', '4']}
          answer={answer}
          onChange={setAnswer}
        />
      </View>
    </QuestionTemple>
  );
};

export default Question3;
