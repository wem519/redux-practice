const mergeReducers = (reducers) => {
  return (state, action) => {
    if (!state) {
      return reducers.reduce((acc, r) => ({ ...acc, ...r(state, action) }), {});
    } else {
      //   console.log(state);
      let nextState = state;
      for (const r of reducers) {
        nextState = r(nextState, action);
      }
      return nextState;
    }
  };
};
export default mergeReducers;
