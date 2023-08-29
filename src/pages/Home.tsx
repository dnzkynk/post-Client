import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPostsAction } from "../redux/actions/post";
import Navbar from "../components/Navbar";
import HomeCard from "../components/HomeCard";

const Home = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state: any) => state.posts);
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleSearch = (searchQuery: any) => {
    if (!searchQuery) {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter((post: any) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredPosts(filtered);
    }
  };

  useEffect(() => {
    dispatch(getPostsAction());
  }, [dispatch]);

  useEffect(() => {
    setFilteredPosts(posts);
  }, [posts]);

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <div className="flex flex-wrap">
        {filteredPosts.map((post: any, i: any) => (
          <HomeCard key={i} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
