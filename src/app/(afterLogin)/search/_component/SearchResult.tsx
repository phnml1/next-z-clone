"use client";

import Post from "@/app/(afterLogin)/_component/Post";
import { Post as IPost } from '@/model/Post';
import {getSearchResult} from "../_lib/getSearchResult";
import {useQuery} from "@tanstack/react-query";

type Props = {
  searchParams: { q: string, f?: string, pf?: string };
}
// cache time을 짧게해서 메모리에 저장된 검색결과 정리해주는게 좋음
export default function SearchResult({ searchParams}: Props) {
  const {data} = useQuery<IPost[], Object, IPost[], [_1: string, _2: string, Props['searchParams']]>({
    queryKey: ["posts", "search", searchParams],
    queryFn: getSearchResult,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000,
  });

  return data?.map((post) => (
    <Post key={post.postId} post={post} />
  ))
}