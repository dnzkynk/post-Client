import { ChangeEvent, useState } from "react";
import { loginAction, registerAction } from "../redux/actions/auth";
import { useDispatch } from "react-redux";
import useSignUpState from "../hooks/signUp";

export default function Auth() {
  const { signUp, setSignUp } = useSignUpState();
  const [authData, setAuthData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const authFunc = () => {
    if (signUp) {
      dispatch(registerAction(authData));
    } else {
      dispatch(loginAction(authData));
    }
  };

  const onChangeFunc = (e: ChangeEvent<HTMLInputElement>) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };
  console.log(authData);
  return (
    <div className="w-full h-screen bg-gray-100 flex items-center justify-center fixed top-0 right-0 bottom-0 left-0 z-50">
      <div className="w-1/3 bg-white p-6 rounded shadow-md">
        <h1 className="text-2xl text-indigo-600 font-semibold text-center mb-4">
          {signUp ? "Kayıt Ol" : "Giriş Yap"}
        </h1>
        <div className="flex flex-col space-y-4 my-6">
          {signUp && (
            <input
              value={authData.username}
              name="username"
              onChange={onChangeFunc}
              type="text"
              placeholder="Kullanıcı Adı"
              className="input-style"
            />
          )}
          <input
            value={authData.email}
            name="email"
            onChange={onChangeFunc}
            type="text"
            placeholder="E-posta"
            className="input-style"
          />
          <input
            value={authData.password}
            name="password"
            onChange={onChangeFunc}
            type="password"
            placeholder="Şifre"
            className="input-style"
          />
        </div>
        <div className="text-indigo-600 text-sm cursor-pointer mb-4 hover:underline text-center">
          {signUp ? (
            <span onClick={() => setSignUp(false)}>
              Zaten bir hesabın var mı?
            </span>
          ) : (
            <span onClick={() => setSignUp(true)}>Hesabın yok mu?</span>
          )}
        </div>
        <div
          onClick={authFunc}
          className="cursor-pointer w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300 text-center"
        >
          {signUp ? "Kayıt Ol" : "Giriş Yap"}
        </div>
      </div>
    </div>
  );
}
