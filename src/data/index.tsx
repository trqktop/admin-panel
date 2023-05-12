import collect from "collect.js";

import {
  BrandType,
  ProductType,
  AdminType,
  OrderType,
  CategoryType,
  CustomerType,
  CollectionType,
  OrdersWithCustomers,
} from "../types";
const collectJS = collect
const brands: BrandType[] = [
  {
    id: 1,
    name: "Nike",
  },
  {
    id: 2,
    name: "Adidas",
  },
  {
    id: 3,
    name: "Puma",
  },
];

const products: ProductType[] = [
  {
    id: 1,
    name: "Футболка Nike Dri-FIT Academy",
    price: 10,
    category_id: 3,
    brand_id: 1,
    description: `Отличная майка, подойдет для любых случаев жизни. Подари себе две и никогда не думай, что надеть на завтра!`,
    image: "https://basket-03.wb.ru/vol390/part39014/39014942/images/big/1.jpg",
  },
  {
    id: 2,
    name: "Футболка M CMO T GRESIX/WHITE",
    price: 10,
    category_id: 3,
    brand_id: 2,
    description: `Отличная майка, подойдет для любых случаев жизни. Подари себе две и никогда не думай, что надеть на завтра!`,
    image: "https://basket-03.wb.ru/vol303/part30300/30300816/images/big/4.jpg",
  },
  {
    id: 3,
    name: "Штаны PUMA x MR DOODLE",
    price: 20,
    category_id: 4,
    brand_id: 3,
    description: `Штаны, которые подчеркнут все прелести твоей фигуры. Почувствуй себя спортсменом и выиграй гонку до метро!`,
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/531019/01/bv/fnd/RUS/w/1000/h/1000/fmt/png",
  },
  {
    id: 4,
    name: "Брюки Adidas Originals",
    price: 30,
    category_id: 4,
    brand_id: 2,
    description: `Штаны, которые подчеркнут все прелести твоей фигуры. Почувствуй себя спортсменом и выиграй гонку до метро!`,
    image:
      "https://www.lookbuck.com/system/products/items/images/034/583/461/small/13552089UQ_12_F.JPG?1613649634",
  },
  {
    id: 5,
    name: "кеды COURT ROYALE",
    price: 40,
    category_id: 5,
    brand_id: 1,
    description: `Кеды, которые сделают тебя неповторимым. Носи их на свидание, на работу или на вечеринку - они всегда будут к месту!`,
    image:
      "https://avatars.mds.yandex.net/get-yabs_performance/1404991/2a000001827308c6c6f055b74ff955035c81/huge",
  },
  {
    id: 6,
    name: "Кеды adidas Originals SUPERSTAR",
    price: 40,
    category_id: 5,
    brand_id: 2,
    description: `Кеды, которые сделают тебя неповторимым. Носи их на свидание, на работу или на вечеринку - они всегда будут к месту!`,
    image:
      "https://avatars.mds.yandex.net/get-yabs_performance/1413559/2a000001835986ab8abbcbfc20f849f9466e/big",
  },
  {
    id: 7,
    name: "Кросовки спортиные",
    price: 610,
    category_id: 6,
    brand_id: 3,
    description: `Кроссовки, которые не дадут тебе устать. Беги, прыгай, двигайся - они всегда будут за тобой!`,
    image: "https://a.lmcdn.ru/img600x866/R/T/RTLAAX101501_15745291_1_v1.jpg",
  },
  {
    id: 8,
    name: "Кросовки спортиные без шнурков",
    price: 360,
    category_id: 6,
    brand_id: 1,
    description: `Кроссовки, которые не дадут тебе устать. Беги, прыгай, двигайся - они всегда будут за тобой!`,
    image: "https://a.lmcdn.ru/img600x866/R/T/RTLAAX101501_15745291_1_v1.jpg",
  },
  {
    id: 9,
    name: "Ботинки спортиные",
    price: 1610,
    category_id: 7,
    brand_id: 3,
    description: `Боинки, которые дадут тебе силы на целый день. С ними ты сможешь поднять любой груз и сделать это с улыбкой на лице!`,
    image: "https://a.lmcdn.ru/img600x866/R/T/RTLAAX101501_15745291_1_v1.jpg",
  },
  {
    id: 10,
    name: "Боинки красивые",
    price: 161,
    category_id: 7,
    brand_id: 2,
    description: `Боинки, которые дадут тебе силы на целый день. С ними ты сможешь поднять любой груз и сделать это с улыбкой на лице!`,
    image: "https://a.lmcdn.ru/img600x866/R/T/RTLAAX101501_15745291_1_v1.jpg",
  },
  {
    id: 11,
    name: "Боинки красивые",
    price: 161,
    category_id: 7,
    brand_id: 2,
    description: `Боинки, которые дадут тебе силы на целый день. С ними ты сможешь поднять любой груз и сделать это с улыбкой на лице!`,
    image: "https://a.lmcdn.ru/img600x866/R/T/RTLAAX101501_15745291_1_v1.jpg",
  },
];

