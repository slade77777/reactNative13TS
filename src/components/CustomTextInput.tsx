import React, {FC} from 'react';
import {Text, TextInput, View} from 'react-native';

const CustomTextInput: FC<{
  title?: string;
  changeText: (text: string) => void;
  value?: string;
}> = ({changeText, value, title}) => {
  return (
    <View style={{marginTop: 10}}>
      <Text>{title}:</Text>
      <TextInput
        onChangeText={text => changeText(text)}
        placeholder="00"
        value={value}
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

export default React.memo(CustomTextInput);
