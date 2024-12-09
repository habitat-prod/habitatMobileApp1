import { ActionType, createAction } from 'typesafe-actions';
import { IIMPageFooterProps } from '../IMPageFooter';
import { IStepLabel, IStepperState } from './stepperReducer';

export enum StepperActionTypes {
  SET_STEPPER = 'SET_STEPPER',
  UPDATE_STEPPER = 'UPDATE_STEPPER',
  NEXT_STEP = 'NEXT_STEP',
  PREVIOUS_STEP = 'PREVIOUS_STEP',
  SKIP_STEP = 'SKIP_STEP',
  RESET = 'RESET',
}

export interface IUpdateStepData {
  stepLabel?: IStepLabel;
  data?: any;
  footer?: IIMPageFooterProps;
}

export interface IUpdateStepperActionData {
  stepId?: number;
  stepData: IUpdateStepData;
}

export const setStepper = createAction(StepperActionTypes.SET_STEPPER)<IStepperState>();
export const updateStepper = createAction(StepperActionTypes.UPDATE_STEPPER)<IUpdateStepperActionData>();
export const nextStep = createAction(StepperActionTypes.NEXT_STEP)();
export const previousStep = createAction(StepperActionTypes.PREVIOUS_STEP)();
export const skipStep = createAction(StepperActionTypes.SKIP_STEP)();
export const reset = createAction(StepperActionTypes.RESET)();

export type SetStepperAction = ActionType<typeof setStepper>;
type UpdateStepperAction = ActionType<typeof updateStepper>;
type NextStepAction = ActionType<typeof nextStep>;
type PreviousStepAction = ActionType<typeof previousStep>;
type SkipStepAction = ActionType<typeof skipStep>;
type ResetAction = ActionType<typeof reset>;

export type StepperActions =
  | SetStepperAction
  | UpdateStepperAction
  | NextStepAction
  | PreviousStepAction
  | SkipStepAction
  | ResetAction;
