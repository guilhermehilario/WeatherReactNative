import React from 'react';

import {Home} from './src/screens/Home';
import {SafeAreaView, ScrollView} from 'react-native';

export const App = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{paddingVertical: 20}}>
        <Home />
      </ScrollView>
    </SafeAreaView>
  );
};
