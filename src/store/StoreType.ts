import { TodoType } from "./todos/types";
export interface StoreType {
  todos: TodoType[];
}

export const getDefaultStoreType = (): StoreType => ({
  todos: []
});
