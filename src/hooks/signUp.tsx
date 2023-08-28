import { useState } from "react";

const useSignUpState = () => {
  const [signUp, setSignUp] = useState(true);

  return { signUp, setSignUp };
};

export default useSignUpState;
