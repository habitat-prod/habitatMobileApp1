import React, { useRef, useState } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Video, { OnLoadData, OnProgressData } from 'react-native-video';
import { useTheme } from 'react-native-paper';

import useToggle from '../../customHooks/useToggle';
import IMSeekBar from './IMSeekBar';
import IMControlCenter from './ControlCenter';
import useStyles from './styles';

export enum MediaPlayerMode {
  Audio = 'audio',
  Video = 'video',
}

interface IMMediaPlayerStyles {
  container?: StyleProp<ViewStyle>;
  videoPlayer?: StyleProp<ViewStyle>;
}

interface IIMMediaPlayerProps {
  testId: string;
  url: string;
  mode: MediaPlayerMode;
  fullscreen?: boolean;
  repeat?: boolean;
  styles?: IMMediaPlayerStyles;
}

const IMMediaPlayer: React.FC<IIMMediaPlayerProps> = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPaused, toggleIsPaused] = useToggle(false);
  const [isLoading, toggleIsLoading] = useToggle(true);
  const videoRef = useRef<Video | null>(null);

  const handleLoad = (meta: OnLoadData) => {
    toggleIsLoading(false);
    setDuration(meta.duration);
  };

  const handleProgress = (progress: OnProgressData) => {
    setCurrentTime(progress.currentTime)
  };

  const handleSeek = (value: number) => {
    videoRef.current?.seek(value);
    setCurrentTime(value);
  };

  const handleOnReachEnd = () => {
    setCurrentTime(duration);
    toggleIsPaused();
  }

  const replayPreviousTen = () => {
    videoRef.current?.seek(currentTime >= 10 ? currentTime - 10 : 0);
    setCurrentTime(currentTime >= 10 ? currentTime - 10 : 0);
  };

  const fastForwardTen = () => {
    videoRef.current?.seek(currentTime + 10 < duration ? currentTime + 10 : 0);
    setCurrentTime(currentTime + 10 < duration ? currentTime + 10 : 0);
  };

  const handlePlayPauseButton = () => {
    if (currentTime === duration) {
      videoRef.current?.seek(0);
      setCurrentTime(0);
    }
    toggleIsPaused();
  };

  return (
    <View style={[styles.container, props.styles?.container]}>
      <Video
        fullscreen={props.fullscreen}
        paused={isPaused}
        ref={videoRef}
        repeat={props.repeat}
        resizeMode="cover"
        audioOnly={props.mode === MediaPlayerMode.Audio}
        source={{ uri: props.url }}
        onLoad={handleLoad}
        onProgress={handleProgress}
        onEnd={handleOnReachEnd}
        style={props.mode === MediaPlayerMode.Video ? [styles.videoPlayer, props.styles?.videoPlayer] : styles.audioPlayer}
      />
      <IMSeekBar
        id='media-player-seek-bar'
        currentTime={currentTime}
        totalDuration={duration}
        onSlideComplete={handleSeek}
      />
      <IMControlCenter 
        id='media-player-control-center'
        isPaused={isPaused} 
        isLoading={isLoading}
        togglePlayback={handlePlayPauseButton}
        replayPreviousTen={replayPreviousTen}
        fastForwardTen={fastForwardTen} />
    </View>
  );
};

export default IMMediaPlayer;
