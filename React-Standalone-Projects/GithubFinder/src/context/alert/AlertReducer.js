const alertReducer = (state, actions) => {
  switch (actions.type) {
    case "SET_ALERT":
      return actions.payload;
    case "REMOVE_ALERT":
      return null;
    default:
      return state;
  }
};

export default alertReducer;
