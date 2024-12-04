import { ActionsObservable, StateObservable } from "redux-observable";
import { of, from } from "rxjs";
import { filter, map, catchError, mergeMap } from "rxjs/operators";
import { isOfType } from "typesafe-actions";
import { ActionTypes, AuthActionTypes } from "../../../utils/constants";
import { fetchHomeProfileData, fetchHomeProfileDataSuccess, fetchHomeProfileDataFailure, fetchHomeProfileDataAction } from "../action/homeProfileAction";
import { rootState } from "../../../redux/store/rootState";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { homeProfileService } from "../service/homeProfileService";

const fetchHomeProfileDataEpic = (action$: ActionsObservable<any>, state$: StateObservable<rootState>) =>
    action$.pipe(
      filter(isOfType(ActionTypes.FETCH_HOME_PROFILE_DATA)),
      mergeMap( async () => {
        try {
          console.log('inside homeProfile epic epic epic DATA FROM action: ');
          // fetch token and societyId from AsyncStorage
          const token = await AsyncStorage.getItem('token');
          const societyId = await AsyncStorage.getItem('societyId');
  
          if (!token || !societyId) {
            console.error('Missing token or societyId')
            throw new Error("Missing token or societyId");
          }

          
          console.log('API calling in homeProfile epic epic epic')
          const response = await homeProfileService(Number(societyId),token);

          console.log(`response of pmsServices is: ${JSON.stringify(response.data)}`);

          const serviceList = response.data.data;
          const serviceList1 = response;
          const serviceList2 = response.data;
          console.log(`SERVICE1 INSIDE THE EPIC: = ${JSON.stringify(serviceList1)}`);
          console.log(`SERVICE2 INSIDE THE EPIC: = ${JSON.stringify(serviceList2)}`);

          console.log(`FULL SERVICE LIST INSIDE THE EPIC = ${JSON.stringify(serviceList)}`);

          await AsyncStorage.setItem('isLoggedIn', JSON.stringify(true));
          return fetchHomeProfileDataSuccess({data: serviceList});
        } catch (error: any) {
          console.error("Error fetching Home Profile data: ", error);
          return fetchHomeProfileDataFailure({ error: error.message || "Failed to fetch data" });
        }
      })
    );
  
  export default fetchHomeProfileDataEpic;
