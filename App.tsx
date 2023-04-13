import React from 'react';

import {Home} from './src/screens/Home';
import {Map} from './src/screens/Map';
import {SafeAreaView, ScrollView} from 'react-native';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{
          paddingVertical: 20,
          flex: 1,
        }}>
        <Home />
        {/* <Map /> */}
      </ScrollView>
    </SafeAreaView>
  );
};
