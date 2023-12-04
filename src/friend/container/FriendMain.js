import React, { useEffect, useReducer } from "react";
import store from "../../common/store";
import { addFriend } from "../state";
import FriendList from "../component/FriendList";
import { getNextFriend } from "../../common/mockData";

const FriendMain = () => {
  const [, forceUpdate] = useReducer((v) => v + 1, 0);

  /**
   * forceUpdate는 컴포넌트를 재렌더링하기 위해 사용. store에 직접적 변화 X
   */
  useEffect(() => {
    let prevFriends = store.getState().friend.friends;
    const unsubscribe = store.subscribe(() => {
      const friends = store.getState().friend.friends;
      if (prevFriends !== friends) {
        forceUpdate();
      }
      prevFriends = friends;
    });
    return () => unsubscribe();
  }, []);

  const onAdd = () => {
    const friend = getNextFriend();
    store.dispatch(addFriend(friend));
  };
  console.log("FriendMain render");
  const friends = store.getState().friend.friends;

  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <FriendList friends={friends} />
    </div>
  );
};
export default FriendMain;