let idCounter = products.length + 1;
for (let i = 0; i <= 4; i++) {
  products.forEach((item, index) => {
    const product = { ...item, id: idCounter };
    products.push(product);
    idCounter++;
  });
}

const admins: AdminType[] = [{ id: 1, name: "a", password: "a", token: "s" }];

const categories: CategoryType[] = [
  { id: 1, name: "Одежда", parent_id: null },
  { id: 2, name: "Обувь", parent_id: null },
  { id: 3, name: "Майки", parent_id: 1 },
  { id: 4, name: "Штаны", parent_id: 1 },
  { id: 5, name: "Кеды", parent_id: 2 },
  { id: 6, name: "Кросовки", parent_id: 2 },
  { id: 7, name: "Ботинки", parent_id: 2 },
];

function createCategoriesTree(categories: CategoryType[], parentId: number | null = null): any[] {
  const result: any[] = [];
  for (const category of categories.filter(category => category.parent_id === parentId)) {
    const children = createCategoriesTree(categories, category.id);
    const numberOfProducts = collect(products).where('category_id', '===', category.id).toArray().length
    if (children.length) {
      result.push({ id: category.id, name: category.name, children, products: numberOfProducts });
    } else {
      result.push({ id: category.id, name: category.name, products: numberOfProducts });
    }
  }
  return result;
}


const orders: OrderType[] = [
  {
    id: 1,
    products: [
      { id: 220, quantity: 4, price: 161 },
      { id: 220, quantity: 4, price: 161 },
    ],
    summ: 644,
  },
];

const customers: CustomerType[] = [
  {
    id: 1,
    name: "Олег",
    phone: "89299991232",
    address: "ул. Пушкина , д. Колотушкина",
    order_id: 1,
  },
];


interface JoinedProduct {
  id: number;
  name: string;
  price: number;
  description: string | null;
  image: string;
  brand: {
    id: number;
    name: string;
  };
  category: {
    id: number;
    name: string;
    parent_id: number | null;
  };
}


interface joinedBrands {
  id: number;
  name: string;
  products: number
}

export interface joinedCategories {
  id: number;
  name: string;
  children?: joinedCategories[];
  products: number
}


const collection = () => {
  const joinedProducts = (): JoinedProduct[] => {
    const findBrand = (id: number) => brands.find((item) => item.id === id)!
    const findCategory = (id: number) => categories.find((item) => item.id === id)!
    return products.map(({ id, name, price, description, image, brand_id, category_id }) => (
      {
        id,
        name,
        price,
        description,
        image,
        brand: findBrand(brand_id),
        category: findCategory(category_id)
      }
    ))
  }


  const joinedBrands = (): joinedBrands[] => {
    const result = brands.map((brand) => {
      const numberOfProducts = collect(products).where('brand_id', '===', brand.id).toArray().length
      return { ...brand, products: numberOfProducts }
    })
    return result
  }


  const joinedCategories = (): joinedCategories[] => {
    return createCategoriesTree(categories);
  }


  const filterCategoryProducts = (id: any) => {
    const findBrand = (id: number) => brands.find((item) => item.id === id)!
    const findCategory = (id: number) => categories.find((item) => item.id === id)!
    const filter: any = collect(products).where('category_id', '==', id).toArray()
    return filter.map(({ id, name, price, description, image, brand_id, category_id }: any) => (
      {
        id,
        name,
        price,
        description,
        image,
        brand: findBrand(brand_id),
        category: findCategory(category_id)
      }
    ))
  }


  return { joinedProducts, joinedBrands, joinedCategories, filterCategoryProducts }
}


// const getProduct = (id: number) => {
//   return products.find((item: any) => item.id === id);
// };

// const getOrdersWithCustomers = () => {
//   return customers.map(({ id, name, phone, address, order_id }) => ({
//     id,
//     name,
//     phone,
//     address,
//     orders: orders
//       .find((item) => item.id === order_id)
//       ?.products.map(({ id, quantity, price }: any) => ({
//         quantity,
//         price,
//         ...getProduct(id),
//       })),
//   }));
// };

// const getFragmentWithBrandAndCategory = (fragment: ProductType[]) => {
//   return fragment.map((item: any) => {
//     const brand: any = brands.find((brand) => brand.id === item.brand_id);
//     const category = categories.find(
//       (category: any) => category.id === item.category_id
//     );
//     const name = category ? category.name : "";
//     return { ...item, brandName: brand.name, categoryName: name };
//   });
// };












