import React, { useCallback, useContext, useReducer } from 'react';

import { isEmpty } from 'lodash';
import {
  IUpdateStepData,
  IUpdateStepperActionData,
  StepperActions,
  nextStep,
  previousStep,
  reset,
  setStepper,
  updateStepper,
} from './stepperAction';
import stepperReducer, { IStepperState, initialStepperState } from './stepperReducer';

export interface IStepperContextType {
  stepperState: IStepperState;
  dispatch: React.Dispatch<StepperActions>;
}

const StepperContext = React.createContext<IStepperContextType>({} as IStepperContextType);

interface IStepperProviderProps {
  children: React.ReactNode;
  initialState: IStepperState;
}

const StepperProvider: React.FunctionComponent<IStepperProviderProps> = (props) => {
  const [stepperState, dispatch] = useReducer(stepperReducer, props.initialState);

  return <StepperContext.Provider value={{ stepperState, dispatch }}>{props.children}</StepperContext.Provider>;
};

export const useStepperContext = () => {
  return useContext(StepperContext);
};

export const useStepper = () => {
  const { stepperState, dispatch } = useStepperContext();

  const setter = useCallback((data: IStepperState) => dispatch(setStepper(data)), [dispatch]);

  const getter = useCallback(
    (stepNumber?: number) => (stepNumber !== undefined ? stepperState.stepData[stepNumber] : stepperState.stepData),
    [],
  );

  const updateStep = useCallback((data: IUpdateStepperActionData) => dispatch(updateStepper(data)), []);

  const proceedToNextStep = useCallback((data?: IUpdateStepData) => {
    !isEmpty(data) && dispatch(updateStepper({ stepData: data }));
    dispatch(nextStep());
  }, []);

  const goToPreviousStep = useCallback(() => dispatch(previousStep()), []);

  const resetStepper = useCallback(() => dispatch(reset()), []);

  return { setter, getter, updateStep, proceedToNextStep, goToPreviousStep, resetStepper, stepperState };
};

export default StepperProvider;
