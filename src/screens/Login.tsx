import {View, Text, TouchableOpacity} from 'react-native';
import React, {useContext, useState} from 'react';
import CustomTextInput from '../components/CustomTextInput';
import {UserContext} from '../Navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const [name, setName] = useState('');
  const userContext = useContext(UserContext);

  async function saveUser() {
    const result = await AsyncStorage.setItem('name', name);
    userContext.saveUser(name);
  }

  return (
    <View
      style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Login screen</Text>
      <CustomTextInput changeText={setName} title={'tên người dùng'} />
      <TouchableOpacity
        onPress={saveUser}
        style={{
          height: 50,
          width: 200,
          backgroundColor: 'blue',
          borderWidth: 1,
          display: 'flex',
          justifyContent: 'center',
          marginTop: 30,
        }}>
        <Text style={{textAlign: 'center', color: 'white'}}>Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
