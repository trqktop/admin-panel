import { Pagination } from "antd";
import styles from "./ProductList.module.scss";
import { useNavigate, useOutletContext } from "react-router-dom";
const ProductList = ({ products, render }: any) => {
  const { onChangePagination }: any = useOutletContext()

  return <div>
    <ul className={styles.container}>{products.items.map(render)}</ul>
    <Pagination size="small" current={products.page} simple total={products.length} pageSize={products.limit} onChange={onChangePagination} />
  </div>;
};

export default ProductList;
