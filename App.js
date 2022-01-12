import 'react-native-gesture-handler';
import React from 'react';
import {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text
} from 'react-native';

import Home from './src/Screens/Home/Home';
import RootNavigation from './src/Navigation/Navigation';

const App = () => {

  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <RootNavigation />
      </SafeAreaView>
    </>
  );
};

export default App;
