//ТРУСЫ
// ДЕТАЛИ ТРУСОВ
const models = { 1: { id: 1, name: "Classic" }, 2: { id: 2, name: "Box" } };
const colors = { 1: { id: 1, name: "Red" }, 2: { id: 2, name: "Blue" } };
const sizes = { 1: { id: 1, name: "M" }, 2: { id: 2, name: "s" } };
const prices = { 1: { id: 1, value: 700 }, 2: { id: 2, value: 900 } };

const inderWearNames = {
  1: { id: 1, name: "Радость" },
  2: { id: 2, name: "Печаль" },
};

//1 ко многим
const underWear = {
  1: { modelId: 1, colorId: 2, sizeId: 2, priceId: 1, nameId: 1 },
  2: { modelId: 2, colorId: 1, sizeId: 1, priceId: 2, nameId: 2 },
};
//ТРУСЫ С ДЕТАЛЯМИ
const underWearWithDetails = Object.values(underWear).map(
  ({ modelId, colorId, sizeId, priceId, nameId }) => ({
    model: models[modelId].name,
    color: colors[colorId].name,
    size: sizes[sizeId].name,
    price: prices[priceId].value,
    name: inderWearNames[nameId].name,
  })
);

// console.log(underWearWithDetails);
//ЛОГ
// [
//   {
//       "model": "Classic",
//       "color": "Blue",
//       "size": "s",
//       "price": 700,
//       "name": "Радость"
//   },
//   {
//       "model": "Box",
//       "color": "Red",
//       "size": "M",
//       "price": 900,
//       "name": "Печаль"
//   }
// ]

// ПОЛЬЗОВАТЕЛИ
//ДЕТАЛИ ПОЛЬЗОВАТЕЛЕЙ
const userNames = {
  1: { id: 1, name: "Лесли" },
  2: { id: 2, name: "Mэт" },
  3: { id: 3, name: "admin" },
};
const userSurnames = {
  1: { id: 1, name: "Нильсон" },
  2: { id: 2, name: "Дэймон" },
  3: { id: 3, name: "admin" },
};
const logins = {
  1: { id: 1, login: "t1000", password: "winx", token: "_oouups" },
  2: { id: 2, login: "matt", password: "damme", token: "_helloworld" },
  3: { id: 3, login: "a", password: "a", token: "_admin" },
};

//1 ко многим
const users = {
  1: { id: 1, nameId: 1, surnameId: 1, isAdmin: false, loginId: 1, age: 15 },
  2: { id: 2, nameId: 2, surnameId: 2, isAdmin: false, loginId: 2, age: 120 },
  3: { id: 3, nameId: 1, surnameId: 3, isAdmin: true, loginId: 3, age: 18 },
};

//ПОЛЬЗОВАТЕЛИ С ДЕТАЛЯМИ
const usersWithDetails = Object.values(users).map(
  ({ isAdmin, loginId, age, nameId, surnameId }) => ({
    name: userNames[nameId].name,
    surname: userSurnames[surnameId].name,
    adminAccess: isAdmin,
    login: logins[loginId].login,
    password: logins[loginId].password,
    token: logins[loginId].token,
    age,
  })
);

// console.log(usersWithDetails);

//ЛОГ
// [
//   {
//       "name": "Лесли",
//       "surname": "Нильсон",
//       "adminAccess": false,
//       "login": "t1000",
//       "password": "winx",
//       "token": "oouups",
//       "age": 15
//   },
//   {
//       "name": "Mэт",
//       "surname": "Дэймон",
//       "adminAccess": true,
//       "login": "matt",
//       "password": "damme",
//       "token": "helloworld",
//       "age": 120
//   }
// ]

export { users, logins };
