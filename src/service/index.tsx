import { SELECT, DELETE, UPDATE, INSERT } from "../data";
class Service {
  url: string;
  limit: any;
  offset: any;
  page: any;
  data: any;
  postData: any;
  currentCategory: any;
  searchText?: string
  brandFilter?: any
  constructor() {
    this.url = "";
    this.limit = 20;
    this.offset = 0;
    this.page = 0;
    this.data = null;
    this.postData = null;
    this.currentCategory = null;
    this.brandFilter = null
  }

  options({ url, page, limit, currentCategory, searchText, brandFilter }: any) {
    this.limit = limit;
    this.url = url;
    this.page = page;
    this.currentCategory = currentCategory;
    this.offset = (page - 1) * this.limit;
    this.searchText = searchText
    this.brandFilter = brandFilter
  }

  async get() {
    await new Promise((res) => setTimeout(res, 1000 * Math.random()));
    return this.initDataCtx();
  }

  async post(data: any) {
    this.postData = data;
    INSERT(this.url,
      this.limit,
      this.offset,
      this.currentCategory,
      data);
    await new Promise((res) => setTimeout(res, 1000 * Math.random()));
    return this.initDataCtx();
  }

  async patch({ data, id }: any) {
    UPDATE(this.url,
      this.limit,
      this.offset,
      this.currentCategory,
      data,
      id
    );
    await new Promise((res) => setTimeout(res, 1000 * Math.random()));
    return this.initDataCtx();
  }

  async delete(data: any) {
    DELETE(this.url, this.limit, this.offset, this.currentCategory, data, data.id
    );
    await new Promise((res) => setTimeout(res, 1000 * Math.random()));
    return this.initDataCtx();
  }

  initDataCtx() {
    return SELECT(
      this.url,
      this.limit,
      this.offset,
      this.currentCategory,
      this.postData,
      this.searchText,
      this.brandFilter
    );
  }
}

export default Service;
