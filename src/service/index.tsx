import { SELECT } from '../data'

// const service: any = {
//     link: '',
//     limit: 20,
//     offset: 0,
//     page: 1,
//     options(url: string, page: number) {
//         this.link = url;
//         this.page = page;
//         this.offset = (page - 1) * this.limit
//         this.data = this.initDataCtx()
//     },
//     get() {
//         return new Promise((res, rej) => {
//             setTimeout(() => {
//                 res(this.data);
//             }, 1000 * Math.random());
//         });
//     },
//     post() { },
//     put() { },
//     delete() { },
//     initDataCtx() {
//         return SELECT(this.link, this.limit, this.offset)
//         // switch (this.link) {
//         //     case 'categories':
//         //         return 'categories'
//         //     case 'brands':
//         //         return 'brands'
//         //     case 'products':
//         //         return SELECT(this.link, 20, 0)
//         // }
//     }
// }

class Service {
  link: string;
  limit: number;
  offset: number;
  page: number;
  data: any;
  currentCategory: any

  constructor() {
    this.link = '';
    this.limit = 20;
    this.offset = 0;
    this.page = 0;
    this.data = null;
    this.currentCategory = null
  }

  options(url: string, page: number, limit: number, currentCategory: any) {
    this.limit = limit
    this.link = url;
    this.page = page;
    this.currentCategory = currentCategory
    this.offset = (page - 1) * this.limit;
    this.data = this.initDataCtx();
  }

  async get() {
    await new Promise((res) => setTimeout(res, 3000 * Math.random()));
    return this.data;
  }

  post() { }

  put() { }

  delete() { }

  initDataCtx() {
    return SELECT(this.link, this.limit, this.offset, this.currentCategory)
    // switch (this.link) {
    //     case 'categories':
    //         return 'categories'
    //     case 'brands':
    //         return 'brands'
    //     case 'products':
    //         return SELECT(this.link, 20, 0)
    // }
  }
}
export default Service

