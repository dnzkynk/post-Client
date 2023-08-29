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
    <div className="w-full md:w-1/4 p-3">
      <div className="border rounded-md bg-gray-50 shadow-md mb-10">
        <div className="font-bold text-xl p-3">{post?.title}</div>
        <div className="text-gray-700 text-sm p-3">{post?.description}</div>
        <div className="flex items-center justify-between p-3">
          <span className="text-sm text-gray-500">@{post?.user}</span>
          <span className="text-sm text-gray-500">{formattedDate}</span>
        </div>
        <div className="flex items-center justify-end p-3 space-x-2">
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
    </div>
  );
}
