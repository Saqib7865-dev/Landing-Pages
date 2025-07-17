import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ScrollContextProvider } from "./Providers/ScrollContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ScrollContextProvider>
      <App />
    </ScrollContextProvider>
  </StrictMode>
);