const SELECT = (
  ctx: string,
  LIMIT: number,
  OFFSET: any,
  currentCategory: any,
  data: any
) => {
  const collect = collection()
  const startIndex = OFFSET;
  const endIndex = OFFSET + LIMIT;
  switch (ctx) {
    case 'products':
      if (currentCategory) {
        const products = collect.filterCategoryProducts(currentCategory)
        const offsetProducts = products.slice(startIndex, endIndex)
        return { items: offsetProducts, length: products.length }
      }

      const products = collect.joinedProducts()
      const offsetProducts = products.slice(startIndex, endIndex)
      return { items: offsetProducts, length: products.length }
    case 'brands':
      const brands = collect.joinedBrands()
      return { items: brands, length: brands.length }
      // const products = collect.joinedProducts()
      // const offsetProducts = products.slice(startIndex, endIndex)
      // return { items: offsetProducts, length: products.length }
      break
    case 'categories':
      // const products = collect.joinedProducts()
      // const offsetProducts = products.slice(startIndex, endIndex)
      // return { items: offsetProducts, length: products.length }
      const categories = collect.joinedCategories()
      return { items: categories, length: categories.length }
  }

  // return collect.joinedProducts()

  // const startIndex = OFFSET;
  // const endIndex = OFFSET + LIMIT;
  // switch (ctx) {
  //   case "products":
  //     if (currentCategory) {
  //       const fragment: ProductType[] = collect(products)
  //         .where("category_id", "==", currentCategory)
  //         .toArray();
  //       return getFragmentWithBrandAndCategory(fragment);
  //     } else {
  //       const fragment = products.slice(startIndex, endIndex);
  //       return getFragmentWithBrandAndCategory(fragment);
  //     }
  //   case "orders":
  //     return getOrdersWithCustomers();
  //   case "brands":
  //     return brands;
  //   case "categories":
  //     return categories;
  //   case "count":
  //     if (currentCategory) {
  //       return collect(products)
  //         .where("category_id", "==", currentCategory)
  //         .toArray().length;
  //     }
  //     return products.length;
  //   case "login":
  //     const idx = collect(admins).search(
  //       ({ name, password }) =>
  //         data.username === name && password === data.password
  //     );
  //     if (idx > -1) {
  //       return admins[idx];
  //     }
  //     return "error";
  // }
};

const DELETE = (data: any) => {
  // switch (data.type) {
  //   case "brands":
  //     const idxBrands = brands.findIndex((item: any) => item.id === data.id);
  //     brands.splice(idxBrands, 1);
  //     break;
  //   case "categories":
  //     const idxCategories = categories.findIndex(
  //       (item: any) => item.id === data.id
  //     );
  //     categories.splice(idxCategories, 1);
  //     break;
  //   case "products":
  //     const idxProducts = products.findIndex(
  //       (item: any) => item.id === data.id
  //     );
  //     products.splice(idxProducts, 1);
  //     break;
  // }
};

const UPDATE = (data: any, id: any, type: any) => {
  // const elem = { ...data, id };
  // switch (type) {
  //   case "brands":
  //     const idxBrand = brands.findIndex((item: any) => item.id === id);
  //     const updatedBrand: any = brands[idxBrand];
  //     Object.entries(elem).forEach(
  //       ([key, value]) => (updatedBrand[key] = value)
  //     );
  //     brands.splice(idxBrand, 1, updatedBrand);
  //     return brands;
  //   case "categories":
  //     const idxCategories = categories.findIndex((item: any) => item.id === id);
  //     const updatetCategory: any = categories[idxCategories];
  //     Object.entries(elem).forEach(
  //       ([key, value]) => (updatetCategory[key] = value)
  //     );
  //     categories.splice(idxCategories, 1, updatetCategory);
  //     return categories;
  //   case "products":
  //     const idxProducts = products.findIndex((item: any) => item.id === id);
  //     const updatedProduct: any = products[idxProducts];
  //     Object.entries(elem).forEach(
  //       ([key, value]) => (updatedProduct[key] = value)
  //     );
  //     products.splice(idxProducts, 1, updatedProduct);
  //     return products;
  // }
};

const INSERT = (data: any, type: any) => {
  // switch (type) {
  //   case "order":
  //     if (true) {
  //       const {
  //         customer: { name, address, phone },
  //         products,
  //         summ,
  //       }: any = { ...data };
  //       const order = { id: orders.length + 1, products, summ };
  //       const customer = {
  //         id: customers.length + 1,
  //         name,
  //         address,
  //         phone,
  //         order_id: order.id,
  //       };
  //       orders.push(order);
  //       customers.push(customer);
  //     }
  //     return;
  //   case "products":
  //     products.push({
  //       id: products.length + 1,
  //       name: data.name,
  //       price: data.price,
  //       category_id: data.category_id,
  //       brand_id: data.brand_id,
  //       description: data.description,
  //       image: data.image,
  //     });
  //     break;
  //   case "categories":
  //     categories.push({
  //       id: categories.length + 1,
  //       name: data.name,
  //       parent_id: data.parent_id,
  //     });
  //     break;
  //   case "brands":
  //     brands.push({
  //       id: brands.length + 1,
  //       name: data.name,
  //     });
  //     brands.push({
  //       id: brands.length + 1,
  //       name: data.name,
  //     });
  //     return brands;
  // }
};

export { SELECT, DELETE, UPDATE, INSERT };




