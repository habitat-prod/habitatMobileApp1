import React, { ReactElement } from 'react';

import { useStepperContext } from '../StepperContext';

export interface IStepProps {
  stepNumber: number;
  component: ReactElement;
}

const Step: React.FunctionComponent<IStepProps> = (props) => {
  const { stepperState } = useStepperContext();

  return <>{stepperState.activeStep === props.stepNumber && props.component}</>;
};

export default Step;
