import { ActionsObservable, StateObservable } from "redux-observable";
import { of, from, defer } from "rxjs";
import { filter, map, catchError, mergeMap } from "rxjs/operators";
import { isOfType } from "typesafe-actions";
import { ActionTypes } from "../../../utils/constants";
import { rootState } from "../../../redux/store/rootState";
import { amenityProblemService } from "../service/amenityProblemService";
import { fetchAmenityProblemDataFailure, fetchAmenityProblemDataSuccess } from "../actions/amenityProblemAction";


const fetchAmenityProblemDataEpic = (
  action$: ActionsObservable<any>,
  state$: StateObservable<rootState>
) =>
  action$.pipe(
    filter(isOfType(ActionTypes.FETCH_Amenity_Problem_DATA)),
    mergeMap((action) =>
      defer(async() => {
        // Fetch amenityId from AsyncStorage from action

        // if (!amenityId) {
        //   throw new Error("Missing amenityId");
        // }
        console.log(`GETTING THE ID FROM THE AMENITY IS: ${action.amenityId}`);
        // API call
        const response = await amenityProblemService(action.amenityId);

        console.log(
          `AmenityProblem Service Response: ${JSON.stringify(response.data)}`
        );

        const problemList = response.data.data.map((item:any)=> ({
          id: item.id,
          problemName: item.problemName,
          amenityId: item.amenityId,
          active: item.active,
        }));

        return fetchAmenityProblemDataSuccess({ data: problemList });
      }).pipe(
        map((successAction) => successAction),
        catchError((error) =>
          of(
            fetchAmenityProblemDataFailure({
              error: error.message || "Failed to fetch data!",
            })
          )
        )
      )
    )
  );

export default fetchAmenityProblemDataEpic;

