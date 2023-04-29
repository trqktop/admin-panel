import collect from "collect.js";
import { DBProductType, DBCategoryType, DBBrandsType } from "../types";

const brands: Array<DBBrandsType> = [
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

const products: Array<DBProductType> = [
  {
    id: 1,
    name: "Майка белая",
    price: 10,
    category_id: 3,
    brand_id: 1,
    description: `Отличная майка, подойдет для любых случаев жизни. Подари себе две и никогда не думай, что надеть на завтра!`,
  },
  {
    id: 2,
    name: "Майка черная",
    price: 10,
    category_id: 3,
    brand_id: 2,
    description: `Отличная майка, подойдет для любых случаев жизни. Подари себе две и никогда не думай, что надеть на завтра!`,
  },
  {
    id: 3,
    name: "Штаны джинсовые",
    price: 20,
    category_id: 4,
    brand_id: 3,
    description: `Штаны, которые подчеркнут все прелести твоей фигуры. Почувствуй себя спортсменом и выиграй гонку до метро!`,
  },
  {
    id: 4,
    name: "Штаны спортивные",
    price: 30,
    category_id: 4,
    brand_id: 2,
    description: `Штаны, которые подчеркнут все прелести твоей фигуры. Почувствуй себя спортсменом и выиграй гонку до метро!`,
  },
  {
    id: 5,
    name: "Кеды красивые",
    price: 40,
    category_id: 5,
    brand_id: 1,
    description: `Кеды, которые сделают тебя неповторимым. Носи их на свидание, на работу или на вечеринку - они всегда будут к месту!`,
  },
  {
    id: 6,
    name: "Кеды обычные",
    price: 40,
    category_id: 5,
    brand_id: 2,
    description: `Кеды, которые сделают тебя неповторимым. Носи их на свидание, на работу или на вечеринку - они всегда будут к месту!`,
  },
  {
    id: 7,
    name: "Кросовки спортиные",
    price: 610,
    category_id: 6,
    brand_id: 3,
    description: `Кроссовки, которые не дадут тебе устать. Беги, прыгай, двигайся - они всегда будут за тобой!`,
  },
  {
    id: 8,
    name: "Кросовки спортиные без шнурков",
    price: 360,
    category_id: 6,
    brand_id: 1,
    description: `Кроссовки, которые не дадут тебе устать. Беги, прыгай, двигайся - они всегда будут за тобой!`,
  },
  {
    id: 9,
    name: "Ботинки спортиные",
    price: 1610,
    category_id: 7,
    brand_id: 3,
    description: `Боинки, которые дадут тебе силы на целый день. С ними ты сможешь поднять любой груз и сделать это с улыбкой на лице!`,
  },
  {
    id: 10,
    name: "Боинки красивые",
    price: 161,
    category_id: 7,
    brand_id: 2,
    description: `Боинки, которые дадут тебе силы на целый день. С ними ты сможешь поднять любой груз и сделать это с улыбкой на лице!`,
  },
];

const admins = [{ id: 1, name: "a", password: "a", token: "s" }];

const categories: Array<DBCategoryType> = [
  { id: 1, name: "Одежда", parent_id: null, children: [] },
  { id: 2, name: "Обувь", parent_id: null, children: [] },
  { id: 3, name: "Майки", parent_id: 1, children: [] },
  { id: 4, name: "Штаны", parent_id: 1, children: [] },
  { id: 5, name: "Кеды", parent_id: 2, children: [] },
  { id: 6, name: "Кросовки", parent_id: 2, children: [] },
  { id: 7, name: "Ботинки", parent_id: 2, children: [] },
];

const categoriesCollection = collect(categories);
const productCollection = collect(products);
const brandsColletion = collect(brands);
const adminsCollection = collect(admins);

const categoriesToTree = () => {
  const mainCategoriesCollection = categoriesCollection.where(
    "parent_id",
    null
  );
  const subCategoriesCollection = categoriesCollection.where("parent_id", true);
  return mainCategoriesCollection.map((item: DBCategoryType) => {
    item.children = subCategoriesCollection
      .where("parent_id", "===", item.id)
      .toArray();
    return item;
  });
};

const SELECT = (request: string, data: string | any) => {
  if (request.includes("* FROM products WHERE category_id =")) {
    const products = Array.from(
      productCollection.where("category_id", "==", data)
    );
    return products;
  }
  if (request.includes("* FROM categories")) {
    return Array.from(categoriesToTree());
  }
  if (request.includes("* FROM brands")) {
    return Array.from(brandsColletion);
  }
  if (request.includes("* FROM products")) {
    return Array.from(productCollection);
  }
  if (request.includes("* FROM admins")) {
    if (data?.username) {
      return Array.from(
        adminsCollection
          .where("password", "==", data.password)
          .where("name", "==", data.username)
      );
    }
  }
};

const deleteItemFrom = (collect: any, id: any) => {
  const idx = collect.search((item: any) => item.id === id);
  collect.splice(idx, 1);
};

const DELETE = (request: string, id: number) => {
  if (request.includes("FROM allProducts WHERE id =")) {
    deleteItemFrom(productCollection, id);
    return Array.from(productCollection);
  }
  if (request.includes("FROM categories WHERE id =")) {
    deleteItemFrom(categoriesCollection, id);
    return Array.from(categoriesToTree());
  }
  if (request.includes("FROM brands WHERE id =")) {
    deleteItemFrom(brandsColletion, id);
    return Array.from(brandsColletion);
  }
};
const UPDATE = (request: string, id: number, data: any) => {
  if (request.includes("allProducts WHERE id =")) {
    return productCollection
      .map((product) => {
        if (product.id === id) {
          return product;
        }
        return product;
      })
      .all();
  }
  if (request.includes("categories WHERE id =")) {
    // deleteItemFrom(categoriesCollection, id);
    // return Array.from(categoriesToTree());
  }
  if (request.includes("brands WHERE id =")) {
    // deleteItemFrom(brandsColletion, id);
    // return Array.from(brandsColletion);
  }
};

export { DELETE, SELECT, UPDATE };
