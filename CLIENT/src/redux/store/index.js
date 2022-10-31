import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducer";
import thunk from "redux-thunk";
import { logger } from "redux-logger";

const store = createStore(
  rootReducer,
<<<<<<< HEAD
  compose(applyMiddleware(thunk), applyMiddleware(logger))
=======
  compose(
    applyMiddleware(thunk),
    applyMiddleware(logger),
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
>>>>>>> eb8faee71b034e7746eba0e8c0537df43edc1a92
);

export default store;
