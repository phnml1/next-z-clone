// src\app\(afterLogin)\_component\PostRecommends.tsx
"use client";

import { useQuery } from "@tanstack/react-query";
import { getPostRecommends } from "../home/_lib/getPostRecommends";
import Post from "./Post";
import {Post as IPost} from '@/model/Post';
export default function PostRecommends() {
  const { data } = useQuery<IPost[]>({
    queryKey: ["posts", "recommends"],
    queryFn: getPostRecommends,
    staleTime: 60 * 1000, // fresh -> stale로 변환되는 시간(ms)
  });
  return data?.map((post) => {
    <Post key={post.postId} post={post} />;
  });
}