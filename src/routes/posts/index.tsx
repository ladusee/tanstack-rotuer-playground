import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { PostsList } from "../../pages/posts/list";
import { getPostList } from "../../queries/posts";

const postsSerchSchema = z.object({
  _page: z.number().positive().optional().catch(1),
  _limit: z.number().positive().optional().catch(5),
});

export type PostsSearch = z.infer<typeof postsSerchSchema>;

export const Route = createFileRoute("/posts/")({
  validateSearch: postsSerchSchema,
  beforeLoad: ({ search }) => {
    console.log("beforeLoad", search);
  },
  loaderDeps: ({ search: { _page, _limit } }) => ({ _page, _limit }),
  loader: ({ deps }) => getPostList(deps),
  component: PostsList,
});
