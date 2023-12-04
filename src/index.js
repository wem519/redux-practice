import React from "react";
import ReactDOM from "react-dom/client";
import FriendMain from "./friend/container/FriendMain";
import TimelineMain from "./timeline/container/TimelineMain";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <FriendMain />
    <TimelineMain />
  </div>
);
