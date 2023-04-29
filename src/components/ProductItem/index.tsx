import Card from "antd/es/card/Card";
import Meta from "antd/es/card/Meta";
// import {
//   SettingOutlined,
//   EditOutlined,
//   EllipsisOutlined,
// } from "@ant-design/icons";
import { DBProductType } from "../../types";

type PropsType = {
  product: DBProductType;
};

const ProductItem = ({ product }: PropsType) => {
  return (
    <Card
      hoverable
      style={{ maxWidth: "250px" }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      // actions={[
      //   <SettingOutlined key="setting" />,
      //   <EditOutlined key="edit" />,
      //   <EllipsisOutlined key="ellipsis" />,
      // ]}
    >
      <Meta
        style={{ maxWidth: "250px" }}
        title={
          <div>
            <li>{product.price} &#8381;</li>
            <li> {product.name}</li>
          </div>
        }
        description={product.description}
      />
    </Card>
  );
};

export default ProductItem;
