import React from "react";
import TimeLineList from "../component/TimelineList";
import { addTimeline } from "../state";
import { getNextTimeLine } from "../../common/mockData";
import { useDispatch, useSelector } from "react-redux";

const TimelineMain = () => {
  const timelines = useSelector((state) => state.timeline.timelines);
  const dispatch = useDispatch();

  const onAdd = () => {
    const timeline = getNextTimeLine();
    dispatch(addTimeline(timeline));
  };
  console.log("TimelineMain render");

  return (
    <div>
      <button onClick={onAdd}>타임라인 추가</button>
      <TimeLineList timelines={timelines} />
    </div>
  );
};
export default TimelineMain;
