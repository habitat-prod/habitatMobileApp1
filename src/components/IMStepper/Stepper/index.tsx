import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { useTheme } from 'react-native-paper';

import { IStepProps } from '../Step';
import StepFooter from '../StepFooter';
import StepHeader, { IStepHeaderProps } from '../StepHeader';
import StepperProvider from '../StepperContext';
import { IStepData, IStepLabel } from '../stepperReducer';
import { useStyles } from './styles';

export interface IMStepperProps {
  testId: string;
  headerProps: IStepHeaderProps;
  stepLabels: IStepLabel[];
  children: ReactElement<IStepProps> | ReactElement<IStepProps>[];
  activeStep?: number;
}

const IMStepper: React.FunctionComponent<IMStepperProps> = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme);

  const stepData = {} as Record<number, IStepData>;

  props.stepLabels.forEach((stepLabel, index) => {
    stepData[index] = { stepLabel, data: {} };
  });

  const initialState = { activeStep: props.activeStep ?? 0, stepData };

  return (
    <View testID={props.testId} accessibilityLabel={props.testId} style={styles.stepperContainer}>
      <StepperProvider initialState={initialState}>
        <View style={styles.container}>
          <StepHeader {...props.headerProps} />
          {props.children}
        </View>
        <StepFooter />
      </StepperProvider>
    </View>
  );
};

export default React.memo(IMStepper);
