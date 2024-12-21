import axios from "../../../../src/utils/axios"

export const securityApprovalService = async(flatId: Number) =>{

    console.log('inside securityApprovalService :)');

    const response = await axios.get(`/io/flat/${flatId}`);

    console.log(`RESPONSE DATA OF SECURITY APPROVALS INSIDE SERVICE IS:=> ${JSON.stringify(response.data)}`);

    return response;

}
