import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import friendReducer, { addFriend, removeFriend, editFriend } from "./friend/state";
import timelineReducer, {
  addTimeline,
  removeTimeline,
  editTimeline,
  increaseNextPage,
} from "./timeline/state";
import { combineReducers, legacy_createStore } from "redux";

const reducer = combineReducers({
  timeline: timelineReducer,
  friend: friendReducer,
});

// store 생성 구버전
const store = legacy_createStore(reducer);
store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
