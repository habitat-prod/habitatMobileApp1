import React, { useState } from 'react'
import { View, Text } from 'react-native';
import { useTheme } from 'react-native-paper';
import Slider, { SliderProps } from '@react-native-community/slider';

import { formatDuration } from '../../../utils/common';
import useToggle from '../../../customHooks/useToggle';
import useStyles from './styles';

interface IIMSeekBarProps {
  id: string;
  currentTime: number;
  totalDuration: number;
  onSlideComplete: (value: number) => void;
  disableSeeking?: boolean;
}

const IMSeekBar: React.FC<IIMSeekBarProps> = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme);

  const handleSlideChange = (value: number) => {
    props.onSlideComplete(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{formatDuration(props.currentTime)}</Text>
      <Slider
        value={props.currentTime}
        minimumValue={0}
        maximumValue={props.totalDuration}
        thumbTintColor={theme.Palette.IMPrimary.main}
        maximumTrackTintColor={theme.Palette.IMPrimary.main}
        minimumTrackTintColor={theme.Palette.IMPrimary.main}
        disabled={props.disableSeeking}
        onValueChange={handleSlideChange}
        onSlidingComplete={handleSlideChange}
        style={styles.sliderContainer}
      />
      <Text style={styles.time}>{formatDuration(props.totalDuration)}</Text>
    </View>
  )
}

export default IMSeekBar;