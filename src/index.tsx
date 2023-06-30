import "bootstrap/dist/css/bootstrap.min.css";

import MainApp from "./App";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./styles.css";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <MainApp />
  </StrictMode>
);
