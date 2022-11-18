// import { createStore } from 'redux';
import { AnyAction, applyMiddleware, combineReducers,  legacy_createStore as createStore } from "redux";
import { usersReducer } from './reducers/usersReducer';
import { modalReducer } from './reducers/modalReducer';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { sortReducer } from "./reducers/sortReducer";

 const rootReducer = combineReducers({
     users: usersReducer,
     modal: modalReducer,
     sort:sortReducer
 })

//  export const store = configureStore({
//     reducer: {
//         users: usersReducer,
//         modal:modalReducer
//     }
//   })




// export type AppDispatch = typeof store.dispatch

export type AppDispatch = ThunkDispatch<RootState, any, AnyAction>; 
export type RootState = ReturnType<typeof store.getState>
export const store = createStore(rootReducer,applyMiddleware(thunk));

