import React, {ReactNode} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const QuestionTemple = ({
  children,
  nextScreen,
}: {
  children: ReactNode;
  nextScreen: string;
}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
      {children}
      <TouchableOpacity
        style={{backgroundColor: 'blue', padding: 10}}
        //@ts-ignore
        onPress={() => navigation.navigate(nextScreen)}>
        <Text style={{color: 'white', textAlign: 'center'}}>Tiếp tục</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuestionTemple;
