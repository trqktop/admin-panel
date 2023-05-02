import { createContext, useEffect, useState } from "react";
import { initialState } from "../constants";
import { getCollections } from "../data";
const Context = createContext(initialState)


const StoreContext = ({ children }: any) => {
  const [state, setState] = useState(initialState)
  useEffect(() => {
    const collection = getCollections()
    Object.entries(collection).forEach(([key, value], index) => {
      setState((p) => ({
        ...p, store:
        {
          ...p.store,
          [key]: {
            ctxId: ++index,
            data: value,
            events: {
              loading: false,
              success: true,
              error: false
            }
          }
        }
      }))
    })
  }, [])

  return <Context.Provider value={state}>{children}</Context.Provider>;
}
export { Context }
export default StoreContext