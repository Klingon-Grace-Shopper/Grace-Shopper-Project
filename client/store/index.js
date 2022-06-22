import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./auth";
import bookReducer from "./Books";
import cartReducer from "./cart";
import userReducer from "./User";
import orderReducer from "./order";

const reducer = combineReducers({
  auth,
  book: bookReducer,
  cart: cartReducer,
  user: userReducer,
  order: orderReducer,
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth";
