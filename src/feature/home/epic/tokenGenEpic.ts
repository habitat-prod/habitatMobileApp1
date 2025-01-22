import { ActionsObservable, StateObservable } from "redux-observable";
import { filter, map, catchError, mergeMap } from "rxjs/operators";
import { isOfType } from "typesafe-actions";
import { ActionTypes } from "../../../utils/constants";
import { generateToken, generateTokenSuccess, generateTokenFailure } from "../action/tokenGenAction";
import { tokenService } from "../service/tokenGenService";
import { rootState } from "../../../redux/store/rootState";
import AsyncStorage from "@react-native-async-storage/async-storage";
import env  from "react-native-config";

const generateTokenEpic = (action$: ActionsObservable<any>, state$: StateObservable<rootState>) =>
  action$.pipe(
    filter(isOfType(ActionTypes.GENERATE_TOKEN)),
    mergeMap(async (action: any) => {
      try {
        console.log('inside generateTokenEpic');
        const phone = await AsyncStorage.getItem("phoneNumber");
        // const propertyId = await AsyncStorage.getItem("propertyId");
        const token = await AsyncStorage.getItem("token");

        // console.log(`phone is ${phone}`);
        // console.log(`token is: ${token}`);
        // console.log(`payload propertyId is: ${action.payload.propertyId}`);
        // console.log(`payload userType is: ${action.payload.userType}`);

        if (!phone || !action.payload.propertyId || !action.payload.userType || !token) {
            console.error('Missing required data!');
          throw new Error("Missing required data!");
        }

        // Service call
        const response = await tokenService(Number(phone), Number(action.payload.propertyId), action.payload.userType, token);

        // console.log("Token Service called with:", {
        //     phone: Number(phone),
        //     propertyId: Number(action.payload.propertyId),
        //     action: action.payload.userType,
        //     token,
        //   });

        // console.log(`the full response of tokenGen is: ${JSON.stringify(response)}`);

        console.log(`so, the old stored token was: ${token}`);


        // fetching newToken from response
        const newToken = response.data?.token;
        await AsyncStorage.setItem('token', newToken);

        const userName = response.data.userName;
        const flatNo = response.data.flatNo;
        const flatName = response.data.flatName;
        const buildingName = response.data.buildingName;
        const societyName = response.data.societyName;
        const societyAddress = response.data.societyAddress;

        await AsyncStorage.setItem(
          env.ENV + '|' +'userLoginData',
          JSON.stringify({
            userId: response.data.userId,
            userName: userName,
            authorisationToken: newToken,
          }),
        );
        const userId = response?.data?.userId;
        const flatId = response.data?.flatId;
        // const buildingId = response.data?.buildingId;
        const societyId = response.data?.societyId;
        const email = response?.data?.email;

        console.log(`email in tokenGenEpic: ${email}`);

        console.log(`societyId in TOKENGENEPIC is: => ${societyId}`);

        await AsyncStorage.setItem('societyId',`${societyId}`);
        await AsyncStorage.setItem('email', `${email}`);
        await AsyncStorage.setItem('userId',`${userId}`);
        await AsyncStorage.setItem('userName',userName);
        await AsyncStorage.setItem('flatId',`${flatId}`);
        await AsyncStorage.setItem('flatNo',`${flatNo}`);
        await AsyncStorage.setItem('flatName',flatName);
        // await AsyncStorage.setItem('buildingId',buildingId);
        await AsyncStorage.setItem('buildingName',buildingName);
        // await AsyncStorage.setItem('societyId',societyId);
        await AsyncStorage.setItem('societyName',societyName);
        await AsyncStorage.setItem('societyAddress',societyAddress);


        // console.log(`the new token is: ${JSON.stringify(newToken)}`);

        const newStoredToken = await AsyncStorage.getItem('token');

        console.log(`now the new stored token is: ${newStoredToken}`);

        if (!newToken) {
            console.error('token not found in response!');
          throw new Error("Token not found in response!");
        }

        return generateTokenSuccess({ 
            token: newToken, userName:userName, 
            flatNo:flatNo,flatName:flatName,
            buildingName:buildingName, societyId: societyId,
            societyName:societyName,societyAddress:societyAddress });
      } catch (error: any) {
        console.error("Token generation error:", error);
        return generateTokenFailure({ error: error.message || "Token generation failed" });
      }
    })
  );

export default generateTokenEpic;
