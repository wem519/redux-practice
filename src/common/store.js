import friendReducer from "../friend/state";
import timelineReducer from "../timeline/state";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({
  timeline: timelineReducer,
  friend: friendReducer,
});

// store 생성 구버전
// const store = legacy_createStore(reducer);

// store 생성 다른 버전
const store = configureStore({
  reducer: reducer,
});

export default store;
