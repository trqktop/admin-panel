import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { useContext } from "react";

import { useNavigate, useOutletContext } from "react-router-dom";
import { Context } from "../../store";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ product }: any) => {
  const { state, favoriteHandler, onProductSelect }: any = useOutletContext();
  const navigate = useNavigate()
  const cardClickHandle = (e: any) => {
    // navigate(`/product/${product.id}`);
    onProductSelect(product)
    navigate(`/product`);
  };

  const isActive = (list: Array<any>) => {
    return list.some((item) => item.id === product.id);
  };

  const renderBrand = (brands: any, product: any) => {
    const [brand] = brands.filter(
      (brand: any) => brand.id === product.brand_id
    );
    return brand.name;
  };

  // const brand = renderBrand(brands.data, product);

  return (
    <div className={styles.card} onClick={cardClickHandle}>
      <div className={styles.imgContainer}>
        <img src={product.image} alt={product.name} className={styles.img} />
        <button
          className={styles.likeButton}
          onClick={(e) => favoriteHandler(e, product)}
        >
          {isActive(state.favoriteList) ? (
            <HeartFilled
              style={{
                color: "#1677ff",
              }}
            />
          ) : (
            <HeartOutlined
              style={{
                color: "#1677ff",
              }}
            />
          )}
        </button>
      </div>
      <div className={styles.desciption}>
        <div style={{ display: "flex" }}>
          <div className={styles.price}>{product.price}&thinsp;₽ </div>
          <div className={styles.brand}>{product.brandName}</div>
        </div>
        <div className={styles.name}>{product.name}</div>
      </div>
    </div>
  );
};

export default ProductCard;
