import { ActionsObservable, StateObservable } from "redux-observable";
import { of, from, defer } from "rxjs";
import { filter, map, catchError, mergeMap } from "rxjs/operators";
import { isOfType } from "typesafe-actions";
import { ActionTypes } from "../../../utils/constants";
import {
  fetchHomeProfileDataSuccess,
  fetchHomeProfileDataFailure,
} from "../action/homeProfileAction";
import { rootState } from "../../../redux/store/rootState";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { homeProfileService } from "../service/homeProfileService";

const fetchHomeProfileDataEpic = (
  action$: ActionsObservable<any>,
  state$: StateObservable<rootState>
) =>
  action$.pipe(
    filter(isOfType(ActionTypes.FETCH_HOME_PROFILE_DATA)),
    mergeMap(() =>
      defer(async () => {
        // Fetch token and societyId from AsyncStorage
        const token = await AsyncStorage.getItem("token");
        const societyId = await AsyncStorage.getItem("societyId");

        if (!token || !societyId) {
          throw new Error("Missing token or societyId");
        }

        // API call
        const response = await homeProfileService(Number(societyId), token);

        console.log(
          `Home Profile Service Response: ${JSON.stringify(response.data)}`
        );

        const serviceList = response.data.data;

        // Save login state in AsyncStorage
        await AsyncStorage.setItem("isLoggedIn", "true");

        return fetchHomeProfileDataSuccess({ data: serviceList });
      }).pipe(
        map((successAction) => successAction),
        catchError((error) =>
          of(
            fetchHomeProfileDataFailure({
              error: error.message || "Failed to fetch data!",
            })
          )
        )
      )
    )
  );

export default fetchHomeProfileDataEpic;

