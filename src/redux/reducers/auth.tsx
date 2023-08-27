interface AuthState {
  auth: any; // Burada auth nesnesinin türünü belirtmelisiniz
}

interface AuthAction {
  type: string;
  payload: any; // Burada action.payload'ın türünü belirtmelisiniz
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
