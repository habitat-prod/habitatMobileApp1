import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { useTheme } from 'react-native-paper';

import IMIcon from '../../IMIcon';
import ReplayTenOutlined from '../../../assets/svg/ReplayTenOutlined';
import ForwardTenOutlined from '../../../assets/svg/ForwardTenOutlined';
import PlayArrowFilled from '../../../assets/svg/PlayArrowFilled';
import PauseFilled from '../../../assets/svg/PauseFilled';
import useStyles from './styles';

interface IMControlCenterProps {
  id: string;
  isPaused: boolean;
  isLoading: boolean;
  togglePlayback: () => void;
  replayPreviousTen: () => void;
  fastForwardTen: () => void;
};

const IMControlCenter: React.FC<IMControlCenterProps> = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <View style={styles.container}>
      <IMIcon
        testId={'replay-ten-outlined'}
        iconSvg={<ReplayTenOutlined />}
        disabled={props.isLoading}
        onClick={props.replayPreviousTen}
        size='medium'
        iconStyle={styles.iconButton}
      />
      <IMIcon
        testId={'play-pause-outlined'}
        iconSvg={props.isLoading? <ActivityIndicator size={40}/> : props.isPaused ? <PlayArrowFilled /> : <PauseFilled />}
        onClick={props.togglePlayback}
        color={theme.Palette.text.secondary}
        disabled={props.isLoading}
        size='medium'
        iconStyle={styles.iconButton}
      />
      <IMIcon
        testId={'forward-ten-outlined'}
        iconSvg={<ForwardTenOutlined />}
        onClick={props.fastForwardTen}
        disabled={props.isLoading}
        size='medium'
        iconStyle={styles.iconButton}
      />
    </View>
  )
};

export default IMControlCenter;