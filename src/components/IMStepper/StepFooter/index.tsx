import React from 'react';

import IMPageFooter from '../../IMPageFooter';
import { useStepperContext } from '../StepperContext';

const StepFooter: React.FC = () => {
  const { stepperState } = useStepperContext();
  const { activeStep, stepData } = stepperState;
  const footerProps = stepData[activeStep]?.footer;

  return <>{!!footerProps && <IMPageFooter {...footerProps} keyboardVerticalOffset={60} />}</>;
};

export default StepFooter;
