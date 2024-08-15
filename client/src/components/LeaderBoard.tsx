import { useEffect, useState } from "react";
import { fetchTopPosts, type IPost } from "../supabase/supabaseClient";
import PostCard from "./post/PostCard";

const LeaderBoard = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await fetchTopPosts({
        stacks: [], // Example array values
        categories: [], // Example array values
        title: "", // Example title filter
        page,
      });
      setPosts(data ?? []);
    };

    fetchPosts();
  }, [page]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {/* <Button onClick={async () => await seedDatabase()}>seedDatabase</Button> */}
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};
export default LeaderBoard;
