import axios from "../../../../src/utils/axios"

export const amenityProblemService = async(amenityId: Number) =>{

    console.log('inside amenityProblemService :)');

    let res = await axios.get(`/amenityProblemsByAmenityId?amenityId=${Number(amenityId)}`);
    console.log(`===============>>> Response of AmenityProblems in service: ${JSON.stringify(res.data.data)}`);
    return res;
}
  