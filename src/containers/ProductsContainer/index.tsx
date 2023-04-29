import { useParams } from "react-router-dom";
import fetch from "../../server";
import ProductItem from "../../components/ProductItem";
import { Layout, Row, Col } from "antd";
import { useContext } from "react";
import { Context } from "../../store";

const ProductsContainer = () => {
  const state = useContext(Context);
  const params = useParams();
  const id = Number(params.id);
  let products: any = [];
  if (state.store.allProducts.data)
    products = state.store.allProducts?.data.filter(
      (item) => item.category_id === id
    );

  return (
    <Layout>
      <Row gutter={[16, 16]} align="middle" justify="center">
        {products.map((product: any, index: any) => (
          <Col key={index}>
            <ProductItem product={product} />
          </Col>
        ))}
      </Row>
    </Layout>
  );
};

export default ProductsContainer;
