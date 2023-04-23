import { users, logins } from "../data/data";

export type Options = {
  method: "POST" | "GET";
  headers: {
    "Content-Type": "application/json";
  };
  body: string;
};

const fakeService = {
  baseUrl: "example",
  methods: "POST GET",

  fetch(url: string, options: Options) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.isValidityRequest(url, options)) {
          const user = this.isUserRegistered(options);
          if (user) {
            resolve(
              JSON.stringify({
                success: true,
                message: "Авторизация прошла успешно",
                data: {
                  user,
                },
              })
            );
          } else {
            reject(
              JSON.stringify({
                message: "Пользователь не найден",
                code: 404,
              })
            );
          }
        } else {
          reject(
            JSON.stringify({
              message: "Был отправлен неверный запрос",
              code: 400,
            })
          );
        }
      }, 3000 * Math.random());
    });
  },

  isUserRegistered(options: Options) {
    const user = JSON.parse(options.body);
    return Object.values(logins).find(
      (log) => log.login === user.username && log.password === user.password
    );
  },

  isValidityRequest(url: string, options: Options) {
    return (
      this.baseUrl === url &&
      this.methods.includes(options.method) &&
      typeof options.body === "string"
    );
  },
};

export default fakeService;
