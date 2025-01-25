import { ActionsObservable, StateObservable } from "redux-observable";
import { of, from, defer } from "rxjs";
import { filter, map, catchError, mergeMap } from "rxjs/operators";
import { isOfType } from "typesafe-actions";
import { ActionTypes } from "../../../utils/constants";
import { rootState } from "../../../redux/store/rootState";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { announcementService } from "../service/announcementService";
import { fetchAnnouncementDataFailure, fetchAnnouncementDataSuccess } from "../action/announcementAction";

const fetchAnnouncementsEpic = (
  action$: ActionsObservable<any>,
  state$: StateObservable<rootState>
) =>
  action$.pipe(
    filter(isOfType(ActionTypes.FETCH_ANNOUNCEMENT_DATA)),
    mergeMap(() =>
      defer(async () => {
        // Fetch token and societyId from AsyncStorage
        // const token = await AsyncStorage.getItem("token");
        const societyId = await AsyncStorage.getItem("societyId");

        if (!societyId) {
          throw new Error("Missing societyId");
        }

        // API call
        const response = await announcementService(Number(societyId));

        console.log('####################################################');
        console.log(
          `announcement Service Response: ${JSON.stringify(response.data)}`
        );
        console.log('####################################################')

        const serviceList = response.data.data;

        // Save login state in AsyncStorage
        await AsyncStorage.setItem("isLoggedIn", "true");

        return fetchAnnouncementDataSuccess({ data: serviceList });
      }).pipe(
        map((successAction) => successAction),
        catchError((error) =>
          of(
            fetchAnnouncementDataFailure({
              error: error.message || "Failed to fetch data!",
            })
          )
        )
      )
    )
  );

export default fetchAnnouncementsEpic;

