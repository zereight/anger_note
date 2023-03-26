import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import BottomTabs from './src/components/BottomTabs';
import CreateDiaryScreen from './src/screens/CreateDiarySceen';

const Stack = createNativeStackNavigator();

const App = (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          backgroundColor: 'orange',
          flex: 1,
        }}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="CreateDiaryScreen"
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen
              name="CreateDiaryScreen"
              component={CreateDiaryScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>

        <BottomTabs />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
