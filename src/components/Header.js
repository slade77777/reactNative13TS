import React from 'react';
import {View, Text, Image} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const Header = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
      }}>
      <View>
        <MaterialIcon size={40} name="chevron-left"></MaterialIcon>
      </View>
      <View>
        <Text style={{color: '#1F396B', fontWeight: '700', fontSize: 18}}>
          {props.title}
        </Text>
      </View>
      <View style={{left: 25}}>
        <Image
          source={require('../assets/avatar.png')}
          style={{
            width: 35,
            height: 35,
            borderRadius: 15,
            borderWidth: 1,
          }}></Image>
      </View>
    </View>
  );
};

export default Header;
