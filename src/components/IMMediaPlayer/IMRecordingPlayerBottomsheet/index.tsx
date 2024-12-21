import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';

import IMIcon from '../../IMIcon';
import IMBottomSheet from '../../IMBottomSheet';
import DownloadFilled from '../../../assets/svg/DownloadFilled';
import IMMediaPlayer, { MediaPlayerMode } from '..';
import { convertToDateString, downloadFileFromUrl } from '../../../utils/common';
import useStyles from './styles';

interface IRecordingPlayerBottomsheetProps {
  isOpen: boolean;
  primaryText: string;
  secondaryText: string;
  title: string;
  recordingUrl: string;
  repeatMode?: boolean;
  recordedOn?: number;
  onClose: () => void;
}

const IMRecordingPlayerBottomsheet: React.FC<IRecordingPlayerBottomsheetProps> = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const { t } = useTranslation('common');

  const downloadAudio = () => {
    const formattedName = _.camelCase(props.primaryText?.replace(/\s+/g, ''));
    downloadFileFromUrl(props.recordingUrl, `photonAudio_${formattedName}_${props.secondaryText}`, 'mp3');
  }

  return (
    <IMBottomSheet
      id={`recording-player-bottomsheet-${props.title}`}
      open={props.isOpen}
      enableBackDropDismiss
      title={props.title}
      onClose={props.onClose}
    >
      <View style={styles.customerInfoContainer}>
        <View>
          <Text style={styles.customerName}>{props.primaryText || '-'}</Text>
          <Text style={styles.customerNumber}>{props.secondaryText || '-'}</Text>
          {props.recordedOn && <Text style={styles.additionalInfo}>{`${t('recordedOn')} ${convertToDateString(props.recordedOn, 'MMMM DD, YYYY at h:mm A')}`}</Text>}
        </View>
        <IMIcon 
          testId={'download-recording-icon'} 
          iconSvg={<DownloadFilled />} 
          size='large'
          onClick={downloadAudio}
        />
      </View>
      <IMMediaPlayer
        testId={`audio-player-${props.title}`}
        url={props.recordingUrl}
        repeat={props.repeatMode}
        mode={MediaPlayerMode.Audio}
      />
    </IMBottomSheet>
  );
};

export default IMRecordingPlayerBottomsheet;
