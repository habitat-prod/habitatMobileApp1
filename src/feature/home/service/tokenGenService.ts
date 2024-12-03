import axios from "../../../../src/utils/axios";


export const tokenService = (phone:Number,propertyId:Number, userType:String, token:String) =>{
    console.log('inside tokenSerice :)');
    const headers = {
        Authorization: `Bearer ${token.replace(/"/g, "")}`,
        "Content-Type": "application/json",
      };
      
      

    return axios.post(`https://backend-dev.habitatautomations.com/generateToken?userType=${userType}&phone=${phone}&propertyId=${propertyId}`,
        {},{headers}
    );

};