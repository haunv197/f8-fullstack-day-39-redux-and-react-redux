import { createStore } from "../libs/redux";
import reducer from "./reducer";

const preloadedState = JSON.parse(localStorage.getItem("todos")) || undefined;

const store = createStore(reducer, preloadedState);

export default store;
