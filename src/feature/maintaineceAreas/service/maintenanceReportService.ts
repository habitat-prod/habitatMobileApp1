// import axios from '../../../utils/axios';

// export const maintenanceReportService = async (
//     status: boolean,
//     s3PathProblem: string,
//     societyId: number,
//     societyAmenityId: number,
//     problemId: number,
//     managerId: number,
//     staffId: number,
//     userId: number,
//     description: string
// ) => {
//     try {
//         console.log('inside verify service..')
//         const response = await axios.post(`/api/maintenance/register`, {
//             status: status,
//             s3PathProblem: s3PathProblem,
//             societyId: societyId,
//             societyAmenityId: societyAmenityId,
//             problemId: problemId,
//             managerId: managerId,
//             staffId: staffId,
//             userId: userId,
//             description: description
//         });
//         return response;
//     } catch (error) {
//         console.log("API error found: ", error);
//         throw error;
//     }
// };

import axios from "../../../utils/axios";

export const maintenanceReportService = async (
    status: boolean,
    s3PathProblem: string,
    societyId: number,
    societyAmenityId: number,
    problemId: number,
    managerId: number,
    staffId: number,
    userId: number,
    description: string
) => {
  const FormData = require('form-data');
  let data = new FormData();
  data.append(
    'maintenanceReport', JSON.stringify({
        status: status,
        s3PathProblem: s3PathProblem,
        societyId: societyId,
        societyAmenityId: societyAmenityId,
        problemId: problemId,
        managerId: managerId,
        staffId: staffId,
        userId: userId,
        description: description
     }),
    { contentType: 'application/json' }
  );

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: '/api/maintenance/register',
    headers: {
      'Content-Type': 'multipart/form-data',
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
