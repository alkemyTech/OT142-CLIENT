import { combineReducers } from "redux";
import membersReducer from "./membersReducer";

const reducers = combineReducers({
  members: membersReducer,
});

export default reducers;
