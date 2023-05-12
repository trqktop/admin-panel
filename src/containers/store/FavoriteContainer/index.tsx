import { useOutletContext } from "react-router-dom";
import ProductCard from "../../../components/store/ProductCard";
import ProductList from "../../../components/store/ProductList";
import { Spin } from "antd";
import styles from './FavoriteContainer.module.scss'

const FavoriteContainer = () => {
  const { state: { favoriteList } }: any = useOutletContext();
  if (favoriteList.length)
    return (
      <ul className={styles.container}>
        {favoriteList.map((product: any, index: any) =>
        (
          <li key={index}>
            {<ProductCard product={product} />}
          </li>
        ))
        }
      </ul>
    );
  return <h1>В избранном пусто</h1>;
};
export default FavoriteContainer;
   // <ProductList
      //   products={favoriteList}
      //   render={(product: any, index: any) => (
      //     <li key={index}>
      //       <ProductCard product={product} />
      //     </li>
      //   )}
      // />
