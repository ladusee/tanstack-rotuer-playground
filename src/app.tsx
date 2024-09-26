import { MainLayout } from "./layouts/main";
import { AppRouter } from "./router";

function App() {
  return (
    <MainLayout>
      <AppRouter />
    </MainLayout>
  );
}

export { App };
