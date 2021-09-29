import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import HomeScreen from '../sceens/HomeScreen';
import History from '../sceens/History';
import Invest from '../sceens/Invest';
import Promotion from '../sceens/Promotion';
import User from '../sceens/User';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 58,
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/home.png')}
                resizeMode="contain"
                style={{
                  marginBottom: 3,

                  tintColor: focused ? '#167FD2' : '#898888',
                }}></Image>
              <Text
                style={{
                  color: focused ? '#167FD2' : '#898888',
                  fontSize: 10,
                }}>
                Trang chủ
              </Text>
            </View>
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/history.png')}
                resizeMode="contain"
                style={{
                  marginBottom: 3,

                  tintColor: focused ? '#167FD2' : '#898888',
                }}></Image>
              <Text
                style={{
                  color: focused ? '#167FD2' : '#898888',
                  fontSize: 10,
                }}>
                Lịch sử
              </Text>
            </View>
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Invest"
        component={Invest}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <View
                style={{
                  borderRadius: 50,
                  height: 43,
                  width: 43,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../assets/addIcon.png')}
                  resizeMode="contain"
                  style={{
                    tintColor: '#FA944B',
                  }}></Image>
              </View>
              <Text
                style={{
                  color: focused ? '#167FD2' : '#898888',
                  fontSize: 10,
                  marginBottom: 21,
                }}>
                Thêm gói đầu tư
              </Text>
            </View>
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Promotion"
        component={Promotion}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/promotion.png')}
                resizeMode="contain"
                style={{
                  marginBottom: 3,

                  tintColor: focused ? '#167FD2' : '#898888',
                }}></Image>
              <Text
                style={{
                  color: focused ? '#167FD2' : '#898888',
                  fontSize: 10,
                }}>
                Khuyến mại
              </Text>
            </View>
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/user.png')}
                resizeMode="contain"
                style={{
                  marginBottom: 3,

                  tintColor: focused ? '#167FD2' : '#898888',
                }}></Image>
              <Text
                style={{
                  color: focused ? '#167FD2' : '#898888',
                  fontSize: 10,
                }}>
                Tài khoản
              </Text>
            </View>
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;
