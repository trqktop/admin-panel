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

  return result.map((item) => {
    if (item.children) {
      return { ...item, products: item.children.reduce((acc: number, curr: any) => acc + curr.products, 0) }
    }
    return item
  })
}

const orders: OrderType[] = [
  {
    id: 1,
    customer_id: 1,
    products: [
      { id: 220, quantity: 4, price: 161 },
      { id: 221, quantity: 4, price: 161 },
    ],
    summ: 644,
  },
  {
    id: 2,
    customer_id: 2,
    products: [
      { id: 123, quantity: 3, price: 161 },
      { id: 1, quantity: 2, price: 161 },
    ],
    summ: 1233,
  },
  {
    id: 3,
    customer_id: 3,
    products: [
      { id: 12, quantity: 1, price: 161 },
      { id: 2, quantity: 4, price: 161 },
    ],
    summ: 211,
  },
];

const customers: CustomerType[] = [
  {
    id: 1,
    name: "Олег",
    phone: "89299991232",
    address: "ул. Пушкина , д. Колотушкина",
  },
  {
    id: 2,
    name: "Павел",
    phone: "89186963655",
    address: "ул.Черная , д. 2",
  },
  {
    id: 3,
    name: "Игорь",
    phone: "89625595535",
    address: "ул.Белая , д. 1",
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


const collection = (products: ProductType[], brands: BrandType[], categories: CategoryType[]) => {
  const joinedProducts = (arr: null | ProductType[] | ProductType[]): JoinedProduct[] => {

    const findBrand = (id: number) => brands.find((item) => item.id === id)!
    const findCategory = (id: number) => categories.find((item) => item.id === id)!
    const filtered = arr ?? products
    return filtered.map(({ id, name, price, description, image, brand_id, category_id }) => (
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

  const getOrdersWithCustomers = () => {
    return orders.map((order) => {
      const [findCustomer] = collect(customers).where('id', '===', order.customer_id).toArray()
      const findProducts: any = order.products.map((product) => {
        const [info] = joinedProducts(collect(products).where('id', '===', product.id).toArray())
        return { ...product, ...info }
      })
      return { ...order, customer: findCustomer, products: findProducts }
    })
  }

  return { joinedProducts, joinedBrands, joinedCategories, filterCategoryProducts, getOrdersWithCustomers }
}


const searchProducts = (searchText: string, collect: any): any => {
  const filteredList = searchText.trim().toLowerCase().split(' ');
  const filteredProducts = collect.joinedProducts(null).filter((product: any) => {
    const nameWords = product.name.trim().toLowerCase().split(' ');
    const foundWords = filteredList.filter((item) => {
      const itemWords = item.trim().toLowerCase().split(' ');
      return itemWords.some((itemWord) => {
        return nameWords.some((nameWord: any) => {
          const nWord = nameWord.trim().toLowerCase();
          return nWord === itemWord || nWord.includes(itemWord) || itemWord.includes(nWord);
        });
      });
    });
    return foundWords.length === filteredList.length;
  }).sort((a: any, b: any) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    const relevanceA = nameA === searchText.trim().toLowerCase() ? 100 : nameA.split(' ').reduce((total: any, nameWord: any) => {
      const itemWord = searchText.trim().toLowerCase();
      if (nameWord === itemWord) {
        return total + nameWord.length * 3;
      }
      if (nameWord.includes(itemWord) || itemWord.includes(nameWord)) {
        return total + nameWord.length * 2;
      }
      return total;
    }, 0);
    const relevanceB = nameB === searchText.trim().toLowerCase() ? 100 : nameB.split(' ').reduce((total: any, nameWord: any) => {
      const itemWord = searchText.trim().toLowerCase();
      if (nameWord === itemWord) {
        return total + nameWord.length * 3;
      }
      if (nameWord.includes(itemWord) || itemWord.includes(nameWord)) {
        return total + nameWord.length * 2;
      }
      return total;
    }, 0);
    return relevanceB - relevanceA;
  });
  return filteredProducts
}




const SELECT = (
  ctx: string,
  LIMIT: number,
  OFFSET: any,
  currentCategory: any,
  data: any,
  searchText: any,
  brandFilter: any

) => {
  const collect = collection(products, brands, categories)
  const startIndex = OFFSET;
  const endIndex = OFFSET + LIMIT;

  switch (ctx) {
    case 'products':
      const changeCategory = currentCategory
      if (changeCategory) {
        const products = collect.filterCategoryProducts(currentCategory)
        const offsetProducts = products.slice(startIndex, endIndex)
        return { items: offsetProducts, length: products.length }
      }
      if (searchText) {
        const filteredProducts: ProductType[] = searchProducts(searchText, collect)
        const offsetFilteredProducts = filteredProducts.slice(startIndex, endIndex)
        return { items: offsetFilteredProducts, length: offsetFilteredProducts.length };
      }
      if (brandFilter) {
        if (brandFilter.length) {
          const brandsId = brandFilter
          const productsWithBrands: any[] = collect.joinedProducts(null).filter((item: any) => brandsId.some((id: number) => id === item.brand.id))
          const offsetFilteredProducts = productsWithBrands.slice(startIndex, endIndex)
          return { items: offsetFilteredProducts, length: productsWithBrands.length };
        }
      }
      const products = collect.joinedProducts(null)
      const offsetProducts = products.slice(startIndex, endIndex)
      return { items: offsetProducts, length: products.length }
    case 'brands':
      const brands = collect.joinedBrands()
      return { items: brands, length: brands.length }

    case 'categories':
      const categories = collect.joinedCategories()
      return { items: categories, length: categories.length }

    case 'login':
      const idx: any = collectJS(admins).search(
        ({ name, password }) =>
          data.username === name && password === data.password
      );
      if (idx > -1) {
        return { items: admins[idx], length: admins.length };
      }
      return { items: "error", length: "error" };
    case 'orders':
      const orders = collect.getOrdersWithCustomers()
      return { items: orders, length: orders.length };
    // case 'search':
    //   //Алгоритм Левенштейна , находит длину совподения и выдает результат по реливантности
    //   const filteredList = data.toLowerCase().split(' ');
    //   console.log(filteredList)
    //   const filteredProducts = collect.joinedProducts(null).filter((product) => {
    //     const name = product.name.toLowerCase();
    //     const brand = product.brand.name.toLowerCase();
    //     const category = product.category.name.toLowerCase();
    //     let relevance = 0;
    //     filteredList.forEach((item: string) => {
    //       if (name.includes(item)) {
    //         relevance += item.length * 2;
    //       }
    //       if (brand.includes(item)) {
    //         relevance += item.length;
    //       }
    //       if (category.includes(item)) {
    //         relevance += item.length;
    //       }
    //     });
    //     return relevance > 0;
    //   }).sort((a, b) => {
    //     const nameA = a.name.toLowerCase();
    //     const nameB = b.name.toLowerCase();
    //     return nameA.indexOf(data) - nameB.indexOf(data);
    //   });
    //   const offsetFilteredProducts = filteredProducts.slice(startIndex, endIndex)
    //   return { items: offsetFilteredProducts, length: offsetFilteredProducts.length };
  }
};

const DELETE = (ctx: string,
  LIMIT: number,
  OFFSET: any,
  currentCategory: any,
  data: any, id: any) => {
  switch (ctx) {
    case "brands":
      const idxBrands = brands.findIndex((item: any) => item.id === data.id);
      brands.splice(idxBrands, 1);
      return SELECT(ctx, LIMIT, OFFSET, currentCategory, data, null, null)
    case "categories":
      const idxCategories = categories.findIndex(
        (item: any) => item.id === data.id
      );
      categories.splice(idxCategories, 1);
      return SELECT(ctx, LIMIT, OFFSET, currentCategory, data, null, null)
    case "products":
      const idxProducts = products.findIndex(
        (item: any) => item.id === data.id
      );
      products.splice(idxProducts, 1);
      return SELECT(ctx, LIMIT, OFFSET, currentCategory, null, null, null)
  }
};

const UPDATE = (url: any, limit: any, offset: any, currentCategory: any, data: any, id: any) => {
  switch (url) {
    case 'products':
      const productIdx = products.findIndex((product: any) => product.id === id)
      products.splice(productIdx, 1, { ...data, id })
      return SELECT(url, limit, offset, currentCategory, { ...data, id }, null, null)
    case 'brands':
      const brandIdx = brands.findIndex((brand: any) => brand.id === id)
      brands.splice(brandIdx, 1, { ...data, id })
      return SELECT(url, limit, offset, currentCategory, { ...data, id }, null, null)
    case 'categories':
      const categoryIdx = categories.findIndex((category: any) => category.id === id)
      const updatedCategory = { ...categories[categoryIdx], ...data }
      console.log(updatedCategory)
      categories.splice(categoryIdx, 1, updatedCategory)
      return SELECT(url, limit, offset, currentCategory, updatedCategory, null, null)
  }
};

const INSERT = (type: any, limit: any, offset: any, currentCategory: any, data: any) => {
  switch (type) {
    case 'products':
      const poductId = products.length + 1
      products.push({ ...data, id: poductId })
      return SELECT(type, limit, offset, currentCategory, { ...data, id: poductId }, null, null)
    case 'brands':
      const brandId = brands.length + 1
      brands.push({ ...data, id: brandId })
      return SELECT(type, limit, offset, currentCategory, { ...data, id: brandId }, null, null)
    case 'categories':
      const categoryId = categories.length + 1
      categories.push({ ...data, id: categoryId, parent_id: data.parent_id ?? null })
      return SELECT(type, limit, offset, currentCategory, { ...data, id: categoryId }, null, null)
    case 'order':
      const customerId = customers.length + 1
      customers.push({ ...data.customer, id: customerId })
      orders.push({ id: orders.length + 1, customer_id: customerId, products: data.products, summ: data.summ })
      console.log(orders, customers)
  }
};

export { SELECT, DELETE, UPDATE, INSERT };




