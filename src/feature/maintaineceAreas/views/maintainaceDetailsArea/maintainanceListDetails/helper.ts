import * as Yup from 'yup';

import { IPickerOption } from '../../../../../components/IMPicker';

export interface IAddNewProjectForm {
  location: IPickerOption;
  locationOfTower: IPickerOption;
  locationOfFloor: IPickerOption;
  problem: IPickerOption;
  remarks: string;
}

const MaintainanceListDetailsValidationSchema = Yup.object().shape({
  location: Yup.object().shape({
    value: Yup.string(),
  }),
  locationOfTower: Yup.object().shape({
    value: Yup.string(),
  }),
  locationOfFloor: Yup.object().shape({
    value: Yup.string(),
  }),
  problem: Yup.object().shape({
    value: Yup.string().required('problem is required field'),
  }),
  remarks: Yup.string(),
});

export default MaintainanceListDetailsValidationSchema;
