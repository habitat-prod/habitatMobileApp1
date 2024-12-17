import { ActionsObservable, StateObservable } from "redux-observable";
import { of, from, defer } from "rxjs";
import { filter, map, catchError, mergeMap } from "rxjs/operators";
import { isOfType } from "typesafe-actions";
import { ActionTypes } from "../../../utils/constants";
import { rootState } from "../../../redux/store/rootState";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchMaintenanceDataFailure, fetchMaintenanceDataSuccess } from "../actions/maintenanceAction";
import { maintenanceService } from "../service/maintenanceService";

const fetchMaintenanceDataEpic = (
  action$: ActionsObservable<any>,
  state$: StateObservable<rootState>
) =>
  action$.pipe(
    filter(isOfType(ActionTypes.FETCH_MAINTENANCE_DATA)),
    mergeMap(() =>
      defer(async () => {
        // Fetch societyId from AsyncStorage
        const societyId = await AsyncStorage.getItem("societyId");

        console.log("societyId from AsyncStorage:", societyId);

        if (!societyId) {
          throw new Error("Missing societyId");
        }

        console.log(`input data is: ${societyId}`);

        const response = await maintenanceService(Number(societyId));

        console.log("Response received in epic:", response);


        console.log(
          `Maintenance Service Response: ${JSON.stringify(response.data)}`
        );

        const amenities = response?.data || [];

        return fetchMaintenanceDataSuccess(amenities);
      }).pipe(
        map((successAction) => successAction),
        catchError((error) => {
            console.error("Epic Error:", error);
         return of(
            fetchMaintenanceDataFailure({
              error: error.message || "Failed to fetch data!",
            })
          )
         })
      )
    )
 );

export default fetchMaintenanceDataEpic;

