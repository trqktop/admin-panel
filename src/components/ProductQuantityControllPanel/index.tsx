import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Space, Typography } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { useOutletContext } from "react-router-dom";

const ProductQuantityControllPanel = ({ product }: any) => {
  const [
    state,
    ,
    basketListHandler,
    addItemToBacketListHandler,
    removeItemFromBacketListHandler,
  ]: any = useOutletContext();

  const isToggle = state.basketList.some((item: any) => item.id === product.id);
  const findQuantity = () =>
    state.basketList.find((item: any) => item.id === product.id).quantity;

  return (
    <ButtonGroup>
      {isToggle ? (
        <>
          <Button
            type="primary"
            onClick={() => removeItemFromBacketListHandler(product)}
          >
            <MinusOutlined />
          </Button>
          <Space size="large">
            <span style={{ padding: "10px", fontSize: "20px" }}>
              {findQuantity()}
            </span>
          </Space>
          <Button
            type="primary"
            onClick={() => addItemToBacketListHandler(product)}
          >
            <PlusOutlined />
          </Button>
        </>
      ) : (
        <Button type="primary" onClick={(e) => basketListHandler(e, product)}>
          Добавить корзину
        </Button>
      )}
    </ButtonGroup>
  );
};
export default ProductQuantityControllPanel;
