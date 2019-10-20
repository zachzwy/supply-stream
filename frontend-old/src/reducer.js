const reducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_DELIVER_FROM_CHANGE":
      return {
        ...state,
        userInputs: {
          ...state.userInputs,
          from: action.payload
        }
      };
    case "HANDLE_DELIVER_TO_CHANGE":
      return {
        ...state,
        userInputs: {
          ...state.userInputs,
          to: action.payload
        }
      };
    default:
      return new Error();
  }
};

export default reducer;
