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

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

store.dispatch(addTimeline({ id: 1, desc: "코딩은 즐거워" }));
store.dispatch(addTimeline({ id: 2, desc: "리덕스 좋아" }));
store.dispatch(increaseNextPage());
store.dispatch(editTimeline({ id: 2, desc: "리덕스 너무 좋아" }));
store.dispatch(removeTimeline({ id: 1, desc: "코딩은 즐거워" }));

store.dispatch(addFriend({ id: 1, name: "아이유" }));
store.dispatch(addFriend({ id: 2, name: "손나은" }));
store.dispatch(editFriend({ id: 1, name: "수지" }));
store.dispatch(removeFriend({ id: 1, name: "아이유" }));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
