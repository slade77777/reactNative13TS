/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useRef} from 'react';
import {SafeAreaView, AppState} from 'react-native';
import {SceneMap, TabView} from 'react-native-tab-view';
import Clock from '../components/Clock';
import ListPost from '../components/ListPost';
import Calculate from '../components/Calculate';
import TestEntry from '../components/TestEntry';

const Home = () => {
  const [index, setIndex] = React.useState(0);
  const renderScene = SceneMap({
    first: Clock,
    second: ListPost,
    third: Calculate,
    fourth: () => <TestEntry />,
  });

  const [routes] = React.useState([
    {key: 'first', title: 'Clock'},
    {key: 'second', title: 'List'},
    {key: 'third', title: 'calculate'},
    {key: 'fourth', title: 'Exam'},
  ]);

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        tabBarPosition={'bottom'}
      />
    </SafeAreaView>
  );
};

export default Home;
