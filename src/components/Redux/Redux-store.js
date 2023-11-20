import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./Profile-Reducer";
import dialogsReducer from "./Dialog-Reducer";
import sidebarReducer from "./Sidebar-Reducer";
import usersReducer from "./Users-Reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;