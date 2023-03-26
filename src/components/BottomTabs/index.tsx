import React from 'react';
import {Pressable, View} from 'react-native';

import PlusIcon from '@/assets/svg/Plus';
import COLOR from '@/constants/color';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from 'App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type Navigation = NativeStackNavigationProp<
  RootStackParamList,
  'CreateDiaryScreen'
>;

const BottomTabs = () => {
  const navigation = useNavigation<Navigation>();

  const handlePressCreateDiary = () => {
    navigation.navigate('CreateDiaryScreen');
  };

  return (
    <View
      style={{
        height: 120,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: COLOR.BLACK,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',

          height: 70,
        }}>
        <Pressable onPress={handlePressCreateDiary}>
          <PlusIcon width={50} height={50} colorHex={COLOR.WHITE} />
        </Pressable>
      </View>
    </View>
  );
};

export default BottomTabs;
