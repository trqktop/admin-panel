import {
  HeartFilled,
  HeartOutlined,
  ShoppingFilled,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import Card from "antd/es/card/Card";
import Meta from "antd/es/card/Meta";
import { useNavigate, useOutletContext } from "react-router-dom";

const ProductCard = ({ product }: any) => {
  const navigate = useNavigate();
  const [state, fovoriteHandler]: any = useOutletContext();

  const cardClickHanlder = (e: any) => {
    navigate(`/product/${product.id}`);
  };

  const isActive = (list: Array<any>) => {
    return list.some((item) => item.id === product.id);
  };

  return (
    <Card
      hoverable
      onClick={cardClickHanlder}
      style={{ width: 340 }}
      cover={<img alt="example" src={product.image} />}
    >
      <div>
        <Meta
          title={
            <ul>
              <li>{product.name}</li>
              <li>{product.price}</li>
            </ul>
          }
        />
        <ButtonGroup>
          <Button onClick={(e) => fovoriteHandler(e, product)}>
            {isActive(state.favoriteList) ? <HeartFilled /> : <HeartOutlined />}
          </Button>
        </ButtonGroup>
      </div>
    </Card>
  );
};

export default ProductCard;
