import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { HeaderLayout } from "../layouts/header";

export const Route = createRootRoute({
  component: () => (
    <>
      <TanStackRouterDevtools />
      <HeaderLayout />

      <Outlet />
    </>
  ),
});
