/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {SceneMap, TabView} from 'react-native-tab-view';
import ListPost from './src/components/ListPost';
import Home from './src/components/Home';
import Calculate from './src/components/Calculate';

const renderScene = SceneMap({
  first: Home,
  second: ListPost,
  third: Calculate,
});

const App = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'ListPost'},
    {key: 'second', title: 'Empty page'},
    {key: 'third', title: 'calculate'},
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

export default App;
