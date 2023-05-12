import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { useNavigate, useOutletContext } from "react-router-dom";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ product }: any) => {
  const { state, favoriteHandler, onProductSelect }: any = useOutletContext();
  const navigate = useNavigate()
  const cardClickHandle = (e: any) => {
    navigate(`/product/${product.id}`);
    // onProductSelect(product)
  };

  const isActive = (list: Array<any>) => {
    return list.some((item) => item.id === product.id);
  };

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
          <div className={styles.brand}>{product.brand.name}</div>
        </div>
        <div className={styles.name}>{product.name}</div>
      </div>
    </div>
  );
};

export default ProductCard;
