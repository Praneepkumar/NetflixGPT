import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";

import Body from "./Body";
import Browse from "./browse-components/Browse";
import GPTSearch from "./GPT-components/GPTSearch";

const App = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browse", element: <Browse /> },
    { path: "/browse/gpt-search", element: <GPTSearch /> },
  ]);

  return (
    <RouterProvider router={appRouter}>
      <Body />
    </RouterProvider>
  );
};
export default App;
