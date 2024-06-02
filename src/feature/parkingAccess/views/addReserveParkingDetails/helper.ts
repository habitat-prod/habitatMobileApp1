import * as Yup from 'yup';

export interface IAddReserveParkingDetails {
  name: string;
  flatNumber: string;
  parkingSpot: string;
  vehicleNumber: string;
}

export const addReserveParkingDetailsSchema = Yup.object({
  name: Yup.string().required('Name is required field'),
  flatNumber: Yup.string().required('Flat number is required field'),
  parkingSpot: Yup.string(),
  vehicleNumber: Yup.string().required('Vehicle number is required field'),
});
