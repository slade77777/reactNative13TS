import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Question4 from './screens/Question4';
import Question1 from './screens/Question1';
import Question2 from './screens/Question2';
import Question3 from './screens/Question3';
import QuestionResult from './screens/QuestionResult';
import Login from './screens/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Provider} from 'react-redux';
import stores from './redux/store';

const Stack = createNativeStackNavigator();
const initialAnswers = {
  answer1: null,
  answer2: null,
};

const initialUser = {
  name: '',
};

export const AnswerContext = React.createContext<any>(initialAnswers);
export const UserContext = React.createContext<any>(initialUser);

const Navigation = () => {
  const [answers, setAnswers] = useState(initialAnswers);
  const [user, setUser] = useState(initialUser);

  useEffect(() => {
    AsyncStorage.getItem('name').then(result => {
      if (result) {
        setUser({name: result});
      }
    });
  }, []);

  function saveAnswer(key: string, val: string) {
    setAnswers({...answers, [key]: val});
  }

  return (
    <NavigationContainer>
      <Provider store={stores}>
        <AnswerContext.Provider value={{answers, saveAnswer}}>
          <UserContext.Provider
            value={{user, saveUser: (name: string) => setUser({name})}}>
            <Stack.Navigator>
              {user.name ? (
                <>
                  <Stack.Screen name={'Home'} component={Home} />
                  <Stack.Screen name={'Question4'} component={Question4} />
                  <Stack.Screen name={'Question1'} component={Question1} />
                  <Stack.Screen name={'Question2'} component={Question2} />
                  <Stack.Screen name={'Question3'} component={Question3} />
                  <Stack.Screen
                    name={'QuestionResult'}
                    component={QuestionResult}
                  />
                </>
              ) : (
                <Stack.Screen name={'Login'} component={Login} />
              )}
            </Stack.Navigator>
          </UserContext.Provider>
        </AnswerContext.Provider>
      </Provider>
    </NavigationContainer>
  );
};

export default Navigation;
