import { AiOutlineDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { deletePostAction } from "../redux/actions/post";

export default function HomeCard({ post }: any) {
  const dispatch = useDispatch();

  const deletePost = (id: any) => {
    const confirmDelete = window.confirm("Silmek istediğinize emin misiniz?");
    if (confirmDelete) {
      dispatch(deletePostAction(id));
    }
  };

  const updatePost = (id: any) => {
    dispatch({ type: "MODAL", payload: { open: true, uptadeId: id } });
  };

  const formattedDate = post?.date?.substring(0, 10) || "";

  return (
    <div className="relative w-1/4 border p-3 rounded-md bg-gray-50 mx-5 shadow-md">
      <div className="font-bold text-xl">{post?.title}</div>
      <div className="text-gray-700 text-sm mt-2">{post?.description}</div>
      <div className="flex items-center justify-between mt-4">
        <span className="text-sm text-gray-500">{post?.user}</span>
        <span className="text-sm text-gray-500">{formattedDate}</span>
      </div>
      <div className="absolute -top-3 -right-3 flex items-center space-x-2">
        <GrUpdate
          onClick={() => updatePost(post._id)}
          size={24}
          className="text-gray-500 cursor-pointer hover:text-gray-700"
        />
        <AiOutlineDelete
          onClick={() => deletePost(post._id)}
          size={24}
          className="text-red-500 cursor-pointer hover:text-red-700"
        />
      </div>
    </div>
  );
}
