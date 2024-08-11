import { DATA_POSTS } from "./data";
import PostCard from "./PostCard";

const LeaderBoard = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {DATA_POSTS.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};
export default LeaderBoard;
