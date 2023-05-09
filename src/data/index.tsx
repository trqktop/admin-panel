import collect from "collect.js";

const brands = [
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

const products = [
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
    const product = ({ ...item, id: idCounter })
    products.push(product)
    idCounter++;
  })
}


const admins = [{ id: 1, name: "a", password: "a", token: "s" }];
const categories: any = [
  { id: 1, name: "Одежда", parent_id: null },
  { id: 2, name: "Обувь", parent_id: null },
  { id: 3, name: "Майки", parent_id: 1 },
  { id: 4, name: "Штаны", parent_id: 1 },
  { id: 5, name: "Кеды", parent_id: 2 },
  { id: 6, name: "Кросовки", parent_id: 2 },
  { id: 7, name: "Ботинки", parent_id: 2 },
];


const getCollections = () => {
  return {
    products,
    categories,
    brands,
  };
};

const deleteItem = (collect: any, id: any) => {
  const idx = collect.findIndex((item: any) => item.id === id);
  collect.splice(idx, 1);
};

const deleteItemFromCollection = (nameCollection: any, id: any) => {
  switch (nameCollection) {
    case "products":
      deleteItem(products, id);
      return getCollections();
    case "brands":
      deleteItem(brands, id);
      return getCollections();
    case "categories":
      deleteItem(categories, id);
      return getCollections();
  }
};

const updateItemFromCollection = (nameCollection: any, id: any) => {
  console.log(nameCollection, id);
};


const getFragmentWithBrandAndCategory = (fragment: any) => {
  return fragment.map((item: any) => {
    const brand: any = brands.find((brand) => brand.id === item.brand_id);
    const category = categories.find((category: any) => category.id === item.category_id);
    return { ...item, brandName: brand.name, categoryName: category.name };
  });
};


// SELECT * FROM products LIMIT 20 OFFSET 20;
const SELECT = (ctx: string, LIMIT: number, OFFSET: any, currentCategory: any) => {
  switch (ctx) {
    case 'products':
      const startIndex = OFFSET;
      const endIndex = OFFSET + LIMIT;
      let fragment: any;
      if (currentCategory) {
        fragment = collect(products).where('category_id', '==', currentCategory).toArray()
        return getFragmentWithBrandAndCategory(fragment);
      }
      fragment = products.slice(startIndex, endIndex);
      return getFragmentWithBrandAndCategory(fragment);
    case 'brands':
      return brands
    case 'categories':
      return categories
    case 'count':
      if (currentCategory) {
        return collect(products).where('category_id', '==', currentCategory).toArray().length
      }
      return products.length
  }
}

// SELECT * FROM products LIMIT 20;

export {
  getCollections,
  deleteItemFromCollection,
  updateItemFromCollection,
  SELECT
};


