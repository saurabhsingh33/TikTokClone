
import React from 'react';
import {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text
} from 'react-native';

import Home from './src/Screens/Home/Home';
const App = () => {

  return (
    <SafeAreaView>
      <StatusBar barStyle={"dark-content"} />
      <Home />
    </SafeAreaView>
  );
};

export default App;
