import createReducer from "../common/createReducer";
import createItemLogic from "../common/createItemLogic";
import mergeReducers from "../common/mergeReducers";
// import { combineReducers } from "redux";

const { add, remove, edit, reducer: timelineReducer } = createItemLogic("timelines");

const INCREASE_NEXT_PAGE = "timeline/INCREASE_NEXT_PAGE";

export const addTimeline = add;
export const removeTimeline = remove;
export const editTimeline = edit;
export const increaseNextPage = () => ({ type: INCREASE_NEXT_PAGE });

const INITIAL_STATE = { nextPage: 0 };

const reducer = createReducer(INITIAL_STATE, {
  [INCREASE_NEXT_PAGE]: (state, action) => (state.nextPage += 1),
});

const reducers = [reducer, timelineReducer];

export default mergeReducers(reducers);
// export default combineReducers({
//   common: reducer,
//   timelines: timelineReducer,
// });
