
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
    <>
      <StatusBar barStyle={"dark-content"} />
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </>
  );
};

export default App;
