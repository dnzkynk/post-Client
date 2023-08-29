import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { createPostAction, updatePostAction } from "../redux/actions/post";
import { toast } from "react-toastify";

export default function Modal() {
  const tokenString = localStorage.getItem("auth");
  const token = tokenString !== null ? JSON.parse(tokenString) : null;

  const [postData, setPostData] = useState({
    user: token?.user?.username || "",
    title: "",
    description: "",
  });
  const { modal } = useSelector((state: any) => state.modal);
  const dispatch = useDispatch();

  const onChangeFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const postCreate = () => {
    if (modal?.uptadeId) {
      dispatch(updatePostAction(modal.uptadeId, postData));
      window.location.reload();
    } else {
      dispatch(createPostAction(postData));
      toast("Post paylaşıldı", {
        position: "top-right",
        autoClose: 1000,
      });
    }
    dispatch({ type: "MODAL", payload: false });
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-opacity-50 bg-black z-50">
      <div className="w-2/3 max-w-lg bg-white rounded-md p-6">
        <div className="flex items-center justify-between cursor-pointer mb-4">
          <h1 className="text-2xl font-bold">
            {modal?.uptadeId ? "POST GüNCELLE" : "POST PAYLAŞ"}
          </h1>
          <AiOutlineClose
            size={25}
            onClick={() => dispatch({ type: "MODAL", payload: false })}
          />
        </div>

        <div className="flex flex-col space-y-4">
          <input
            value={token?.user.username}
            name="user"
            onChange={onChangeFunc}
            type="text"
            className="input-style bg-gray-200"
            placeholder="User"
            disabled
          />
          <input
            value={postData.title}
            name="title"
            onChange={onChangeFunc}
            type="text"
            className="input-style"
            placeholder="Title"
          />
          <input
            value={postData.description}
            name="description"
            onChange={onChangeFunc}
            type="text"
            className="input-style"
            placeholder="Description"
          />
        </div>
        <button
          onClick={postCreate}
          className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300 mt-4"
        >
          {modal?.uptadeId ? "Güncelle" : "Paylaş"}
        </button>
      </div>
    </div>
  );
}
