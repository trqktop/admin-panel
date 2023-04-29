export type DBProductType = {
  id: number;
  name: string;
  price: number;
  category_id: number;
  brand_id: number;
  description: string;
};

export type DBCategoryType = {
  id: number;
  name: string;
  parent_id: null | number;
  children: DBCategoryType[];
};

export type StoreCategoriesType = {
  events: {
    load: boolean;
    error: boolean;
  };
  data: Awaited<Promise<Array<DBCategoryType>>> | null;
};

export type StoreAllProductsType = {
  events: {
    load: boolean;
    error: boolean;
  };
  data: Awaited<Promise<Array<DBProductType>>> | null;
};

export type StoreBrandsType = {
  events: {
    load: boolean;
    error: boolean;
  };
  data: Awaited<Promise<Array<DBBrandsType>>> | null;
};

export type StoreType = {
  events: {
    loading: boolean;
    error: boolean;
  };
  store: {
    categories: StoreCategoriesType;
    brands: StoreBrandsType;
    allProducts: StoreAllProductsType;
  };
  requestHandlers: any;
};
export type DBBrandsType = {
  id: number;
  name: string;
};
