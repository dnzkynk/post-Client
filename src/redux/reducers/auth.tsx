interface AuthState {
  auth: any;
}

interface AuthAction {
  type: string;
  payload: any;
}

const authReducer = (state: AuthState = { auth: null }, action: AuthAction) => {
  switch (action.type) {
    case "REGISTER":
      localStorage.setItem("auth", JSON.stringify(action.payload));
      return {
        ...state,
        auth: action.payload,
      };
    case "LOGIN":
      localStorage.setItem("auth", JSON.stringify(action.payload));
      return {
        ...state,
        auth: action.payload,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        auth: null,
      };
    default:
      return state;
  }
};

export default authReducer;
