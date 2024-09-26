import { useQuery } from "@tanstack/react-query";
import ky from "ky";
import { Post } from "../types/posts";

const API = "https://jsonplaceholder.typicode.com";

type ListParams = {
  _page?: number;
  _limit?: number;
};

export const getPostList = async (params?: ListParams) => {
  const { _page = 1, _limit = 5 } = params || {};

  const res = await ky.get<Post[]>(`${API}/posts`, {
    searchParams: {
      _page,
      _limit,
    },
  });
  const data = await res.json();
  return data;
};

export const useGetPostList = (params?: ListParams) => {
  const query = useQuery({
    queryKey: ["posts", { ...params }],
    queryFn: async () => await getPostList(params),
    meta: {
      errorMessage: "Failed to fetch posts",
      successMessage: "Posts fetched successfully",
    },
  });

  return query;
};

export const getPostItem = async (id: number) => {
  const res = await ky.get<Post>(`${API}/posts/${id}`);
  const data = await res.json();
  return data;
};

export const useGetPostItem = (id: number) => {
  const query = useQuery({
    queryKey: ["post", id],
    queryFn: async () => await getPostItem(id),
    meta: {
      errorMessage: "Failed to fetch post",
      successMessage: "Post fetched successfully",
    },
  });

  return query;
};
