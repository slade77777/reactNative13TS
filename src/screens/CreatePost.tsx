import React, {FC, useState} from 'react';
import {Button, View} from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import {useDispatch} from 'react-redux';
import {createPost} from '../redux/actions/postActions';
import {useNavigation} from '@react-navigation/native';

const CreatePost: FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [icon, setIcon] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  function submit() {
    dispatch(
      createPost({
        title,
        content,
        icon,
      }),
    );
    navigation.goBack();
  }
  return (
    <View>
      <CustomTextInput title={'tiêu đề'} value={title} changeText={setTitle} />
      <CustomTextInput
        title={'Nội dung'}
        value={content}
        changeText={setContent}
      />
      <CustomTextInput title={'icon'} value={icon} changeText={setIcon} />
      <Button title={'Tạo mới'} onPress={submit} />
    </View>
  );
};

export default CreatePost;
