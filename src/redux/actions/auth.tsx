import axios from "axios";
import { toast } from "react-toastify";
import { Dispatch } from "redux";

interface AuthData {
  username: string;
  email: string;
  password: string;
}

interface AuthAction {
  type: string;
  payload: AuthData;
}

export const registerAction =
  (authData: AuthData): any =>
  async (dispatch: Dispatch<AuthAction>) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/register",
        authData
      );

      if (response.data.status === "OK") {
        dispatch({
          type: "REGISTER",
          payload: response.data,
        });
        toast("Hesabın oluşturuldu", {
          position: "top-right",
          autoClose: 5000,
        });
        window.location.href = "/";
      } else {
        console.log(response.data.message);
        toast(response.data.message, {
          position: "top-right",
          autoClose: 5000,
        });
      }
    } catch (err: any) {
      console.log(err.message);
      toast(err.message, {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };

export const loginAction =
  (authData: AuthData): any =>
  async (dispatch: Dispatch<AuthAction>) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        authData
      );

      if (response.data.status === "OK") {
        dispatch({
          type: "LOGIN",
          payload: response.data,
        });
        toast("Giriş başarılı", {
          position: "top-right",
          autoClose: 5000,
        });

        window.location.href = "/";
      } else {
        toast(response.data.message, {
          position: "top-right",
          autoClose: 5000,
        });
      }
    } catch (err: any) {
      console.log(err.message);
      toast(err.message, {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };
