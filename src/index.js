import { Provider } from "react-redux";
import App from "./components/App";
import "./index.css";
import { createRoot } from "react-dom/client";
import appStore from "./utils/redux/appStore";
const appContainer = document.getElementById("root");
const root = createRoot(appContainer);
root.render(
  <Provider store={appStore}>
    <App />
  </Provider>,
);
