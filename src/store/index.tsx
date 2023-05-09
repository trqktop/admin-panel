import { createContext, useCallback, useEffect, useState } from "react";
import { initialState } from "../constants";
import {
  getCollections,
  deleteItemFromCollection,
  updateItemFromCollection,
} from "../data";
const Context = createContext(initialState);

const StoreContext = ({ children }: any) => {
  const [state, setState] = useState(initialState);

  const setDataToState = useCallback((collection: any) => {
    Object.entries(collection).forEach(([key, value], index) => {
      setState((p) => ({
        ...p,
        events: {
          ...p.events,
          success: true,
        },
        store: {
          ...p.store,
          [key]: {
            ctxId: ++index,
            data: value,
            events: {
              loading: false,
              success: true,
              error: false,
            },
          },
        },
      }));
    });
  }, []);

  const deleteItem = useCallback(
    (tabContext: any, record: any) => {
      const collection = deleteItemFromCollection(tabContext, record.id);
      setDataToState(collection);
    },
    [setDataToState]
  );

  const updateItem = useCallback(
    (tabContext: any, record: any) => {
      const collection = updateItemFromCollection(tabContext, record);
      setDataToState(collection);
    },
    [setDataToState]
  );

  useEffect(() => {
    const collection = getCollections();
    setDataToState(collection)
  }, [setDataToState]);

  useEffect(() => {
    if (state.events.success) {
      setState((p: any) => ({
        ...p,
        requestHandlers: { deleteItem, updateItem },
      }));
    }
  }, [state.events.success, deleteItem, updateItem]);

  return <Context.Provider value={state}>{children}</Context.Provider>;
};
export { Context };
export default StoreContext;
