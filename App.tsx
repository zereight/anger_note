import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'red',
        flex: 1,
      }}>
      <View>
        <Text>{'안녕하세요'}</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
