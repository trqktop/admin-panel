import styles from "./ProductList.module.scss";
const ProductList = ({ products, render }: any) => {
  return <ul className={styles.container}>{products.map(render)}</ul>;
};

export default ProductList;
