import axios from "axios";
import { toast } from "react-toastify";
import { Dispatch } from "redux";

interface PostData {
  user: string;
  title: string;
  description: string;
}

interface PostAction {
  type: string;
  payload: PostData;
}

export const getPostsAction =
  (): any => async (dispatch: Dispatch<PostAction>) => {
    try {
      const { data } = await axios.get("http://localhost:3000/post/getPosts");

      if (data.status === "OK") {
        dispatch({
          type: "GET_POSTS",
          payload: data,
        });
      } else {
        console.log(data.message);
        toast(data.message, {
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

export const createPostAction =
  (postData: PostData): any =>
  async (dispatch: Dispatch<PostAction>) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/post/createPost",
        postData
      );

      if (response.data.status === "OK") {
        dispatch({
          type: "CREATE_POSTS",
          payload: response.data,
        });
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

export const updatePostAction =
  (id: any, postData: PostData): any =>
  async (dispatch: Dispatch<PostAction>) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/post/update/${id}`,
        postData
      );

      if (response.data.status === "OK") {
        dispatch({
          type: "UPDATE_POSTS",
          payload: response.data,
        });
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

export const deletePostAction =
  (id: any): any =>
  async (dispatch: Dispatch<PostAction>) => {
    try {
      await axios.delete(`http://localhost:3000/post/delete/${id}`);
      dispatch({
        type: "DELETE_POSTS",
        payload: id,
      });
    } catch (err: any) {
      console.log(err.message);
      toast(err.message, {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };
