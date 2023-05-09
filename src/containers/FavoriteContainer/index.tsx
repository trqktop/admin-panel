import { useOutletContext } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import ProductList from "../../components/ProductList";

const FavoriteContainer = () => {
  const { state: { favoriteList } }: any = useOutletContext();
  if (favoriteList.length)
    return (
      <ProductList
        products={favoriteList}
        render={(product: any, index: any) => (
          <li key={index}>
            <ProductCard product={product} />
          </li>
        )}
      />
    );
  return <h1>В избранном пусто</h1>;
};
export default FavoriteContainer;
