import React from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import PlusIcon from '@/assets/svg/Plus';
import COLOR from '@/constants/color';

const BottomTabs = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        height: 120,
        position: 'absolute',
        bottom: 0,
        width: '100%',

        backgroundColor: 'green',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <PlusIcon width={30} height={30} colorHex={COLOR.WHITE} />
      </View>

      <View
        style={{
          height: insets.bottom,
        }}
      />
    </View>
  );
};

export default BottomTabs;
