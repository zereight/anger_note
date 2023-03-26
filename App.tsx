import HomeScreen from '@/screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import BottomTabs from './src/components/BottomTabs';
import CreateDiaryScreen from './src/screens/CreateDiarySceen';

/**
 * https://reactnavigation.org/docs/typescript/
 */
export type RootStackParamList = {
  HomeScreen: undefined;
  CreateDiaryScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

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
            initialRouteName="HomeScreen"
            screenOptions={{
              headerShown: false,
              animation: 'simple_push',
            }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen
              name="CreateDiaryScreen"
              component={CreateDiaryScreen}
              options={{
                animation: 'slide_from_bottom',
              }}
            />
          </Stack.Navigator>

          <BottomTabs />
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
