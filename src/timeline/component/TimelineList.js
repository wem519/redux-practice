import React from "react";

const TimeLineList = ({ timelines }) => {
  return (
    <ul>
      {timelines.map((timeline) => (
        <li key={timeline.id}>{timeline.desc}</li>
      ))}
    </ul>
  );
};
export default TimeLineList;
