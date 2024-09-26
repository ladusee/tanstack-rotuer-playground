import { createRoot } from "react-dom/client";
import { App } from "./app.tsx";
import "./index.css";
import { Providers } from "./providers.tsx";

const jsx = (
  <Providers>
    <App />
  </Providers>
);

createRoot(document.getElementById("root")!).render(jsx);
