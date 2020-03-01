import { todosReducer } from "./todos/reducer";
import { StoreType, getDefaultStoreType } from "./StoreType";
import { Reducer, ReducerAction } from "react";

const rootReducer: Reducer<StoreType, ReducerAction<any>> = (
  state: StoreType = getDefaultStoreType(),
  action: any = {}
) => ({
  todos: todosReducer(state.todos, action)
});

export default rootReducer;
