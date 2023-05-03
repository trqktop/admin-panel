import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
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
          <Button onClick={() => removeItemFromBacketListHandler(product)}>
            <MinusOutlined />
          </Button>
          <Button onClick={() => addItemToBacketListHandler(product)}>
            <PlusOutlined />
          </Button>
          <Space>{findQuantity()}</Space>
        </>
      ) : (
        <Button onClick={(e) => basketListHandler(e, product)}>
          Добавить корзину
        </Button>
      )}
    </ButtonGroup>
  );
};
export default ProductQuantityControllPanel;
