import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { StyleProp, TextStyle, View, ViewStyle } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

import IMButton from '../../../../../components/IMButton';
import { defaultOTPTimeout } from '../../../../../constants/strings';
import useStyles from './styles';

interface IMTimerProps {
  OnButtonClick: (val: number) => void;
  buttonText: string;
  onStateChange?: (val: TimerStates) => void;
  initialTimer?: number;
  resendTimer?: number;
  isDisabled?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  timerStyle?: StyleProp<ViewStyle | TextStyle>;
  testEventId?: string;
}
export enum TimerStates {
  running = 'running',
  stopped = 'stopped',
}
const IMTimer: FunctionComponent<IMTimerProps> = (props: IMTimerProps) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const timeInterval = useRef<ReturnType<typeof setInterval>>();

  const [resendCount, setResendCount] = useState<number>(1);
  const [timer, setTimer] = useState<number>(props.initialTimer ?? defaultOTPTimeout);

  const startTimer = (time: number) => {
    setTimer(time);
    timeInterval.current = setInterval(() => {
      setTimer((timer) => timer - 1000);
    }, 1000);
  };

  const clearTimeInterval = () => {
    if (timeInterval.current) {
      clearInterval(timeInterval.current);
    }
  };

  useEffect(() => {
    if (timer <= 1000) {
      setTimer(0);
      clearTimeInterval();
      props.onStateChange && props.onStateChange(TimerStates.stopped);
    }
  }, [timer]);

  useEffect(() => {
    props.onStateChange && props.onStateChange(TimerStates.running);
    startTimer(props.initialTimer ?? defaultOTPTimeout);
    return () => {
      clearTimeInterval();
    };
  }, []);

  const handleClick = () => {
    setResendCount((count) => count + 1);
    props.onStateChange && props.onStateChange(TimerStates.running);
    startTimer(props.resendTimer ?? props.initialTimer ?? defaultOTPTimeout);
    props.OnButtonClick(resendCount);
  };

  return (
    <View>
      {timer >= 1 && <Text style={props.timerStyle}>{`${timer / 1000} secs`}</Text>}
      {timer === 0 && (
        <IMButton
          id={props.testEventId ?? 'IMTimer-resend-OTP-Button'}
          title={props.buttonText}
          variant="text"
          disabled={props.isDisabled}
          onClick={handleClick}
          styles={{ title: styles.labelThreeTextStyle, container: { width: 'auto' } }}
        />
      )}
    </View>
  );
};

export default IMTimer;
