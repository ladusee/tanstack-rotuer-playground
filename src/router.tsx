// Import the generated route tree
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { FC } from "react";
import { routeTree } from "./routeTree.gen";

// Create a new router instance
const router = createRouter({
  //
  routeTree,
  defaultPendingComponent: () => <div>Loading...</div>,
  defaultPendingMinMs: 0,
  defaultPendingMs: 0,
  defaultGcTime: 0,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const AppRouter: FC = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export { AppRouter };
