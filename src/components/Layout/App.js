import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import appStore from "../../utils/redux/appStore";
import Header from "./Header";

const App = () => {
  return (
    <Provider store={appStore}>
      <Header />
      <Outlet />
    </Provider>
  );
};
export default App;
