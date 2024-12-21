import { ActionsObservable, StateObservable } from "redux-observable";
import { of, defer } from "rxjs";
import { filter, map, catchError, mergeMap } from "rxjs/operators";
import { isOfType } from "typesafe-actions";
import { ActionTypes } from "../../../utils/constants";
import { rootState } from "../../../redux/store/rootState";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { securityApprovalService } from "../service/securityApprovalService";
import { fetchSecurityApprovalDataFailure, fetchSecurityApprovaleDataSuccess } from "../action/securityAprovalsAction";

const fetchSecurityApprovalDataEpic = (
  action$: ActionsObservable<any>,
  state$: StateObservable<rootState>
) =>
  action$.pipe(
    filter(isOfType(ActionTypes.FETCH_SECURITY_APPROVAL)),
    mergeMap((action:any) =>
      defer(async () => {
        // flatId from AsyncStorage
        console.log(`flat Id from the action in the Epic is: => ${action.flatId}`);
        const flatId = await AsyncStorage.getItem("flatId");

        console.log(`flatId in Epic From Async Storage is: ${flatId}`);

        // if (!flatId) {
        //   throw new Error("Missing flatId");
        // }

        console.log(`After null check of flat Id`);

        // API call
        const response = await securityApprovalService(1);

        console.log(
          `Security Approval Service Response: ${JSON.stringify(response.data)}`
        );

        const approvalList = response.data.data;

        return fetchSecurityApprovaleDataSuccess({ data: approvalList });
      }).pipe(
        map((successAction: any) => successAction),
        catchError((error: any) =>
          of(
            fetchSecurityApprovalDataFailure({
              error: error.message || "Failed to fetch data!",
            })
          )
        )
      )
    )
  );

export default fetchSecurityApprovalDataEpic;

