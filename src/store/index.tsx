import { useState, createContext, useEffect, useMemo } from "react";
import fetch from "../server";
import { StoreType } from "../types";
import { OptionsType } from "../server";
const initialState: StoreType = {
  events: {
    loading: true,
    error: false,
  },
  store: {
    categories: {
      events: {
        load: false,
        error: false,
      },
      data: null,
    },
    brands: {
      events: {
        load: false,
        error: false,
      },
      data: null,
    },
    allProducts: {
      events: {
        load: false,
        error: false,
      },
      data: null,
    },
  },
  requestHandlers: {},
};

const Context = createContext(initialState);
type PropsTypes = {
  children: React.ReactNode;
};

const initialFetchList = {
  categories: "api/categories",
  brands: "api/brands",
  allProducts: "api/products",
};

const StoreContext = ({ children }: PropsTypes) => {
  const [state, setState] = useState(initialState);

  const updateDataState = (newData: any, key: string) => {
    setState((p: StoreType) => ({
      ...p,
      store: {
        ...p.store,
        [key]: {
          events: {
            load: false,
            error: false,
          },
          data: newData,
        },
      },
    }));
  };

  const requestHandlers = useMemo(
    () => ({
      async delete(data: any) {
        const options: OptionsType = {
          url: `api/${data.type}/${data.id}`,
          header: {
            "Content-Type": "application/json",
            method: "DELETE",
          },
          body: data,
        };
        const newData: any = await fetch(options);
        updateDataState(newData, data.type);
      },
      async update(data: any) {
        const options: OptionsType = {
          url: `api/${data.type}/${data.id}`,
          header: {
            "Content-Type": "application/json",
            method: "PUT",
          },
          body: data,
        };
        const newData: any = await fetch(options);
        console.log(newData)
        // updateDataState(newData, data.type);
      },
    }),
    []
  );

  useEffect(() => {
    setState((p) => ({ ...p, requestHandlers: requestHandlers }));
    const getData = async (url: string) => {
      return await fetch(url);
    };
    Object.entries(initialFetchList).forEach(([key, url]: any) => {
      getData(url).then((result) => {
        updateDataState(result, String(key));
      });
    });
  }, []);

  return <Context.Provider value={state}>{children}</Context.Provider>;
};
export { Context };
export default StoreContext;
