import { Reducer } from 'react';

import { StepperActions, StepperActionTypes } from './stepperAction';
import { IIMPageFooterProps } from '../IMPageFooter';

export interface IStepLabel {
  label: string;
  description?: string;
}

export interface IStepData {
  stepLabel: IStepLabel;
  data: any;
  footer?: IIMPageFooterProps;
}

export interface IStepperState {
  activeStep: number;
  stepData: Record<number, IStepData>;
}

export const initialStepperState: IStepperState = {
  activeStep: 0,
  stepData: {},
};

const stepperReducer: Reducer<IStepperState, StepperActions> = (
  state = initialStepperState,
  action: StepperActions,
): IStepperState => {
  switch (action.type) {
    case StepperActionTypes.SET_STEPPER:
      return { ...state, ...action.payload };

    case StepperActionTypes.UPDATE_STEPPER: {
      const { stepId, stepData } = action.payload;
      const { data, stepLabel, footer } = stepData;
      const currentStep = stepId ?? state.activeStep;
      const updatedStepData = {
        ...state.stepData,
        [currentStep]: {
          ...state.stepData[currentStep],
          ...(!!data && { data }),
          ...(!!stepLabel && { stepLabel }),
          ...(!!footer && { footer }),
        },
      };
      return { ...state, stepData: updatedStepData };
    }

    case StepperActionTypes.NEXT_STEP: {
      const updatedStepData = {
        ...state.stepData,
      } as Record<number, IStepData>;
      return {
        ...state,
        activeStep: state.activeStep < Object.keys(state.stepData).length - 1 ? state.activeStep + 1 : state.activeStep,
        stepData: updatedStepData,
      };
    }

    case StepperActionTypes.PREVIOUS_STEP: {
      const updatedStepData = {
        ...state.stepData,
      } as Record<number, IStepData>;
      return {
        ...state,
        activeStep: state.activeStep > 0 ? state.activeStep - 1 : state.activeStep,
        stepData: updatedStepData,
      };
    }

    case StepperActionTypes.SKIP_STEP: {
      const updatedStepData = {
        ...state.stepData,
      } as Record<number, IStepData>;
      return {
        ...state,
        activeStep: state.activeStep < Object.keys(state.stepData).length - 1 ? state.activeStep + 1 : state.activeStep,
        stepData: updatedStepData,
      };
    }

    case StepperActionTypes.RESET:
      return initialStepperState;

    default:
      return state;
  }
};

export default stepperReducer;
