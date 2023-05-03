import { Col, List, Space, Spin, Row } from "antd";
import { useContext } from "react";
import ProductCard from "../../components/ProductCard";
import { Context } from "../../store";

const StoreHomeContainer = () => {
  const { store, events } = useContext(Context);
  if (events.success) {
    return (
      <List
        grid={{ gutter: 10 }}
        size="small"
        dataSource={store.products.data!}
        renderItem={(product) => (
          <List.Item >
            <ProductCard product={product} />
          </List.Item>
        )}
      />
    );
  } else {
    return <Spin></Spin>;
  }
};
export default StoreHomeContainer;
