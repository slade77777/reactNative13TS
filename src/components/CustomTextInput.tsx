import React, {FC} from 'react';
import {Text, TextInput, View} from 'react-native';

const CustomTextInput: FC<{title: string; changeText: (text: string) => void}> =
  ({title, changeText}) => {
    return (
      <View style={{marginTop: 10}}>
        <Text>{title}:</Text>
        <TextInput
          onChangeText={text => changeText(text)}
          placeholder="10"
          style={{
            borderWidth: 0.5,
            borderColor: 'grey',
            height: 40,
            borderRadius: 10,
            paddingLeft: 10,
            marginTop: 10,
          }}
        />
      </View>
    );
  };

export default CustomTextInput;
