import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./components/Layout/App";
import "./index.css";
import { createRoot } from "react-dom/client";
import Login from "./components/Layout/Login";
import Browse from "./components/browse-components/Browse";
import GPTSearch from "./components/GPT-components/GPTSearch";

const appContainer = document.getElementById("root");
const root = createRoot(appContainer);
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/browse", element: <Browse /> },
      { path: "/browse/gpt-search", element: <GPTSearch /> },
    ],
  },
]);
root.render(
  <RouterProvider router={appRouter}>
    <App />
  </RouterProvider>,
);
