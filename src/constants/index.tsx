const initialState = {
  events: {
    loading: true,
    error: false,
  },
  store: {
    products: {
      ctxId: 3,
      events: {
        loading: true,
        success: false,
        error: false,
      },
      data: null,
    },
    categories: {
      ctxId: 1,
      events: {
        loading: true,
        success: false,
        error: false,
      },
      data: null,
    },
    brands: {
      ctxId: 2,
      events: {
        loading: true,
        success: false,
        error: false,
      },
      data: null,
    },
  },
  requestHandlers: {},
};


export { initialState }