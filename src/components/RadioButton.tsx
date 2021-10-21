import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const RadioButton = ({
  options,
  answer,
  onChange,
}: {
  options: Array<string>;
  answer: string;
  onChange: (val: string) => void;
}) => {
  return (
    <View style={{margin: 20, flexDirection: 'row'}}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={{flexDirection: 'row', marginLeft: 30}}
          onPress={() => onChange(option)}>
          <Text>{option}</Text>
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 10,
              backgroundColor: 'white',
              marginLeft: 10,
              borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {answer === option && (
              <View
                style={{
                  width: 15,
                  height: 15,
                  borderRadius: 7,
                  backgroundColor: 'red',
                }}
              />
            )}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RadioButton;
