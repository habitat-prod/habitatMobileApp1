import axios from '../../../utils/axios';

export const addRessidentService = async (
    name:string,
    phone: string,
    email: string,
    s3Path: string,
    active: false,
    invitationFlatId: number,
    userPhone: number,
    desiredRole: string
) => {
  try {
    console.log('inside add Resident service..');
        const response = await axios.post(`/user/create?invitationFlatId=${invitationFlatId}&userPhone=${userPhone}&desiredRole=${desiredRole}`, {
            name:name,
            phone: phone,
            email: email,
            s3Path: s3Path,
            active: active
        });
        return response;
    } catch (error) {
        console.log("API error found: ", error);
        throw error;
    }
};


// export const addRessidentService = async (
//     name:string,
//     phone: string,
//     email: string,
//     s3Path: string,
//     active: false,
//     invitationFlatId: number,
//     userPhone: number,
//     desiredRole: string
// ) => {
//   const FormData = require('form-data');
//   let data = new FormData();
//   data.append(
//     'profile', JSON.stringify({ 
//         name:name,
//         phone: phone,
//         email: email,
//         active: false,
//         invitationFlatId: invitationFlatId,
//         userPhone: userPhone,
//         desiredRole: desiredRole
//     }),
//     'multipartFile',JSON.stringify({
//         s3Path: s3Path,
//     }),
//     { contentType: 'application/json' }
//   );

//   let config = {
//     method: 'post',
//     maxBodyLength: Infinity,
//     url: 'https://backend-dev.habitatautomations.com/io/pre-request',
//     headers: {
//     //   'Content-Type': 'multipart/form-data',
//       'Authorization': 'Bearer eyJhbGciOiJIUzM4NCJ9.eyJyb2xlIjoiT1dORVIiLCJzdWIiOiIyIiwiaWF0IjoxNzMzOTMyNTU1LCJleHAiOjE3MzY1MjQ1NTUsInNtYWxsRXhwaXJhdGlvbiI6MTczMzk2ODU1NTQ2NH0.byJXxDl2PbKjMZ7dBLLUFA7OQtB_m9VbJHhCMX8uOgshFGkF0WwG8D-B2zOViZU4',
//     },
//     data
//   };

//   await axios.request(config)
//     .then((response:any) => {
//       console.log(`JSON.stringify(response.data) from service is: ${JSON.stringify(response)}`);
//     })
//     .catch((error:any) => {
//       console.log(`error?.response from service is: ${JSON.stringify(error?.response)}`);
//     });
// }
