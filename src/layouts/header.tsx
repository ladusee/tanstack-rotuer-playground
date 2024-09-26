import { Link } from "@tanstack/react-router";
import { FC } from "react";

const LINK_CLASSES = "[&.active]:font-bold [&.active]:underline px-4 py-2";

export const HeaderLayout: FC = () => {
  return (
    <>
      <div className="flex gap-4">
        <Link to="/" className={LINK_CLASSES}>
          Home
        </Link>

        <Link to="/about" className={LINK_CLASSES}>
          About
        </Link>

        <Link to="/posts" className={LINK_CLASSES}>
          Posts
        </Link>
      </div>

      <hr className="my-5" />
    </>
  );
};
