import { Spin } from "antd";
import { useContext } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import ProductCard from "../ProductCard";
import ProductList from "../ProductList";
import { Context } from "../../store";

const productsCategoryFilter = (products: any, params: any) => {
  return products.filter((item: any) => String(item.category_id) === params.id);
};

const StoreCategories = () => {
  const params = useParams();

  // const {
  //   store: { products },
  // } = useContext(Context);
  // const [{ brandFilter }]: any = useOutletContext();
  // if (products.events.success) {
  //   const filtred = productsCategoryFilter(products.data, params);

  //   const productsWithBrandFilter = (products: any) => {
  //     const result = products.filter((prod: any) => {
  //       return brandFilter.some((brand: any) => brand === prod.brand_id);
  //     });
  //     return result;
  //   };

  //   const productsData = brandFilter.length
  //     ? productsWithBrandFilter(filtred)
  //     : filtred;

  //   return (
  //     <ProductList
  //       products={productsData}
  //       render={(product: any, index: number) => (
  //         <li key={index}>
  //           <ProductCard product={product} />
  //         </li>
  //       )}
  //     />
  //   );
  // } else {
  //   return <Spin></Spin>;
  // }
  return null
};

export default StoreCategories;
