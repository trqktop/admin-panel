import { Drawer } from "antd";
import StoreMenu from "../StoreMenu";
const DrawerMenu = ({ isOpen, onClose }: any) => {
  return (
    <Drawer
      placement={"left"}
      width={"fit-content"}
      onClose={onClose}
      open={isOpen}
    >
      <StoreMenu />
    </Drawer>
  );
};

export default DrawerMenu;
