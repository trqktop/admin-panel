export type BrandType = {
  id: number;
  name: string;
};

export type ProductType = {
  id: number;
  name: string;
  price: number;
  category_id: number;
  brand_id: number;
  description: string;
  image: string;
};

export type AdminType = {
  id: number;
  name: string;
  password: string;
  token: string;
};

export type CategoryType = {
  id: number;
  name: string;
  parent_id: null | number;
};
export type OrderProduct = {
  id: number;
  quantity: number;
  price: number;
};

export type OrderType = {
  id: number;
  products: OrderProduct[];
  summ: number;
};

export type CustomerType = {
  id: number;
  name: string;
  phone: string;
  address: string;
  order_id: number;
};

export type CollectionType = {
  brands: BrandType[];
  products: ProductType[];
  categories: CategoryType[];
  customers: CustomerType[];
  orders: OrderType[];
};
export type OrdersWithCustomers = {
  id: number;
  name: string;
  phone: string;
  address: string;
  orders: (ProductType | undefined)[] | undefined;
};
