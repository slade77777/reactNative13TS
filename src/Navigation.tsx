import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Question4 from './screens/Question4';
import Question1 from './screens/Question1';
import Question2 from './screens/Question2';
import Question3 from './screens/Question3';
import QuestionResult from './screens/QuestionResult';

const Stack = createNativeStackNavigator();
const initialAnswers = {
  answer1: null,
  answer2: null,
};
export const AnswerContext = React.createContext<any>(initialAnswers);

const Navigation = () => {
  const [answers, setAnswers] = useState(initialAnswers);

  function saveAnswer(key: string, val: string) {
    setAnswers({...answers, [key]: val});
  }

  return (
    <NavigationContainer>
      <AnswerContext.Provider value={{answers, saveAnswer}}>
        <Stack.Navigator>
          <Stack.Screen name={'Home'} component={Home} />
          <Stack.Screen name={'Question4'} component={Question4} />
          <Stack.Screen name={'Question1'} component={Question1} />
          <Stack.Screen name={'Question2'} component={Question2} />
          <Stack.Screen name={'Question3'} component={Question3} />
          <Stack.Screen name={'QuestionResult'} component={QuestionResult} />
        </Stack.Navigator>
      </AnswerContext.Provider>
    </NavigationContainer>
  );
};

export default Navigation;
