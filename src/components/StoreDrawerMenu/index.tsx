import { Drawer } from "antd";
import StoreMenu from "../StoreMenu";
const DrawerMenu = ({ isOpen, onClose, categories, onChangeCurrentCategory }: any) => {
  return (
    <Drawer
      placement={"left"}
      width={"fit-content"}
      onClose={onClose}
      open={isOpen}
    >
      <StoreMenu categories={categories} onChangeCurrentCategory={onChangeCurrentCategory} />
    </Drawer>
  );
};

export default DrawerMenu;
