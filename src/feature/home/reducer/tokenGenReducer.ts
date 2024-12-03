import { Reducer } from "redux";
import { TokenActions } from "../action/tokenAction";
import { ActionTypes } from "../../../utils/constants";

export interface TokenState {
  isLoading: boolean;
  token?: string;
  userName:string;
  flatNo:string;
  flatName:string;
  buildingName:string;
  societyName:string;
  societyAddress:string;
  error?: string;
}
    

const initialState: TokenState = {
    isLoading: false,
    token: undefined,
    error: undefined,
    userName: "Binod",
    flatNo: "420",
    flatName: "",
    buildingName: "Block-D",
    societyName: "NRI City",
    societyAddress: "Kanpur."
};


const tokenReducer: Reducer<TokenState, TokenActions> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GENERATE_TOKEN:
    console.log('Generate token action is called in reducer');
      return { ...state, isLoading: true, error: undefined };
    case ActionTypes.GENERATE_TOKEN_SUCCESS:
        console.log('GenerateTokenSucces is called in reducer :)');
      return { ...state, isLoading: false, token: action.payload.token, userName: action.payload.userName, flatNo: action.payload.flatNo, flatName: action.payload.flatName, buildingName: action.payload.buildingName, societyName:action.payload.societyName ,societyAddress: action.payload.societyAddress };
    case ActionTypes.GENERATE_TOKEN_FAILURE:
        console.log('Generate token failure is called in reducer :(');
      return { ...state, isLoading: false, error: action.payload.error };
    default:
      return state;
  }
};

export default tokenReducer;
