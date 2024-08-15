// src/supabaseClient.ts
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export interface IFetchTopPostsParams {
  stacks?: string[]; // Changed to array
  categories?: string[]; // Changed to array
  title?: string;
  page?: number;
  limit?: number;
}

export interface IPost {
  id: string;
  title: string;
  content: string;
  total_score: number;
  stacks: string[];
  categories: string[];
  created_date: string;
  author_id: string;
  upvote_count: number;
  downvote_count: number;
}

export async function fetchTopPosts({
  stacks = [],
  categories = [],
  title,
  page = 1,
  limit = 10,
}: IFetchTopPostsParams): Promise<IPost[] | null> {
  const offset = (page - 1) * limit;

  // Convert filters to the required types
  const stacksFilter = stacks.length > 0 ? stacks : [];
  const categoriesFilter = categories.length > 0 ? categories : [];
  const titleFilter = title ? `%${title}%` : "";

  // Call the custom function using rpc
  const { data, error } = await supabase.rpc("fetch_top_posts", {
    stack_ids: stacksFilter,
    category_ids: categoriesFilter,
    title_filter: titleFilter,
    p_limit: limit,
    p_offset: offset,
  });

  if (error) {
    console.error("Error fetching top posts:", error);
    return null;
  }

  return data; // Typecast the data to match the IPost interface
}
