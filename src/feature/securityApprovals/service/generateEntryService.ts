import axios from '../../../utils/axios';

export const GenerateEntryService = async (
    name:string,
    phone:string,
    arrival:string,
    vehicleType:string,
    numberPlate:string,
    peopleNumber:string,
    visitorType:string,
    visitingPurpose:string,
    flatId:string,
    s3Image:string,
    role:string,
) => {
  try {
    console.log('inside generateEntry service..')
        const response = await axios.post(`/io/pre-request`, {
            name: name,
            phone: phone,
            arrival: arrival,
            vehicleType: vehicleType,
            numberPlate: numberPlate,
            peopleNumber: peopleNumber,
            type: visitorType,
            visitingPurpose: visitingPurpose,
            flatId: Number(flatId),
            s3Path: s3Image,
            role:role
        },{
            headers: {
              'Content-Type': 'application/json', // passing it here too
            },
          });
          axios.interceptors.request.use((config) => {
            console.log('Final Request Headers:', config.headers);
            return config;
          });
          
        return response;
    } catch (error) {
        console.log("API error found: ", error);
        throw error;
    }
};