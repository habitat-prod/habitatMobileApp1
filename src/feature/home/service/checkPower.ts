import axios from '../../../utils/axios';

export const fetchPower = async ({ societyId, userId }:{societyId:number, userId: Number}) => {
    try {
      // console.log(`societyId inside funtion: ${societyId}`);
      // const num = 1;
      const response = await axios.get(`/noticeBoard/checkAdmin?societyId=${userId}&userId=${societyId}`);
      console.log('Power fetched:', JSON.stringify(response.data, null, 2));
      return response.data;
    } catch (error) {
      console.error('Error fetching Power: ', error.message);
      throw error;
    }
  };