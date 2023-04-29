import { Col, Layout, Row, Checkbox, Space } from "antd";
import { useCallback, useContext, useState } from "react";
import { Context } from "../../store";
import RenderProductItem from "../../components/ProductItem";
import Sider from "antd/es/layout/Sider";

const HomeContainer: React.FC = () => {
  const context = useContext(Context);
  const [state, setState]: any = useState({
    products: null,
  });
  const products = state.products ?? context.store.allProducts.data;
  const brands = context.store.brands.data!;

  const checkBoxHandler = (e: any) => {
    if (e.length) {
      const filter = context.store.allProducts.data?.filter((item: any) => {
        return e.includes(item.brand_id);
      });
      setState((p: any) => ({ ...p, products: filter }));
    } else {
      setState((p: any) => ({ ...p, products: null }));
    }
  };

  const transform = useCallback((brands: any) => {
    return brands?.map(({ id, name }: any) => ({
      label: name,
      value: id,
    }));
  }, []);

  const checkboxOptions = transform(brands);
  return (
    <Layout style={{ padding: 20 }}>
      <Sider theme="light">
        <Space direction="vertical">
          <Checkbox.Group
            options={checkboxOptions}
            onChange={checkBoxHandler}
          />
        </Space>
      </Sider>
      <Row
        gutter={[16, 16]}
        style={{
          maxWidth: "80%",
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        {products?.map((item: any, index: any) => (
          <Col key={index}>
            <RenderProductItem product={item} />
          </Col>
        ))}
      </Row>
    </Layout>
  );
};
export default HomeContainer;
