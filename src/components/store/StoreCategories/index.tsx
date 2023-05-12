
import { useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import ProductCard from "../ProductCard";
import ProductList from "../ProductList";

const StoreCategories = () => {
  const params = useParams();
  const { onChangeProductsCurrentCategory, state }: any = useOutletContext()

  useEffect(() => {
    onChangeProductsCurrentCategory(params.id)
  }, [params])


  return <ProductList
    products={state.products}
    render={(product: any, index: number) => (
      <li key={index}>
        <ProductCard product={product} />
      </li>
    )}
  />

};

export default StoreCategories;
