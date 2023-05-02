import collect from "collect.js";

const brandsDB = [
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

const productsDB = [
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

const categoriesDB = [
  { id: 1, name: "Одежда", parent_id: null, children: null },
  { id: 2, name: "Обувь", parent_id: null, children: null },
  { id: 3, name: "Майки", parent_id: 1, children: null },
  { id: 4, name: "Штаны", parent_id: 1, children: null },
  { id: 5, name: "Кеды", parent_id: 2, children: null },
  { id: 6, name: "Кросовки", parent_id: 2, children: null },
  { id: 7, name: "Ботинки", parent_id: 2, children: null },
];



const getCollections = () => {
  const categories = collect(categoriesDB).toArray()
  const products = collect(productsDB).toArray()
  const brands = collect(brandsDB).toArray()
  return {
    products, categories, brands
  }
}

export {
  getCollections
}