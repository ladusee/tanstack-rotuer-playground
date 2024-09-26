import { Link, useLoaderData, useSearch } from "@tanstack/react-router";
import { FC } from "react";

const BUTTON_CLASS =
  "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 [&.disabled]:opacity-50 [&.disabled]:cursor-not-allowed [&.disabled]:pointer-events-none";

export const PostsList: FC = () => {
  const search = useSearch({ from: "/posts/" });
  const data = useLoaderData({ from: "/posts/" });
  console.log("data", data);

  // flags
  const isFirstPage = !search?._page || search?._page === 1;
  // flags - end

  return (
    <div className="flex flex-col gap-4">
      <h1>Posts List</h1>

      <div className="flex flex-row gap-3">
        <Link
          from="/posts"
          to="."
          search={(prev) => ({ ...prev, _page: prev?._page - 1 })}
          className={BUTTON_CLASS + " " + (isFirstPage ? "disabled" : "")}
          disabled={isFirstPage}
        >
          Prev page
        </Link>

        <span className="font-semibold px-4 py-2">
          Page: {search?._page || "1"}
        </span>

        <Link
          from="/posts"
          to="."
          search={(prev) => ({ ...prev, _page: prev?._page + 1 })}
          className={BUTTON_CLASS}
        >
          Next page
        </Link>
      </div>
    </div>
  );
};
