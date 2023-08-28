import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPostsAction } from "../redux/actions/post";
import HomeCard from "../components/HomeCard";

const Home = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state: any) => state.posts);

  const [searchText, setSearchText] = useState("");

  const filteredPosts = posts.filter((post: any) =>
    post.title.toLowerCase().includes(searchText.toLowerCase())
  );

  useEffect(() => {
    dispatch(getPostsAction());
  }, [dispatch]);

  return (
    <div>
      <div className="flex justify-center my-5">
        <input
          type="text"
          placeholder="Search by title"
          className="px-3 py-2 border rounded-md outline-none focus:border-blue-400 transition-colors"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredPosts.map((post: any, i: any) => (
          <HomeCard key={i} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
