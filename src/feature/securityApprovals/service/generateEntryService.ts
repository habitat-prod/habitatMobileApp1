// import axios from '../../../utils/axios';

// export const GenerateEntryService = async (
//     name:string,
//     phone:string,
//     arrival:string,
//     vehicleType:string,
//     numberPlate:string,
//     peopleNumber:string,
//     visitorType:string,
//     visitingPurpose:string,
//     flatId:string,
//     s3Image:string,
//     role:string,
// ) => {
//   try {
//     console.log('inside generateEntry service..');


//     let data = new FormData();
//     data.append('{"role": "GUEST",\n"type": "maid",\n"flatId":2\n}', 
//         {contentType: 'application/json'}
//     );


//         const response = await axios.post(`/io/pre-request`, 
//         //     name: name,
//         //     phone: phone,
//         //     arrival: arrival,
//         //     vehicleType: vehicleType,
//         //     numberPlate: numberPlate,
//         //     peopleNumber: peopleNumber,
//         //     type: visitorType,
//         //     visitingPurpose: visitingPurpose,
//         //     flatId: Number(flatId),
//         //     s3Path: s3Image,
//         //     role:role
//         // },
//         // {
//             data
//           );
//           axios.interceptors.request.use((config) => {
//             console.log('Final Request Headers:', config.headers);
//             return config;
//           });
          
//         return response;
//     } catch (error) {
//         console.log("API error found: ", error);
//         throw error;
//     }
// };
// const axios = require('axios');
// import axios from "Axios";
import axios from "../../../../src/utils/axios";

// const GenerateEntryService = async () => {
//   let config = {
//     method: 'get',
//     url: 'https://backend-dev.habitatautomations.com/society/amenities?societyId=1',
//     headers: {
//       'Content-Type': 'application/json',
//     }
//   };

//   const response = await axios.request(config);
//   console.log(response?.data);
// }
// GenerateEntryService();

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
  const FormData = require('form-data');
  let data = new FormData();
  data.append(
    'request', JSON.stringify({ "role": "GUEST", "type": "maid", "flatId": 2 }),
    { contentType: 'application/json' }
  );

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://backend-dev.habitatautomations.com/io/pre-request',
    headers: {
    //   'Content-Type': 'multipart/form-data',
      'Authorization': 'Bearer eyJhbGciOiJIUzM4NCJ9.eyJyb2xlIjoiT1dORVIiLCJzdWIiOiIyIiwiaWF0IjoxNzMzOTMyNTU1LCJleHAiOjE3MzY1MjQ1NTUsInNtYWxsRXhwaXJhdGlvbiI6MTczMzk2ODU1NTQ2NH0.byJXxDl2PbKjMZ7dBLLUFA7OQtB_m9VbJHhCMX8uOgshFGkF0WwG8D-B2zOViZU4',
    },
    data
  };

  await axios.request(config)
    .then((response:any) => {
      console.log(`JSON.stringify(response.data) from service is: ${JSON.stringify(response)}`);
    })
    .catch((error:any) => {
      console.log(`error?.response from service is: ${JSON.stringify(error?.response)}`);
    });
}
