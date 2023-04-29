import { SELECT, DELETE, UPDATE } from "../data";
export type OptionsType = {
  url: string;
  header: {
    "Content-Type": "application/json";
    method: "PUT" | "DELETE" | "POST";
  };
  body?: any;
};

const fetch = (options: OptionsType | string) => {
  const categories = SELECT("* FROM categories", null);
  const brands = SELECT("* FROM brands", null);
  const allProducts = SELECT("* FROM products", null);

  return new Promise((res, rej) => {
    return setTimeout(() => {
      if (typeof options == "string") {
        switch (options) {
          case "api/categories":
            return res(categories);
          case "api/brands":
            return res(brands);
          case "api/products":
            return res(allProducts);
        }
      } else {
        if (options.url === "api/login") {
          const adminLogin = SELECT(`* FROM admins`, options.body);
          res(adminLogin);
        }
        if (options.header.method === "DELETE") {
          const newData = DELETE(
            `FROM ${options.body.type} WHERE id =`,
            options.body.id
          );
          res(newData);
        }
        if (options.header.method === "PUT") {
          const newData = UPDATE(
            `${options.body.type} WHERE id =`,
            options.body.id,
            options.body
          );
          res(newData);
        }
      }
    }, 1000 * Math.random());
  });
};

export default fetch;
