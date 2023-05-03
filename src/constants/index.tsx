const initialState = {
  events: {
    loading: true,
    success: false,
    error: false,
  },
  store: {
    products: {
      ctxId: 1,
      events: {
        loading: true,
        success: false,
        error: false,
      },
      data: null,
    },
    categories: {
      ctxId: 2,
      events: {
        loading: true,
        success: false,
        error: false,
      },
      data: null,
    },
    brands: {
      ctxId: 3,
      events: {
        loading: true,
        success: false,
        error: false,
      },
      data: null,
    },
  },
};

export { initialState };