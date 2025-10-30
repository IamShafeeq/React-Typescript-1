

import Main from "./Main";
import { Provider } from "react-redux";
import store from "./Store1"; // your configured store

function App() {
  return (
  <Provider store={store}>
    <Main />
  </Provider>
);
}

export default App