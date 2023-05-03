import { List, Spin } from "antd";
import { useCallback, useContext } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import { Context } from "../../store";

const productsCategoryFilter = (products: any, params: any) => {
  return products.filter((item: any) => String(item.category_id) === params.id);
};

const StoreProductsContainer = () => {
  const params = useParams();
  const {
    store: { products },
  } = useContext(Context);

  if (products.events.success) {
    const filtred = productsCategoryFilter(products.data, params);
    return (
      <List
        grid={{
          gutter: 16,
        }}
        dataSource={filtred}
        renderItem={(item, index) => (
          <List.Item key={index}>
            <ProductCard product={item} />
          </List.Item>
        )}
      />
    );
  } else {
    return <Spin></Spin>;
  }
};

export default StoreProductsContainer;
