import { ActionsObservable, StateObservable } from "redux-observable";
import { of, from } from "rxjs";
import { filter, map, catchError, mergeMap } from "rxjs/operators";
import { isOfType } from "typesafe-actions";
import { ActionTypes, AuthActionTypes } from "../../../utils/constants";
import axios from "../../../utils/axios";
import { fetchHomeProfileData, fetchHomeProfileDataSuccess, fetchHomeProfileDataFailure, fetchHomeProfileDataAction } from "../action/homeProfileAction";
import { rootState } from "../../../redux/store/rootState";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { homeProfileService } from "../service/homeProfileService";

// const fetchHomeProfileDataEpic = (action$: ActionsObservable<any>, state$: StateObservable<rootState>) =>
//     action$.pipe(
//       filter(isOfType(ActionTypes.FETCH_HOME_PROFILE_DATA)),
//       mergeMap(() => {
//         try {
//           // fetch token and societyId from AsyncStorage
//           const token = await AsyncStorage.getItem('token');
//           const societyId = await AsyncStorage.getItem('societyId');
  
//           if (!token || !societyId) {
//             throw new Error("Missing token or societyId");
//           }

//           return from(
//             homeProfileService(
//               action.societyId,
//               action.token,
//             ),
//           ).pipe(
//             map((response) => {
//               console.log('homeProfile data fetched successfully :)');
//               return fetchHomeProfileDataSuccess()

//           }))
  
//           // Set up the headers
//           // const headers = {
//           //   Authorization: `Bearer ${token}`,
//           // };
  
//           // Perform the API call with the token
//           // const response = await axios.get(
//           //   `https://backend-dev.habitatautomations.com/pmsSocietyMapping/bySociety?societyId=${societyId}`,
//           //   { headers }
//           // );
  
//           // const transformedData = response.data.map((item: any) => ({
//           //   ...item,
//           // }));
  
//           // return fetchHomeProfileDataSuccess(transformedData);
//         } catch (error: any) {
//           console.error("Error fetching Home Profile data: ", error);
//           return fetchHomeProfileDataFailure({ error: error.message || "Failed to fetch data" });
//         }
//       })
//     );

const fetchHomeProfileDataEpic = (action$: ActionsObservable<any>, state$: StateObservable<rootState>) =>
  action$.pipe(
      filter(isOfType(ActionTypes.FETCH_HOME_PROFILE_DATA)),
      mergeMap(() =>
          from(
              AsyncStorage.multiGet(["token", "societyId"]).then(([tokenPair, societyIdPair]) => {
                  const token = tokenPair[1];
                  const societyId = societyIdPair[1];
                  if (!token || !societyId) {
                      throw new Error("Missing token or societyId");
                  }
                  return homeProfileService(Number(societyId), token);
              })
          ).pipe(
              map((response: { data: any; }) => fetchHomeProfileDataSuccess(response.data)),
              catchError((error: { message: any; }) =>
                  of(fetchHomeProfileDataFailure({ error: error.message || "Failed to fetch data" }))
              )
          )
      )
  );
  
  export default fetchHomeProfileDataEpic;
function from(arg0: Promise<import("Axios/index.cjs").AxiosResponse<any, any>>) {
  throw new Error("Function not implemented.");
}

