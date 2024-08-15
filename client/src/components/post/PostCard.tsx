import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "../ui/Button";
import StackBar from "./StackBar";
import type { IPost } from "../../supabase/supabaseClient";

interface Props {
  post?: IPost;
}

const PostCard = ({ post }: Props) => {
  return (
    <div className="flex flex-col gap-2 border-solid border-2 p-4 border-gray-300 rounded-lg">
      <h3 className="text-xl font-bold">{post?.title}</h3>
      <p className="truncate-text">{post?.content}</p>
      <p className="text-gray-500">{post?.created_date}</p>
      <div className="flex justify-between items-center">
        <StackBar stacks={post?.stacks} />
        <div className="flex justify-end gap-2">
          <Button icon="🎉">
            <Icon
              icon="mingcute:large-arrow-up-line"
              className="w-5 h-5 mr-2"
            />
            <span>{post?.upvote_count}</span>
          </Button>
          <Button icon="😡" color="bg-red-500" hoverColor="hover:bg-red-700">
            <Icon
              icon="mingcute:large-arrow-down-line"
              className="w-5 h-5 mr-2"
            />
            <span>{post?.downvote_count}</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default PostCard;
