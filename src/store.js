import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./Reducer/index";


const middleware = applyMiddleware(thunk);
const Store = createStore(RootReducer, {}, compose(middleware));



const getStore = () => Store;
const getState = () => {
  return Store.getState();
};

export { Store,getStore };