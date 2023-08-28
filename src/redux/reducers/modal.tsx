const modalReducer = (state: any = { modal: false }, action: any) => {
  switch (action.type) {
    case "MODAL":
      return {
        modal: action.payload,
      };

    default:
      return state;
  }
};

export default modalReducer;
