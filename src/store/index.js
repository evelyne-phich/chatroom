import { createStore } from "redux";

import reducer from "./reducer";

const store = createStore(
  reducer,
  // eslint-disable-next-line
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
