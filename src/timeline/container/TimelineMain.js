import React, { useEffect, useReducer } from "react";
import store from "../../common/store";
import TimeLineList from "../component/TimelineList";
import { addTimeline } from "../state";
import { getNextTimeLine } from "../../common/mockData";

const TimelineMain = () => {
  const [, forceUpdate] = useReducer((v) => v + 1, 0);

  useEffect(() => {
    let prevTimelines = store.getState().timeline.timelines;
    const unsubscribe = store.subscribe(() => {
      let timelines = store.getState().timeline.timelines;
      if (prevTimelines !== timelines) {
        forceUpdate();
      }
      prevTimelines = timelines;
    });
    return () => unsubscribe();
  }, []);

  const onAdd = () => {
    const timeline = getNextTimeLine();
    store.dispatch(addTimeline(timeline));
  };
  console.log("TimelineMain render");
  const timelines = store.getState().timeline.timelines;

  return (
    <div>
      <button onClick={onAdd}>타임라인 추가</button>
      <TimeLineList timelines={timelines} />
    </div>
  );
};
export default TimelineMain;
