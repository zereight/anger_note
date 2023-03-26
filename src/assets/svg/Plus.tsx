import COLOR from '@/constants/color';
import React from 'react';
import Svg, {Circle, Line} from 'react-native-svg';

interface Props {
  width: number;
  height: number;
  colorHex?: string;
}

const PlusIcon = ({width, height, colorHex = COLOR.BLACK}: Props) => (
  <Svg width={width} height={height} viewBox="0 0 100 100">
    <Circle
      cx="50"
      cy="50"
      r="45"
      stroke={colorHex}
      strokeWidth="10"
      fill="none"
    />
    <Line x1="50" y1="30" x2="50" y2="70" stroke={colorHex} strokeWidth="10" />
    <Line x1="30" y1="50" x2="70" y2="50" stroke={colorHex} strokeWidth="10" />
  </Svg>
);

export default PlusIcon;
